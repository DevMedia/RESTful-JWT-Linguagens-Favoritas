const { sign, verify } = require('jsonwebtoken');
const { randomBytes, pbkdf2Sync } = require('crypto');

const gerarJWT = (id, email, nome) => {
    const token = sign(
        {
            usuario: {
                id,
                email,
                nome
            }
        },
        '123qwe@'
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
    return verify(token, '123qwe@', callback);
};

module.exports = { gerarCredenciais, gerarJWT, senhaConfere, verificarToken };
