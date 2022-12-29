const Grid = require("gridfs-stream");
const mongoose = require("mongoose");

function setupGridfsStream() {
  const conn = mongoose.connection;
  conn.once("open", function () {
    const gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection("photos");
    global.gfs = gfs;
  });
}

module.exports = { setupGridfsStream };
