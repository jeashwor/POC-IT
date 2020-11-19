const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  isProvider: {
    type: Boolean,
    required: "Are you a patient or provider?",
    default: false,
  },
  email: {
    type: String,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: "Please enter a password",
    validate: [({ length }) => length >= 6, "Please enter a longer password"],
    trim: true,
  },
  name: {
    type: String,
    required: "Please enter a name",
    trim: true,
  },
  currentProcedures: [
    {
      name: {
        type: String,
        required: "Please enter a name",
        trim: true,
      },
      description: {
        type: String,
        required: "Please enter procedure description",
        trim: true,
      },
      image: {
        type: String,
      },
      preparation: [
        {
          title: {
            type: String,
            required: "Please enter preperation title",
          },
          step: {
            type: String,
            required: "Please enter preperation steps",
          },
        },
      ],
      instructions: [
        {
          title: {
            type: String,
            required: "Please enter procedure title",
          },
          step: {
            type: String,
            required: "Please enter procedure steps",
          },
        },
      ],
    },
  ],
  currentPatients: [
    {
      email: {
        type: String,
        required: "Please enter an email",
        trim: true,
      },
      name: {
        type: String,
        required: "Please enter a name",
        trim: true,
      },
    },
  ],
  storedImages: [
    {
      type: String,
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
