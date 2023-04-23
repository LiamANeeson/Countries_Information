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

module.exports = {
    getCountryInfo,
}