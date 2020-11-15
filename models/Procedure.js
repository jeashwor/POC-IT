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
    required: "Please enter procedure description",
    trim: true,
  },
  image: {
    type: String,
  },
  preperation: [
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
});

const Procedure = mongoose.model("Procedure", procedureSchema);

module.exports = Procedure;
