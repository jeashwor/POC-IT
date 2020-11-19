const db = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

// Load input Validation
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");

// Assign base data for new users who register
const patientArr = [{name:"Jacob Ashworth", email:"ashworth@email.test"}]
const procedureArr = [{
  name: "Wound Care",
  description:
    "A step-by-step guide for wound dressing change using clean technique",
  image: "/assets/wound.png",
  preparation: [
    {
      title: "Gather Supplies Needed",
      step:
        "Saline solution to clean the wound, Sterile gloves, Sterile gauze or wound dressings, Wound tape or surgical adhesive tape, Topical ointments or antibiotics per your provider, Scissors.",
    },
    {
      title: "Wash your hands",
      step:
        "Make sure to scrub all portions of your hands completely: the palms, the back, each finger, and in between each finger.",
    },
    {
      title: "Put on sterile gloves",
      step:
        "Always wear sterile gloves when handling an open wound, cut or burned skin.",
    },
    {
      title: "Let POC-IT know you're ready",
      step:
        "Facing the camera, give POC-IT a thumbs up to begin, or click the button below.",
    },
  ],
  instructions: [
    {
      title: "Remove the Dressing",
      step:
        "Use drops of either water or saline solution around the tape on the skin to loosen the tape. Gently remove the dressing.",
    },
    {
      title: "Inspect the Wound",
      step:
        "Check to see if there are any signs of infection, such as pus or a foul smell. If you notice any of them, note the issues and let the patient’s healthcare provider know once you're done with the dressing change.",
    },
    {
      title: "Clean the wound",
      step:
        "Wet a gauze with saline water and gently clean up any blood or other bodily fluids (a small amount of blood is ok. If it’s a substantial amount, the person needs medical attention).",
    },
    {
      title: "Let the wound air dry",
      step:
        "Once clean, let the wound fully air dry (placing new dressings while the wound is still wet fosters bacteria growth).",
    },
    {
      title: "Apply Ointment",
      step: "Once dry, apply antibiotic ointment to the wound.",
    },
    {
      title: "Place a new wound dressing",
      step:
        "Apply a new non-stick pad to the wound and extra gauze if needed. Once covered, gently secure with wound tape.",
    },
    {
      title: "Place a new wound dressing",
      step:
        "Apply a new non-stick pad to the wound and extra gauze if needed. Once covered, gently secure with wound tape.",
    },
  ],
}]


module.exports = {
  findAll: (req, res) => {
    db.User.find(req.query)
      .then((dbUser) => res.json(dbUser))
      .catch((err) => res.status(422).json(err));
  },
  register: (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    db.User.findOne({ email: req.body.email }).then((user) => {
      if (user) {
        return res.status(400).json({ email: "Email already exists" });
      } else {
        const newUser = new db.User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          isProvider: req.body.isProvider,
          currentProcedures: procedureArr,
          currentPatients: patientArr
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then((user) => res.json(user))
              .catch((err) => console.log(err));
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

    db.User.findOne({ email }).then((user) => {
      if (!user) {
        return res.status(404).json({ emailnotfound: "Email not found" });
      }
      bcrypt.compare(password, user.password).then((isMatch) => {
        if (isMatch) {
          const payload = {
            id: user.id,
            name: user.name,
          };
          jwt.sign(
            payload,
            keys.secretOrKey,
            {
              expiresIn: 31556926,
            },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token,
              });
            }
          );
        } else {
          return res
            .status(400)
            .json({ passwordincorrect: "Password incorrect" });
        }
      });
    });
  },
  displayProcedures: (req, res) => {
    db.User.find({ email: req.body.email })
      .populate("currentProcedures")
      .then((user) => {
        res.json(user);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  assignProcedure: (req, res) => {
    db.Procedure.findOneAndUpdate({ name: req.body.name }).then(({ _id }) => {
      db.User.findOneAndUpdate(
        { email: req.query.email },
        { $push: { currentProcedures: _id } },
        { new: true }
      )
        .then((patient) => {
          res.json(patient);
        })
        .catch((err) => res.status(422).json(err));
    });
  },
  assignPatientProvider: (req, res) => {
    db.User.find({ email: req.body.email }).then((provider) => {
      db.User.findOneAndUpdate(
        { email: req.query.email },
        { $set: { currentProvider: provider } },
        { new: true }
      ).then((patient) => {
        db.User.findOneAndUpdate(
          { email: req.body.email },
          { $push: { currentPatients: patient } },
          { new: true }
        )
          .then((provider) => {
            res.json(provider);
          })
          .catch((err) => res.status(422).json(err));
      });
    });
  },
  findAllPatients: (req, res) => {
    db.User.find({ isProvider: false })
      .then((dbUser) => res.json(dbUser))
      .catch((err) => res.status(422).json(err));
  },
  displayPatients: (req, res) => {
    db.User.find({ email: req.body.email })
      .populate("currentPatients", ["name", "email"])
      .then((user) => {
        res.json(user);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  registerProcedure: (req, res) => {
    db.Procedure.findOne({ name: req.body.name }).then((procedure) => {
      if (procedure) {
        return res.status(400).json({ name: "Name already exists" });
      } else {
        const newProcedure = new db.Procedure({
          name: req.body.name,
          description: req.body.description,
          image: req.body.image,
          preparation: req.body.preparation,
          instructions: req.body.instructions,
        });
        newProcedure
          .save()
          .then((user) => res.json(user))
          .catch((err) => console.log(err));
      }
    });
  },
  getUserData: (req, res) => {
    db.User.findOne({ _id: req.params._id })
      .then((dbUser) => {
        const userData = {
          email: dbUser.email,
          isProvider: dbUser.isProvider,
          name: dbUser.name,
          storedImages: dbUser.storedImages,
          _id: dbUser.id,
          currentPatients: dbUser.currentPatients,
          currentProcedures: dbUser.currentProcedures,
          currentProvider: dbUser.currentProvider,
        };
        res.json(userData);
      })
      .catch((err) => {
        res.status(422).json(err);
      });
  },
};
