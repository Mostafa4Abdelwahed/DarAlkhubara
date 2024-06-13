const express = require('express');
const userRouter = express.Router();
const upload = require("../../middlewares/multer")
const { getAllUsersCtrl, getUserByIdCtrl, updateUserCtrl, addNewUserCtrl, loginUserCtrl, deleteUserCtrl } = require('./user.controller');
const { verifyTokenAndAdmin, verifyTokenAndOnlyUser } = require('../../middlewares/verifyToken');

userRouter.route("/users")
    .get(verifyTokenAndAdmin, getAllUsersCtrl)

userRouter.route("/user/:id")
    .get(verifyTokenAndOnlyUser, getUserByIdCtrl)
    .put(verifyTokenAndOnlyUser, updateUserCtrl)
    .delete(verifyTokenAndOnlyUser, deleteUserCtrl)

userRouter.route("/register").post(upload.single("image"), addNewUserCtrl)
userRouter.route("/login").post(loginUserCtrl)



module.exports = userRouter