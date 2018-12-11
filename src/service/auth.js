const { sign, verify } = require('jsonwebtoken');
const { randomBytes, pbkdf2Sync } = require('crypto');

const gerarSegredo = () => {
    const environment = process.env.ENV || 'development';
    if (environment === 'production') return process.env.JWT_SECRET;
    return '1C3C7E1694F1E9DAD939399E87E5FFB5DF06B2327CA31B409CB329B1430F1CD3';
};

const gerarJWT = (id, email, nome) => {
    const secret = gerarSegredo();
    const token = sign(
        {
            usuario: {
                id,
                email,
                nome
            }
        },
        secret
    );
    return { token };
};

const gerarCredenciais = senha => {
    const salt = randomBytes(16).toString('hex');
    const hash = pbkdf2Sync(senha, salt, 1000, 512, 'sha512').toString('hex');

    return { salt, hash };
};

const senhaConfere = (senha, cadastrado) => {
    return (
        cadastrado.hash ===
        pbkdf2Sync(senha, cadastrado.salt, 1000, 512, 'sha512').toString('hex')
    );
};

const verificarToken = (token, callback) => {
    const secret = gerarSegredo();
    return verify(token, secret, callback);
};

module.exports = { gerarCredenciais, gerarJWT, senhaConfere, verificarToken };
