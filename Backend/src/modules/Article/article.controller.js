const asyncHandler = require("express-async-handler");
const { article, ValidationAddArticle } = require("./../../../database/models/article.model")
const cloudinary = require("../../../utils/cloudinary")

module.exports.getAllArticlesCtrl = asyncHandler(async (req, res) => {
    const Article_Per_Page = 10;
    const { pageNumber } = req.query;
    const data = await article.find().sort({ createdAt: -1 });
    const Total_Articles = data.length;
    const Total_Pages = Math.ceil(data.length / Article_Per_Page);

    if (pageNumber) {
        const data = await article.find()
            .sort({ createdAt: -1 })
            .skip((pageNumber - 1) * Article_Per_Page)
            .limit(Article_Per_Page);
        return res.status(200).json({ message: "success", data, Total_Articles, Total_Pages })
    }
    res.status(200).json({ message: "success", data, Total_Articles, Total_Pages })
})

module.exports.getArticleByIdCtrl = asyncHandler(async (req, res) => {
    const data = await article.findById(req.params.id);
    if (!data) {
        return res.status(404).json({ message: "Not Found Data" })
    }
    res.status(200).json({ message: "success", data })
})

module.exports.addNewArticleCtrl = asyncHandler(async (req, res) => {

    const { error } = ValidationAddArticle(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message })
    }

    if (!req.file) {
        return res.status(400).json({ message: "No Image Provide" })
    }

    const result = await cloudinary.v2.uploader.upload(req.file.path);

    const Article = new article({
        title: req.body.title,
        image: {
            url: result.url,
            publicId: result.public_id
        },
        content: req.body.content
    });

    await Article.save()
    res.status(200).json({ message: "Article Added Successfully", Article })
})

module.exports.updateArticleCtrl = asyncHandler(async (req, res) => {
    const check = await article.findById(req.params.id);
    if (!check) {
        return res.status(404).json({ message: "This Article Not Found" })
    }

    if (req.file) {
        await cloudinary.v2.uploader.destroy(check.image.publicId);
        const result = await cloudinary.v2.uploader.upload(req.file.path);
        const Article = await article.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            content: req.body.content,
            image:{
                url: result.url,
                publicId: result.public_id
            }
        }, { new: true })
        return res.status(200).json({ messgae: "Article Updated Successfully", Article })
    }

    const Article = await article.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json({ messgae: "Article Updated Successfully", Article })
})

module.exports.deleteArticleCtrl = asyncHandler(async (req, res) => {
    const check = await article.findById(req.params.id);
    if (!check) {
        return res.status(404).json({ message: "This Article Not Found" })
    }

    await cloudinary.v2.uploader.destroy(check.image.publicId);

    await article.findByIdAndDelete(req.params.id)
    res.status(200).json({ messgae: "Article Deleted Successfully" })
})