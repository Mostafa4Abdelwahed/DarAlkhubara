const Joi = require("joi");
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    whatsapp: String,
    password: String,
    logo: {
        type: Object,
        default: {
            url: "",
            publicId: null
        }
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
})

userSchema.virtual("estates",{
    ref: "estate",
    foreignField: "agent",
    localField: "_id"
})

userSchema.methods.generateAuthToken = function() {
    return jwt.sign({
        id: this._id,
        name: this.name,
        isAdmin: this.isAdmin
    },process.env.SECRET_KEY)
}

const user = mongoose.model("user", userSchema);

function ValidationAddUser(obj) {
    const Schema = Joi.object({
        name: Joi.string().min(5).trim().required(),
        email: Joi.string().min(10).trim().required(),
        phone: Joi.string().min(4).trim().required(),
        whatsapp: Joi.string().min(4).trim().required(),
        password: Joi.string().min(6).trim().required(),
    })
    return Schema.validate(obj);
}


module.exports = {
    user,
    ValidationAddUser
}