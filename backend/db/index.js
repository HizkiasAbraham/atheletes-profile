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

async function getCollection(name) {
  try {
    const col = await mongoose.connection.db.collection(name);
    return col;
  } catch (error) {}
}

module.exports = { connectMongoDB, getCollection };
