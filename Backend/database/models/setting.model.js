const mongoose = require("mongoose")

const settingSchema = new mongoose.Schema({
    name: String,
    logo:{
        type: Object,
        default:{
            url: "",
            publicId: null
        }
    },
    adress: String,
    phone: String,
    whatsapp: String,
    email: String,
    location: String
})

const setting = mongoose.model("setting", settingSchema)

module.exports = setting