const router = require("express").Router();
const patientController = require("../../controllers/patientController");

// const providerController = require("../../controllers/providerController");

// router.route("/addprocedure").put(providerController.assignProcedure);

// Matches with "api/patients"
router.route("/").get(patientController.findAll);

router.route("/register").post(patientController.register);

router.route("/login").post(patientController.login);

router.route("/procedures").get(patientController.procedures);

// Matches with "api/patients/:id"
// router.route("/:id")
//     .get(patientController.findById)
//     .put(patientController.update)
//     .delete(patientController.remove);

module.exports = router;
