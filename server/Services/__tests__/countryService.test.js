const countryService = require('../countryService');
const axios = require('axios');

jest.mock('axios');

describe('countryService', () => {
  it('Should return country information', async () => {
    const data = { name: 'Ireland', capital: 'Dublin', population: 4994724 };
    axios.get.mockResolvedValue({data: data});

    const result = await countryService.getCountryInfo('Ireland');

    expect(result).toEqual(data);
    expect(axios.get).toHaveBeenCalledWith('https://restcountries.com/v3.1/name/Ireland');
  });

  it('Should throw an error if the country name is invalid', async () => {
    axios.get.mockRejectedValue(new Error('Error Fetching Country Data'));

    await expect(countryService.getCountryInfo('InvalidCountry')).rejects.toThrow('Error Fetching Country Data');
  });
});
