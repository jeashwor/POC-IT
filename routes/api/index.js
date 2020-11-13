const path = require("path");
const express = require("express");
const router = express.Router();
const usersRoutes = require("./users");
// const patientsRoutes = require("./patients");

// Patients routes
// router.use("/patients", patientsRoutes);

// Users routes
router.use("/users", usersRoutes);

// For anything else, render the html page
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
