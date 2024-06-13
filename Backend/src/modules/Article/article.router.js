const express = require('express');
const articleRouter = express.Router();
const upload = require("../../middlewares/multer")
const { verifyTokenAndAdmin } = require('../../middlewares/verifyToken');
const { getAllArticlesCtrl, getArticleByIdCtrl, addNewArticleCtrl, deleteArticleCtrl, updateArticleCtrl } = require('./article.controller');

articleRouter.route("/")
    .get(getAllArticlesCtrl)
    .post(verifyTokenAndAdmin,upload.single("image"), addNewArticleCtrl)

articleRouter.route("/:id")
    .get(getArticleByIdCtrl)
    .delete(verifyTokenAndAdmin, deleteArticleCtrl)
    .put(verifyTokenAndAdmin,updateArticleCtrl)



module.exports = articleRouter