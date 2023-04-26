const countryController = require('../../Controllers/countryController');
const countryService = require('../../Services/countryService');
const errorHandler = require('../../Utils/errorHandler');

jest.mock('../../Services/countryService');
jest.mock('../../Utils/errorHandler');

describe('getCountryInfo function', () => {
    it('Should return country information', async () => {
        const req = { params: { name: 'Ireland'} };
        const res = { json: jest.fn() };
        const data = { name: 'Ireland', capital: 'Dublin', population: 4994724 };

        countryService.getCountryInfo.mockResolvedValue(data);

        await countryController.getCountryInfo(req, res);

        expect(countryService.getCountryInfo).toHaveBeenCalledWith('Ireland');
        expect(res.json).toHaveBeenCalledWith(data);
    });

    it('Should return an error message if there is an error', async () => {
        const req = { params: { name: 'InvalidCountry' } };
        const res = { json: jest.fn() };
        const error = new Error('Invalid Country');

        countryService.getCountryInfo.mockRejectedValue(error);

        await countryController.getCountryInfo(req, res);

        expect(countryService.getCountryInfo).toHaveBeenCalledWith('InvalidCountry');
        expect(errorHandler).toHaveBeenCalledWith(error, res);
    });
});