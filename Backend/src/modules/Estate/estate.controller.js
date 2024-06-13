const asyncHandler = require("express-async-handler");
const estate = require("./../../../database/models/estate.model")
const cloudinary = require("../../../utils/cloudinary")

module.exports.getAllEstatesCtrl = asyncHandler(async (req, res) => {
    const Estate_Per_Page = 10;
    const { pageNumber, estateType } = req.query;
    const data = await estate.find().populate("agent").sort({ createdAt: -1 });
    const Total_Estates = data.length;
    const Total_Pages = Math.ceil(data.length / Estate_Per_Page);

    if (pageNumber) {
        const data = await user.find()
            .populate("agent")
            .sort({ createdAt: -1 })
            .skip((pageNumber - 1) * Estate_Per_Page)
            .limit(Estate_Per_Page);
        return res.status(200).json({ message: "success", data, Total_Estates, Total_Pages })
    }

    res.status(200).json({ message: "success", data, Total_Estates, Total_Pages })
})

module.exports.getEstateByIdCtrl = asyncHandler(async (req, res) => {
    const data = await estate.findById(req.params.id);
    if (!data) {
        return res.status(404).json({ message: "Not Found Data" })
    }
    res.status(200).json({ message: "success", data })
})

module.exports.addNewEstateCtrl = asyncHandler(async (req, res) => {

    if (!req.file) {
        return res.status(400).json({ message: "No Image Provide" })
    }

    const result = await cloudinary.v2.uploader.upload(req.file.path);

    const Estate = new estate({
        title: req.body.title,
        adType: req.body.adType,
        price: req.body.price,
        currency: req.body.currency,
        payType: req.body.payType,
        city: req.body.city,
        features: req.body.features,
        image: {
            url: result.secure_url,
            publicId: result.public_id
        },
        estateType: req.body.estateType,
        details: {
            parking: req.body.parking,
            toilet: req.body.toilet,
            rooms: req.body.rooms,
            buildingErea: req.body.buildingErea,
            landArea: req.body.landArea,
        },
        content: req.body.content,
        agent: req.params.id,
    });

    await Estate.save()
    res.status(200).json({ message: "Estate Added Successfully", Estate })
})

module.exports.updateEstateCtrl = asyncHandler(async (req, res) => {
    const check = await estate.findById(req.params.estateId);
    if (!check) {
        return res.status(404).json({ message: "This Estate Not Found" })
    }

    if (req.file) {
        await cloudinary.v2.uploader.destroy(check.image.publicId);
        const result = await cloudinary.v2.uploader.upload(req.file.path);
        const Estate = await estate.findByIdAndUpdate(req.params.estateId, {
            title: req.body.title,
            adType: req.body.adType,
            price: req.body.price,
            currency: req.body.currency,
            payType: req.body.payType,
            city: req.body.city,
            features: req.body.features,
            image: {
                url: result.secure_url,
                publicId: result.public_id
            },
            estateType: req.body.estateType,
            details: {
                parking: req.body.parking,
                toilet: req.body.toilet,
                rooms: req.body.rooms,
                buildingErea: req.body.buildingErea,
                landArea: req.body.landArea,
            },
            content: req.body.content,
            agent: req.params.id,

        }, { new: true })
        return res.status(200).json({ messgae: "Estate Updated Successfully", Estate })
    }

    const Estate = await estate.findByIdAndUpdate(req.params.estateId, req.body, { new: true })
    res.status(200).json({ messgae: "Estate Updated Successfully", Estate })

})

module.exports.deleteEstateCtrl = asyncHandler(async (req, res) => {
    const check = await estate.findById(req.params.estateId);
    if (!check) {
        return res.status(404).json({ message: "This Estate Not Found" })
    }

    await cloudinary.v2.uploader.destroy(check.image.publicId);

    await estate.findByIdAndDelete(req.params.estateId)
    res.status(200).json({ messgae: "Estate Deleted Successfully" })
})