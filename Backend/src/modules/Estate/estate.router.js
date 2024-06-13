const express = require('express');
const estateRouter = express.Router();
const upload = require("../../middlewares/multer")
const { getAllEstatesCtrl, addNewEstateCtrl, getEstateByIdCtrl, updateEstateCtrl, deleteEstateCtrl } = require('./estate.controller');
const { verifyTokenAndAdmin, verifyTokenAndOnlyUser } = require('../../middlewares/verifyToken');

estateRouter.route("/").get(getAllEstatesCtrl)

estateRouter.route("/:id")
.get(getEstateByIdCtrl)
.post(verifyTokenAndOnlyUser, upload.single("image") ,addNewEstateCtrl)

estateRouter.route("/:id/:estateId")
.put(verifyTokenAndOnlyUser, updateEstateCtrl)
.delete(verifyTokenAndOnlyUser, deleteEstateCtrl)


module.exports = estateRouter