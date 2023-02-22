const express = require("express");
const { getNavigationContent } = require("../controllers/navigationController");

const router = express.Router();

router.get("/", getNavigationContent);

module.exports = router;
