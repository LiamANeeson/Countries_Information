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

module.exports = {
    getCountryInfo,
    getCountryInfoCurrency
}