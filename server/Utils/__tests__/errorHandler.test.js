const errorHandler = require('../errorHandler');

describe ('errorHandler', () => {
    it('Should respond with a status code of 500 and an error message', () => {
        const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
        const error = new Error('Internal server error');
    
        errorHandler(error, res);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ message: 'Internal server error' });
    });
});