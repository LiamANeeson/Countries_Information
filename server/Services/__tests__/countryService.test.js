const countryService = require('../countryService');
const axios = require('axios');

jest.mock('axios');

describe('countryService', () => {
  it('Should return country information', async () => {
    axios.get.mockImplementation(() =>
      Promise.resolve({ data: [{ name: 'Ireland', capital: 'Dublin', population: 4994724 }] })
    );

    const result = await countryService.getCountryInfo('Ireland');

    expect(result).toEqual({ name: 'Ireland', capital: 'Dublin', population: 4994724 });
    expect(axios.get).toHaveBeenCalledWith('https://restcountries.com/v3.1/name/Ireland');
  });

  it('Should throw an error if the country name is invalid', async () => {
    axios.get.mockRejectedValue(new Error('Error Fetching Country Data'));

    await expect(countryService.getCountryInfo('InvalidCountry')).rejects.toThrow('Error Fetching Country Data');
  });
});
