const { readUploadedFile } = require("../controllers/files");

const router = require("express").Router();

router.get("/:filename", readUploadedFile);

module.exports = router;
