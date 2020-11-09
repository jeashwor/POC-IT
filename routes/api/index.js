const path = require("path");
const router = require("express").Router();
const patientsRoutes = require("./patients");

// Patients routes
router.use("/patients", patientsRoutes);

// For anything else, render the html page
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
  });
  
  module.exports = router;