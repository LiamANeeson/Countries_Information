const express = require("express");
const countryController = require("../Controllers/countryController")

const router = express.Router();

router.get("/:name", countryController.getCountryInfo);

module.exports = router;