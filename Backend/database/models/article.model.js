const Joi = require('joi');
const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    image: {
        type: Object,
        default:{
            url: "",
            publicId: null,
        } 
    },
    title: String,
    content: String
},{timestamps: true})

const article = mongoose.model("article", articleSchema)

function ValidationAddArticle(obj) {
    const Schema = Joi.object({
        title: Joi.string().min(10).max(50).trim().required(),
        content: Joi.string().min(100).max(7000).required()
    })
    return Schema.validate(obj)
}

module.exports = {
    article,
    ValidationAddArticle
}