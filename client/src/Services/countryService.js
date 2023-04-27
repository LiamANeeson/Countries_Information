import axios from 'axios';

const BASE_URL = "https://countries-information.herokuapp.com/";

export const getCountryInfo = async (name) => {
  const url = `${BASE_URL}/countries/${name}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
    throw Error;
  }
};

export const getCountryInfoRegion = async (region) => {
  const url = `${BASE_URL}/countries/region/${region}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
    throw Error;
  }
}

export const getCurrencies = async () => {
  const response = await axios.get('https://restcountries.com/v3.1/all?fields=name,currencies');
  console.log(response.data);
  const countryData = response.data;
  const currencies = [];

  // Extract currencies from each country object
  countryData.forEach(country => {
    const countryCurrencies = country.currencies;
    countryCurrencies.forEach(currency => {
      // Add currency if it hasn't been added yet
      if (!currencies.some(c => c.code === currency.code)) {
        currencies.push(currency);
      }
    });
  });

  console.log(currencies);
  return currencies;
}
