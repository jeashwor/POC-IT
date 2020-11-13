const express = require("express");
const router = express.Router();
const userController = require("../../controllers/userController");

// Matches with "api/users"
router.route("/").get(userController.findAll);

router.route("/:_id").get(userController.getUserData);

router.route("/register").post(userController.register);

router.route("/login").post(userController.login);

router.route("/patients").get(userController.findAllPatients);

router.route("/assign/:email").put(userController.assignPatientProvider);

router.route("/displaypatients").get(userController.displayPatients);

router.route("/procedures").get(userController.displayProcedures);

router.route("/addprocedure/:email").put(userController.assignProcedure);

module.exports = router;
