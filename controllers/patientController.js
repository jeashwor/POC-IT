const { Patient } = require("../models");
const db = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

// Load input Validation
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");

module.exports = {
  findAll: (req, res) => {
    db.Patient.find(req.query)
      .then(dbPatient => res.json(dbPatient))
      .catch(err => res.status(422).json(err));
  },
  register: (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    db.Patient.findOne({ email: req.body.email }).then(user => {
      if (user) {
        return res.status(400).json({ email: "Email already exists" });
      } else {
        const newPatient = new db.Patient({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          dob: req.body.dob,
          height: req.body.height,
          weight: req.body.weight,
          currentProvider: req.body.currentProvider,
          currentProcedures: req.body.currentProcedures
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newPatient.password, salt, (err, hash) => {
            if (err) throw err;
            newPatient.password = hash;
            newPatient
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
      }
    });
  },
  login: (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);
    
    if (!isValid) {
      return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    db.Patient.findOne({ email }).then(user => {
      if (!user) {
        return res.status(404).json({ emailnotfound: "Email not found"});
      }
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          const payload = {
            id: user.id,
            name: user.name
          };
          jwt.sign(
            payload,
            keys.secretOrKey,
            {
              expiresIn: 31556926
            },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token
              });
            }
          );
        } else {
          return res.status(400).json({ passwordincorrect: "Password incorrect"});
        }
      });
    });
  }
};