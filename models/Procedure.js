const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const procedureSchema = new Schema({
  name: {
    type: String,
    required: "Please enter a name",
    trim: true,
  },
  description: {
    type: String,
    required: "Please enter a description",
    trim: true,
  },
  image: {
    type: String,
  },
  preperation: [
    {
      type: String,
      required: "Please enter procedure preperation instructions",
    },
  ],
  instructions: [
    {
      name: {
        type: String,
        required: "Please enter procedure name",
      },
      steps: [
        {
          type: String,
          required: "Please enter procedure steps",
        },
      ],
    },
  ],
});

const Procedure = mongoose.model("Procedure", procedureSchema);

module.exports = Procedure;
