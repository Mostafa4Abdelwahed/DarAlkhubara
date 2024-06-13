const express = require('express');
const cityRouter = express.Router();
const upload = require("../../middlewares/multer")
const { getAllCitiesCtrl, getCityByIdCtrl, addNewCityCtrl, updateCityCtrl, deleteCityCtrl } = require('./city.controller');
const { verifyTokenAndAdmin } = require('../../middlewares/verifyToken');

cityRouter.route("/")
    .get(getAllCitiesCtrl)
    .post(verifyTokenAndAdmin ,upload.single("image") ,addNewCityCtrl)

cityRouter.route("/:id")
    .get(getCityByIdCtrl)
    .put(verifyTokenAndAdmin ,updateCityCtrl)
    .delete(verifyTokenAndAdmin ,deleteCityCtrl)

module.exports = cityRouter