const express = require("express");
const bodyParser = require("body-parser");

const { connectMongoDB } = require("./db");
const { port } = require("./utils/constants");

const app = express();
app.use(bodyParser.json());

connectMongoDB()
  .then((_) => {
    app.listen(port, () => {
      console.log(`Server started listening on port: ${port}`);
    });
  })
  .catch((_) => {});
