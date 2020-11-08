const router = require("express").Router();
const path = require("path");
const multer = require("multer");
const crypto = require("crypto");
const GridFsStorage = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const methodOverride = require("method-override");
const db = require("../../models");

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

router.post("/upload", upload.single("image"), (req, res) => {
  res.json({ file: req.file });
  console.log({ file: req.file });
});

module.exports = router;
