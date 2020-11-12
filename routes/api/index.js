const path = require("path");
const router = require("express").Router();
const patientsRoutes = require("./patients");
const providersRoutes = require("./providers");
// Patients routes
router.use("/patients", patientsRoutes);
router.use("/providers", providersRoutes);

// For anything else, render the html page
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
