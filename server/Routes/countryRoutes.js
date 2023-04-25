const express = require("express");
const countryController = require("../Controllers/countryController")

const router = express.Router();

router.get("/currency/:currency", countryController.getCountryInfoCurrency)
router.get("/language/:language", countryController.getCountryInfoLanguage)
router.get("/:name", countryController.getCountryInfo);

module.exports = router;