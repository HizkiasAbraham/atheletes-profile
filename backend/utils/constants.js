require("dotenv").config();

module.exports = {
  port: process.env.PORT || 5000,
  dbUrl: process.env.DB_URL || "mongodb://localhost:27017/atheletes_profile",
};
