const express = require("express");
const homeControlller = require("../controllers/homeController");
const userControlller = require("../controllers/userController");
const postController = require("../controllers/postController");

const imageMiddleware = require("../middlewares/imageMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/", homeControlller.index);

router.get("/users/login", userControlller.login);
router.post("/users/login", userControlller.loginAction);
router.get("/users/register", userControlller.register);
router.post("/users/register", userControlller.registerAction);
router.get('/users/logout', userControlller.logout);

router.get("/post/add", authMiddleware.isLogged, postController.add);
router.post(
  "/post/add",
  authMiddleware.isLogged,
  imageMiddleware.upload,
  imageMiddleware.resize,
  postController.addAction
);

router.get("/post/:slug/edit", authMiddleware.isLogged, postController.edit);
router.post(
  "/post/:slug/edit",
  authMiddleware.isLogged,
  imageMiddleware.upload,
  imageMiddleware.resize,
  postController.editAction
);

router.get("/post/:slug", postController.view);

module.exports = router;
