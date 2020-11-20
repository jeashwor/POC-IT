const express = require("express");
const router = express.Router();
const patientController = require("../../controllers/patientController");

router.route("/:email").get(patientController.findPatient);

module.exports = router;
