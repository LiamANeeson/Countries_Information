const countryService = require("../Services/countryService");
const errorHandler = require("../Utils/errorHandler");

async function getCountryInfo(req, res) {
    const name = req.params.name;

    try {
        const data = await countryService.getCountryInfo(name);
        res.json(data);
    } catch (err) {
        errorHandler(err, res)
    }
}

async function getCountryInfoCurrency(req, res) {
    const currency = req.params.currency;

    try {
        const data = await countryService.getCountryInfoCurrency(currency);
        res.json(data);
    } catch (err) {
        errorHandler(err, res)
    }
}

async function getCountryInfoLanguage(req, res) {
    const language = req.params.language;

    try {
        const data = await countryService.getCountryInfoLanguage(language);
        res.json(data);
    } catch (err) {
        errorHandler(err, res)
    }
}

async function getCountryInfoRegion(req, res) {
    const region = req.params.region;

    try {
        const data = await countryService.getCountryInfoRegion(region);
        res.json(data);
    } catch (err) {
        errorHandler(err, res)
    }
}

module.exports = {
    getCountryInfo,
    getCountryInfoCurrency,
    getCountryInfoLanguage,
    getCountryInfoRegion
}