const axios = require('axios');

async function getCountryInfo(name) {
    const url = `https://restcountries.com/v3.1/name/${name}`;

    try {
        const response = await axios.get(url);
        const data = response.data[0];
        return data;
    } catch (err) {
        console.error(err);
        throw new Error("Error Fetching Country Data");
    }
}

module.exports = {
    getCountryInfo,
}