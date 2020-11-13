const router = require("express").Router();

const providerController = require("../../controllers/providerController");

router.route("/addprocedure").put(providerController.assignProcedure);

module.exports = router;
