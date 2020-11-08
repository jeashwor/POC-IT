const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const procedureSchema = new Schema({
  name: {
    type: String,
    required: "Please enter a name",
    trim: true,
  },
  instructions: [
    {
      type: String,
      required: "Please enter procedure instructions",
    },
  ],
});

const Procedure = mongoose.model("Procedure", procedureSchema);

module.exports = Procedure;
