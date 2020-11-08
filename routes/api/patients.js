const router = require("express").Router();
const patientController = require("../../controllers/patientController");



// Matches with "api/patients"
router.route("/")
    .get(patientController.findAll)
    .post(patientController.register)
    .post(patientController.login)

// Matches with "api/patients/:id"
// router.route("/:id")
//     .get(patientController.findById)
//     .put(patientController.update)
//     .delete(patientController.remove);

module.exports = router;