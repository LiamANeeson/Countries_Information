const axios = require('axios');

async function getCountryInfo(name) {
    const url = `https://restcountries.com/v3.1/name/${name}`;
    try {
        const response = await axios.get(url);
        const data = response.data[0];
        return data;
    } catch (err) {
        throw new Error("Error Fetching Country Data");
    }
}

async function getCountryInfoCurrency(currency) {
  const url = `https://restcountries.com/v3.1/currency/${currency}`
  try {
    const response = await axios.get(url);
    const data = response.data;
    return data;
  } catch (err) {
    console.error(err);
    throw new Error("Error Fetching Country Data");
  }
}

async function getCountryInfoLanguage(language) {
  const url = `https://restcountries.com/v3.1/lang/${language}`
  try {
    const response = await axios.get(url);
    const data = response.data;
    return data;
  } catch (err) {
    console.error(err);
    throw new Error("Error Fetching Country Data")
  }
}

async function getCountryInfoRegion(region) {
  const url = `https://restcountries.com/v3.1/region/${region}`
  try {
    const response = await axios.get(url);
    const data = response.data;
    return data;
  } catch (err) {
    console.error(err);
    throw new Error("Error Fetching Country Data")
  }
}

module.exports = {
    getCountryInfo,
    getCountryInfoCurrency,
    getCountryInfoLanguage,
    getCountryInfoRegion,
}