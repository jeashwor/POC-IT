const path = require("path");
const express = require("express");
const router = express.Router();
const usersRoutes = require("./users");
const apiRoute = require("./api");
const patientRoute = require("./patient")

// Users routes
router.use("/users", usersRoutes);
router.use("/image", apiRoute);
router.use("/patient", patientRoute);

// For anything else, render the html page
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
