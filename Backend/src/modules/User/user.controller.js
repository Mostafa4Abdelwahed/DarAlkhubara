const asyncHandler = require("express-async-handler");
const { user, ValidationAddUser } = require("../../../Database/Models/user.model");
const bcrypt = require("bcryptjs");
const cloudinary = require("../../../utils/cloudinary")

module.exports.getAllUsersCtrl = asyncHandler(async (req, res) => {
    const User_Per_Page = 10;
    const { pageNumber } = req.query;
    const data = await user.find().sort({ createdAt: -1 }).select("-password");
    const Total_Users = data.length;
    const Total_Pages = Math.ceil(data.length / User_Per_Page);

    if (pageNumber) {
        const data = await user.find()
            .select("-password")
            .sort({ createdAt: -1 })
            .skip((pageNumber - 1) * User_Per_Page)
            .limit(User_Per_Page);
        return res.status(200).json({ message: "success", data, Total_Users, Total_Pages })
    }

    res.status(200).json({ message: "success", data, Total_Users, Total_Pages })
})

module.exports.addNewUserCtrl = asyncHandler(async (req, res) => {

    const { error } = ValidationAddUser(req.body);
    if (error) {
        return res.status(400).json({ mesage: error.details[0].message })
    }

    const email_exist = await user.findOne({ email: req.body.email });
    if (email_exist) {
        return res.status(400).json({ message: "Email Already Exist" })
    }
    if (!req.file) {
        return res.status(400).json({ message: "No Image Provide" })
    }

    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(req.body.password, salt);
    const result = await cloudinary.v2.uploader.upload(req.file.path);

    const newUser = new user({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        whatsapp: req.body.whatsapp,
        logo: {
            url: result.secure_url,
            publicId: result.public_id
        },
        password: hashPass,
    });
    await newUser.save()
    res.status(200).json({ message: "Register Successfully" })
})

module.exports.getUserByIdCtrl = asyncHandler(async (req, res) => {
    const data = await user.findById(req.params.id).select("-password");
    if (!data) {
        return res.status(404).json({ message: "Not Found Data" })
    }
    res.status(200).json({ message: "success", data })
})

module.exports.loginUserCtrl = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const User = await user.findOne({ email });
    if (!User) {
        return res.status(400).json({ message: "Email or Password Is Wrong" })
    }

    const isPassMatch = bcrypt.compareSync(password, User.password)
    if (!isPassMatch) {
        return res.status(400).json({ message: "Email or Password Is Wrong" })
    }
    const token = User.generateAuthToken();
    res.status(200).json({
        id: User._id,
        name: User.name,
        isAdmin: User.isAdmin,
        token
    })
})

module.exports.updateUserCtrl = asyncHandler(async (req, res) => {
    const check = await user.findById(req.params.id);
    if (!check) {
        return res.status(404).json({ message: "This User Not Found" })
    }

    if (req.body.password) {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hashSync(req.body.password, salt);
    }

    if (req.file) {
        await cloudinary.v2.uploader.destroy(check.image.publicId);
        const result = await cloudinary.v2.uploader.upload(req.file.path);
        const User = await user.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            whatsapp: req.body.whatsapp,
            logo: {
                url: result.secure_url,
                publicId: result.public_id
            },
            password: req.body.password,
    
        }, { new: true }).select("-password")
        return res.status(200).json({ messgae: "User Updated Successfully", User })
    }

    const User = await user.findByIdAndUpdate(req.params.id, req.body, { new: true }).select("-password")
    res.status(200).json({ messgae: "User Updated Successfully", User })

})

module.exports.deleteUserCtrl = asyncHandler(async (req, res) => {
    const check = await user.findById(req.params.id);
    if (!check) {
        return res.status(404).json({ message: "This User Not Found" })
    }

    await cloudinary.v2.uploader.destroy(check.logo.publicId);

    await user.findByIdAndDelete(req.params.id)
    res.status(200).json({ messgae: "User Deleted Successfully" })
})