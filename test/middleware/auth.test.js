const { autenticarRequisicao } = require('../../src/middleware/auth');
const { verify } = require('jsonwebtoken');

jest.mock('verify');

test('passar ao próximo middleware com parâmetros válidos', () => {
    const req = {
        headers: {
            authorization: 'Bearer mockedtoken'
        }
    };

    //
});
