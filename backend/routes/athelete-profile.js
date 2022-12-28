const {
  registerAthleteProfile,
  getAllAthletesProfile,
  getAthleteProfileById,
  updateAtheleteById,
} = require("../controllers/athelete-profile");

const router = require("express").Router();

router.post("/register", registerAthleteProfile);
router.get("/all", getAllAthletesProfile);
router.get("/:id", getAthleteProfileById);
router.put("/:id", updateAtheleteById);

module.exports = router;
