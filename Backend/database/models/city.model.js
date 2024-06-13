const Joi = require("joi")
const mongoose = require("mongoose")

const citySchema = new mongoose.Schema({
    name: String,
    country: String,
    image: {
        type: Object,
        default:{
            url: "",
            publicId: null
        }
    }
},{timestamps: true})

const city = mongoose.model("city", citySchema)

function ValidationAddCity(obj){
    const Schema = Joi.object({
        name: Joi.string().min(3).trim().required(),
        country: Joi.string().min(5).trim().required(),
    })
    return Schema.validate(obj)
}

module.exports = {
    city,
    ValidationAddCity
}