const { validarSenha } = require('../../src/middleware/validacao');
const mockRes = require('jest-mock-express').response;

test('a senha deve ser rejeitada', () => {
    const req = {
        body: {
            usuario: {
                senha: '1747852'
            }
        }
    };
    next = jest.fn();
    const res = mockRes();

    validarSenha(req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalled();
    expect(next.mock.calls.length).toBe(0);
});

test('a senha deve ser aprovada', () => {
    const req = {
        body: {
            usuario: {
                senha: '1478aasd'
            }
        }
    };
    const next = jest.fn();
    const res = mockRes();

    validarSenha(req, res, next);

    expect(res.status.mock.calls.length).toBe(0);
    expect(res.json.mock.calls.length).toBe(0);
    expect(next.mock.calls.length).toBe(1);
});
