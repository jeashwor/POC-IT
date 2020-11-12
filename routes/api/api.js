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
        const filename = buf.toString("hex") + path.extname(file.originalname);
        const fileInfo = {
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
router.post("/upload", upload.single("image"), (req, res) => {
  res.json({ file: req.file });
  console.log({ file: req.file });
});

// Retrieve images
router.get("/files/:filename", (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    let readstream = gfs.createReadStream(file.filename);
    readstream.pipe(res);
    console.log(file);
  });
});

// db.Procedure.create({
//   name: "testingmore",
//   instructions: ["step1", "step2", "step3"],
// }).then(({ _id }) =>
//   db.Patient.findOneAndUpdate(
//     {},
//     { $push: { currentProcedures: _id } },
//     { new: true }
//   )
// );

module.exports = router;
