import axios from 'axios';

const BASE_URL = "https://countries-information.herokuapp.com";

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

