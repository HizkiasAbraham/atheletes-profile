const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const { connectMongoDB } = require("./db");
const { port } = require("./utils/constants");
const athleteProfileRoute = require("./routes/athelete-profile");

const app = express();
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
app.use("/api/athlete-profile", athleteProfileRoute);

connectMongoDB()
  .then((_) => {
    app.listen(port, () => {
      console.log(`Server started listening on port: ${port}`);
    });
  })
  .catch((_) => {});
