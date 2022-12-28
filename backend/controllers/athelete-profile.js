const AthleteProfile = require("../models/AthleteProfile");
const { successResponse, errorResponse } = require("../utils/http-response");

async function registerAthleteProfile(req, res) {
  const { body } = req;
  try {
    const result = await AthleteProfile.create(body);
    successResponse(res, result, 204);
  } catch (error) {
    errorResponse(res, { message: "Error while registering athelete profile" });
  }
}

async function getAllAthletesProfile(req, res) {
  try {
    const result = await AthleteProfile.find({}).exec();
    successResponse(res, result);
  } catch (error) {
    errorResponse(
      res,
      { message: "Error while getting all athelete profile" },
      500
    );
  }
}

async function getAthleteProfileById(req, res) {
  const { id } = req.params;
  try {
    const result = await AthleteProfile.findById(id).exec();
    successResponse(res, result);
  } catch (error) {
    errorResponse(
      res,
      {
        message: "Error while getting athelete profile",
      },
      500
    );
  }
}

async function updateAtheleteById(req, res) {
  const { body } = req;
  const { id } = req.params;

  try {
    const result = await AthleteProfile.findByIdAndUpdate(id, body).exec();
    successResponse(res, result);
  } catch (error) {
    errorResponse(res, {
      message: "Error while updating athelete profile",
    });
  }
}

module.exports = {
  registerAthleteProfile,
  getAllAthletesProfile,
  getAthleteProfileById,
  updateAtheleteById,
};
