const express = require("express");
const {
  getLookingForContent,
} = require("../controllers/homepage/lookingForController");
const {
  getOurServicesContent,
} = require("../controllers/homepage/ourServicesController");
const {
  getTestimonialsContent,
} = require("../controllers/homepage/testimonialsController");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ mssg: "GET all homepage content" });
});

// POST LookingForSection Content
router.post("/", (req, res) => {
  res.json({ mssg: "POST a new workout" });
});

//GET LookingForSection Content
router.get("/lookingForSection", getLookingForContent);

//GET OurServicesSection Content
router.get("/ourServicesSection", getOurServicesContent);

//GET TestimonialsSection Content
router.get("/testimonialsSection", getTestimonialsContent);

module.exports = router;
