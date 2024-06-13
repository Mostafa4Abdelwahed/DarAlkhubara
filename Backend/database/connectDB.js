const mongoose = require("mongoose");

const connectDB = ()=>{
    const MONGO_URI = process.env.MONGO_URI;

    try {
        mongoose.connect(MONGO_URI);
        console.log('Database Connected Successfully');
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB