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
  currentProvider: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  currentProcedures: [
    {
      type: Schema.Types.ObjectId,
      ref: "Procedure",
    },
  ],
  currentPatients: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
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
