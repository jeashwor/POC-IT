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
        name: "Jacob Ashworth",
        email: "ashworth@test.com",
        password:
          "$2a$10$T1npSwvwZ5wYPZkw0ZQqkuJRUAotxRSnmNxnkhktaCX1JEqxtumsq",
        isProvider: "false",
      },
      {
        name: "Jacob Lovins",
        email: "lovins@test.com",
        password:
          "$2a$10$T1npSwvwZ5wYPZkw0ZQqkuJRUAotxRSnmNxnkhktaCX1JEqxtumsq",
        isProvider: "false",
      },
      {
        name: "Hoang Nguyen",
        email: "nguyen@test.com",
        password:
          "$2a$10$T1npSwvwZ5wYPZkw0ZQqkuJRUAotxRSnmNxnkhktaCX1JEqxtumsq",
        isProvider: "false",
      },
      {
        name: "Thomas Fitzpatrick",
        email: "fitzpatrick@test.com",
        password:
          "$2a$10$T1npSwvwZ5wYPZkw0ZQqkuJRUAotxRSnmNxnkhktaCX1JEqxtumsq",
        isProvider: "false",
      },
      {
        name: "Jack Storrs",
        email: "storrs@test.com",
        password:
          "$2a$10$T1npSwvwZ5wYPZkw0ZQqkuJRUAotxRSnmNxnkhktaCX1JEqxtumsq",
        isProvider: "true",
      },
      {
        name: "Jung Yoon",
        email: "yoon@test.com",
        password:
          "$2a$10$T1npSwvwZ5wYPZkw0ZQqkuJRUAotxRSnmNxnkhktaCX1JEqxtumsq",
        isProvider: "true",
      },
    ],
  },
  {
    model: "Procedure",
    documents: [
      {
        name: "Wound Care",
        description:
          "A step-by-step guide for wound dressing change using clean technique",
        image: "/assets/wound.png",
        preparation: [
          {
            title: "Gather Supplies Needed",
            step:
              "Saline solution to clean the wound, Sterile gloves, Sterile gauze or wound dressings, Wound tape or surgical adhesive tape, Topical ointments or antibiotics per your provider, Scissors.",
          },
          {
            title: "Wash your hands",
            step:
              "Make sure to scrub all portions of your hands completely: the palms, the back, each finger, and in between each finger.",
          },
          {
            title: "Put on sterile gloves",
            step:
              "Always wear sterile gloves when handling an open wound, cut or burned skin.",
          },
          {
            title: "Let POC-IT know you're ready",
            step:
              "Facing the camera, give POC-IT a thumbs up to begin, or click the button below.",
          },
        ],
        instructions: [
          {
            title: "Remove the Dressing",
            step:
              "Use drops of either water or saline solution around the tape on the skin to loosen the tape. Gently remove the dressing.",
          },
          {
            title: "Inspect the Wound",
            step:
              "Check to see if there are any signs of infection, such as pus or a foul smell. If you notice any of them, note the issues and let the patient’s healthcare provider know once you're done with the dressing change.",
          },
          {
            title: "Clean the wound",
            step:
              "Wet a gauze with saline water and gently clean up any blood or other bodily fluids (a small amount of blood is ok. If it’s a substantial amount, the person needs medical attention).",
          },
          {
            title: "Let the wound air dry",
            step:
              "Once clean, let the wound fully air dry (placing new dressings while the wound is still wet fosters bacteria growth).",
          },
          {
            title: "Apply Ointment",
            step: "Once dry, apply antibiotic ointment to the wound.",
          },
          {
            title: "Place a new wound dressing",
            step:
              "Apply a new non-stick pad to the wound and extra gauze if needed. Once covered, gently secure with wound tape.",
          },
          {
            title: "Place a new wound dressing",
            step:
              "Apply a new non-stick pad to the wound and extra gauze if needed. Once covered, gently secure with wound tape.",
          },
        ],
      },
    ],
  },
];
