const asyncHandler = require("express-async-handler");
const { city, ValidationAddCity } = require("./../../../database/models/city.model")
const cloudinary = require("../../../utils/cloudinary")

module.exports.getAllCitiesCtrl = asyncHandler(async (req, res) => {
    const City_Per_Page = 10;
    const { pageNumber } = req.query;
    const data = await city.find().sort({ createdAt: -1 });
    const Total_Cities = data.length;
    const Total_Pages = Math.ceil(data.length / City_Per_Page);

    if (pageNumber) {
        const data = await city.find()
            .sort({ createdAt: -1 })
            .skip((pageNumber - 1) * City_Per_Page)
            .limit(City_Per_Page);
        return res.status(200).json({ message: "success", data, Total_Cities, Total_Pages })
    }

    res.status(200).json({ message: "success", data, Total_Cities, Total_Pages })
})

module.exports.getCityByIdCtrl = asyncHandler(async (req, res) => {
    const data = await city.findById(req.params.id);
    if (!data) {
        return res.status(404).json({ message: "Not Found Data" })
    }
    res.status(200).json({ message: "success", data })
})

module.exports.addNewCityCtrl = asyncHandler(async (req, res) => {

    const { error } = ValidationAddCity(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message })
    }

    if (!req.file) {
        return res.status(400).json({ message: "No Image Provide" })
    }

    const result = await cloudinary.v2.uploader.upload(req.file.path);

    const City = new city({
        name: req.body.name,
        country: req.body.country,
        image: {
            url: result.url,
            publicId: result.public_id
        }
    });

    await City.save()
    res.status(200).json({ message: "City Added Successfully", City })
})

module.exports.updateCityCtrl = asyncHandler(async (req, res) => {
    const check = await city.findById(req.params.id);
    if (!check) {
        return res.status(404).json({ message: "This City Not Found" })
    }

    if (req.file) {
        await cloudinary.v2.uploader.destroy(check.image.publicId);
        const result = await cloudinary.v2.uploader.upload(req.file.path);
        const City = await city.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            country: req.body.country,
            image:{
                url: result.url,
                publicId: result.public_id
            }
        }, { new: true })
        return res.status(200).json({ messgae: "City Updated Successfully", City })
    }

    const City = await city.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json({ messgae: "City Updated Successfully", City })

})

module.exports.deleteCityCtrl = asyncHandler(async (req, res) => {
    const check = await city.findById(req.params.id);
    if (!check) {
        return res.status(404).json({ message: "This City Not Found" })
    }

    await cloudinary.v2.uploader.destroy(check.image.publicId);

    await city.findByIdAndDelete(req.params.id)
    res.status(200).json({ messgae: "City Deleted Successfully" })
})