const express = require("express");
const mongoose = require("mongoose");
const crypto = require("crypto");
const path = require("path");
const Grid = require("gridfs-stream");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/pocIT", {
  useCreateIndex: true,
  useNewUrlParser: true,
});

let gfs;

const db = require("./models");

// db.Patient.create({
//   isProvider: false,
//   email: "test@test.com",
//   password: "testing",
//   name: "mr test",
//   dob: 1,
//   height: 6,
//   weight: 180,
// });

mongoose.connection.once("open", () => {
  gfs = Grid(mongoose.connection.db, mongoose.mongo);
  gfs.collection("uploads");
});

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on: http://localhost:${PORT}`)
);
