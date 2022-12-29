const {
  registerAthleteProfile,
  getAllAthletesProfile,
  getAthleteProfileById,
  updateAtheleteById,
} = require("../controllers/athelete-profile");
const upload = require("../middlewares/upload")

const router = require("express").Router();

router.post("/register", upload.single('file'), registerAthleteProfile);
router.get("/all", getAllAthletesProfile);
router.get("/:id", getAthleteProfileById);
router.put("/:id", updateAtheleteById);

module.exports = router;
