const router = require("express").Router();
const path = require("path");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const methodOverride = require("method-override");
const Patient = require("../../models/Patient");

router.post("/api/photo", (req, res) => {});

module.exports = router;
