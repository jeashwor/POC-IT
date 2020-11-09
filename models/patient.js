const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const patientSchema = new Schema({
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
  dob: {
    type: Number,
    required: "Please enter a date of birth",
    trim: true,
  },
  height: {
    type: Number,
    // required: "Please enter a height",
    trim: true,
  },
  weight: {
    type: Number,
    // required: "Please enter a weight",
    trim: true,
  },
  currentProvider: {
    type: Schema.Types.ObjectId,
    ref: "Provider",
    trim: true,
  },
  currentProcedures: [
    {
      type: Schema.Types.ObjectId,
      ref: "Procedure",
    },
  ],
  storedImages: [
    {
      type: Buffer,
      contentType: String,
    },
  ],
});

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;
