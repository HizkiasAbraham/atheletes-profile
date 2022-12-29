const gfs = global.gfs;

async function readUploadedFile(req, res) {
  try {
    const file = await gfs.files.findOne({ filename: req.params.filename });
    const readStream = gfs.createReadStream(file.filename);
    readStream.pipe(res);
  } catch (error) {
    res.send("not found");
  }
}

module.exports = { readUploadedFile };
