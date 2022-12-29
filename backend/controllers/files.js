const { getCollection } = require("../db");
const { successResponse } = require("../utils/http-response");

async function readUploadedFile(req, res) {
  try {
    const photoFilesCollection = await getCollection("photos.files");
    const reslt = await photoFilesCollection
      .find({
        filename: req.params.filename,
      })
      .toArray();

    const photoChunkCollection = await getCollection("photos.chunks");
    const photo = await photoChunkCollection
      .find({ files_id: reslt[0]._id })
      .toArray();
      
    successResponse(res, {
      img:
        "data:" +
        reslt[0].contentType +
        ";base64," +
        photo[0].data.toString("base64"),
    });
  } catch (error) {
    res.send("not found");
  }
}

module.exports = { readUploadedFile };
