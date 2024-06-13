const express = require('express');
const connectDB = require('./database/connectDb');
const cors = require("cors") 
const app = express()
const { notFound, errorHandler } = require("./src/middlewares/error")
require("dotenv").config();
const PORT = process.env.PORT || 3000


// MiddleWares
app.use(express.json());
app.use(cors())

// Connect To Database
connectDB();


app.use("/api/auth" ,require("./src/modules/User/user.router"))
app.use("/api/estate" ,require("./src/modules/Estate/estate.router"))
app.use("/api/article" ,require("./src/modules/Article/article.router"))
app.use("/api/city" ,require("./src/modules/City/city.router"))
app.use("/api/setting" ,require("./src/modules/Setting/setting.router"))


// Error Handler Middleware
app.use(notFound)
app.use(errorHandler)


app.listen(PORT, () => {
    console.log(`App Listening On Port ${PORT}!`)
})