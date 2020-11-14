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
    required: "Reference an image for the procedure format: '/assets/wound.png'",
    trim: true,
  },
  preparation: [
    {
      type: String,
      required: "Please enter preparation step title",
    },
    {
      type: String,
      required: "Please enter preparation step description",
    }
  ],
  instructions: [
    {
      type: String,
      required: "Please enter procedure step title",
    },
    {
      type: String,
      required: "Please enter procedure step instructions",
    }
  ],
});

const Procedure = mongoose.model("Procedure", procedureSchema);

module.exports = Procedure;
