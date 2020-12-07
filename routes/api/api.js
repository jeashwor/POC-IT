const router = require("express").Router();
const path = require("path");
const multer = require("multer");
const crypto = require("crypto");
const GridFsStorage = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const methodOverride = require("method-override");
const db = require("../../models");
const mongoose = require("mongoose");

// Initialiaze multer
let filename;
let fileInfo;

let gfs;
mongoose.connection.once("open", () => {
  gfs = Grid(mongoose.connection.db, mongoose.mongo);
  gfs.collection("uploads");
});

const storage = new GridFsStorage({
  url: "mongodb://localhost/pocIT",
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        filename = buf.toString("hex") + path.extname(file.originalname);
        fileInfo = {
          filename: filename,
          bucketName: "uploads",
        };
        resolve(fileInfo);
      });
    });
  },
});

const upload = multer({ storage });

// Save images
router.post("/upload/:email", upload.single("image"), (req, res) => {
  let uploadId = req.file.filename;
  db.User.findOneAndUpdate(
    { email: req.params.email },
    { $push: { storedImages: uploadId } },
    { upsert: true }
  )
    .then((patient) => {
      console.log("Stored!");
      res.json(patient);
    })
    .catch((err) => {
      res.json(err);
    });
});

// Retrieve images
router.get("/files/", (req, res) => {
  // console.log(req.query);
  // res.json({ status: "ok" });
  db.User.findOne({ email: req.query.email }).then((patient) => {
    let imageFilename = patient.storedImages[0];

    gfs.files.find().toArray((err, files) => {
      let readstream = gfs.createReadStream(files[1].filename);
      readstream.on("data", (chunk) => {
        readstream.pipe(res);
        // res.render({ image: chunk.toString("base64") });
      });
      // readstream.pipe(res);
    });
  });
});

module.exports = router;
