const db = require("../models");

module.exports = {
  findAll: (req, res) => {
    db.Patient.find(req.query)
      .then(dbPatient => res.json(dbPatient))
      .catch(err => res.status(422).json(err));
  }
  };