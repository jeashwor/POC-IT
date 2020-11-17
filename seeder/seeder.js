const seeder = require("mongoose-seed");

seeder.connect("mongodb://localhost:27017/pocIT", () => {
  seeder.loadModels(["../models/User.js", "../models/Procedure.js"]);
  // seeder.clearModels(["User", "Procedure"]);
  seeder.populateModels(data, (err, done) => {
    if (err) {
      console.log(err);
    }
    if (done) {
      console.log(done);
    }
    seeder.disconnect();
  });
});

const data = [
  {
    model: "User",
    documents: [
      {
        name: "seeding test",
        email: "seeding@test.com",
        password: "seedingpassword",
        isProvider: "true",
      },
    ],
  },
];
