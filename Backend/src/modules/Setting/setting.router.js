const express = require('express');
const settingRouter = express.Router();
const upload = require("../../middlewares/multer")
const { verifyTokenAndAdmin } = require('../../middlewares/verifyToken');
const { getSettingsCtrl, updateSettingsCtrl } = require('./setting.controller');

settingRouter.route("/")
    .get(getSettingsCtrl)
    .put(verifyTokenAndAdmin ,upload.single("logo"), updateSettingsCtrl)


module.exports = settingRouter