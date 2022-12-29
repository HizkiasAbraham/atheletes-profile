const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const { connectMongoDB } = require("./db");
const { port } = require("./utils/constants");
const athleteProfileRoute = require("./routes/athelete-profile");
const filesRoute = require("./routes/files");
const { setupGridfsStream } = require("./utils/setup-gridfs-stream");

const app = express();
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
app.use("/api/athlete-profile", athleteProfileRoute);
app.use("/api/files", filesRoute);

connectMongoDB()
  .then((_) => {
    app.listen(port, () => {
      console.log(`Server started listening on port: ${port}`);
    });
  })
  .catch((_) => {});
