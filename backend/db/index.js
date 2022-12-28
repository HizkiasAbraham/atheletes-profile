const mongoose = require("mongoose");
const { dbUrl } = require("../utils/constants");
mongoose.set("strictQuery", true);

async function connectMongoDB() {
  try {
    await mongoose.connect(dbUrl);
    console.log(`DB Connected: ${dbUrl}`);
    return true;
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = { connectMongoDB };
