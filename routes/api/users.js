const express = require("express")
const router = express.Router();
const userController = require("../../controllers/userController");

// Matches with "api/users"
router.route("/").get(userController.findAll);

router.route("/register").post(userController.register);

router.route("/login").post(userController.login);


module.exports = router;
