const db = require("../models");

module.exports= {
    findPatient: (req, res) => {
        console.log(req.params);
        db.User.findOne({ email: req.params.email })
        .then((patient) => {
            res.json(patient)
        })
        .catch((err) => {
            res.json(err)
        });
    }
}