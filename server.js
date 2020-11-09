const express = require("express");
const mongoose = require("mongoose");
const crypto = require("crypto");
const Grid = require("gridfs-stream");
const routes = require("./routes");
const passport = require("passport");
const patients = require("./routes/api/patients");
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
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/pocIT", {
    useCreateIndex: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Setup and configure Passport
app.use(passport.initialize());
require("./config/passport")(passport);
app.use("/api/patients", patients);

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on: http://localhost:${PORT}`)
);
