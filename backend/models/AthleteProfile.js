const mongoose = require("mongoose");

const athleteProfileSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  gender: {
    type: String,
  },
  dob: {
    type: Date,
  },
  sport: {
    type: String,
  },
  description: {
    type: String,
  },
  location: {
    type: String,
  },
  team: {
    type: String,
  },
  profilePicture: {
    type: String,
  },
});

module.exports = mongoose.model("AthleteProfile", athleteProfileSchema);
