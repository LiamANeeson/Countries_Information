import axios from 'axios';

const BASE_URL = "http://localhost:8000";

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
