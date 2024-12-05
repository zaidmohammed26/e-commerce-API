const express = require("express");
const router = express.Router();

const {
  loginController,
  logoutController,
  registerController,
} = require("../controllers/authController");

router.route("/register").post(registerController);
router.post("/login", loginController);
router.get("/logout", logoutController);

module.exports = router;
