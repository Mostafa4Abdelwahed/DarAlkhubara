const asyncHandler = require("express-async-handler");
const setting = require("./../../../database/models/setting.model")
const cloudinary = require("../../../utils/cloudinary")
const settingsId = "66686061b940221a4ffe12ac";

module.exports.getSettingsCtrl = asyncHandler(async (req, res) => {
    const data = await setting.findById(settingsId);
    if (!data) {
        return res.status(404).json({ message: "Not Found Data" })
    }
    res.status(200).json({ message: "success", data })
})

module.exports.updateSettingsCtrl = asyncHandler(async (req, res) => {
    const check = await setting.findById(settingsId);
    if (!check) {
        return res.status(404).json({ message: "Settings Not Found" })
    }

    if (req.file) {
        await cloudinary.v2.uploader.destroy(check.logo.publicId);
        const result = await cloudinary.v2.uploader.upload(req.file.path);
        const Setting = await setting.findByIdAndUpdate(settingsId, {
            name: req.body.name,
            adress: req.body.adress,
            phone: req.body.phone,
            whatsapp: req.body.whatsapp,
            email: req.body.email,
            location: req.body.location,
            logo: {
                url: result.url,
                publicId: result.public_id
            },
        }, { new: true })
        return res.status(200).json({ messgae: "Settings Updated Successfully", Setting })
    }

    const Setting = await setting.findByIdAndUpdate(settingsId, {
        name: req.body.name,
        adress: req.body.adress,
        phone: req.body.phone,
        whatsapp: req.body.whatsapp,
        email: req.body.email,
        location: req.body.location,
    }, { new: true })
    res.status(200).json({ messgae: "Settings Updated Successfully", Setting })

})
