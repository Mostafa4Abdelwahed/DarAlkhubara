const mongoose = require("mongoose")

const estateSchema = new mongoose.Schema({
    title: String,
    adType: String,
    price: Number,
    currency: String,
    payType: String,
    city: String,
    features: [String],
    image: {
        type: Object,
        default: {
            url: String,
            publicId: String
        }
    },
    estateType: String,
    details:{
        type: Object,
        default: {
            parking: 0,
            toilet: 0,
            rooms: 0,
            buildingErea: 0,
            landArea: 0,
        }
    },
    content: String,
    agent:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "user"
    },
},{timestamps: true}) 

const estate = mongoose.model("estate", estateSchema)


module.exports = estate