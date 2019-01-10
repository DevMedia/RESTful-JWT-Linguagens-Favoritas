const BlackList = require('../model/BlackList');
const Usuario = require('../model/Usuario');
const { gerarJWT, senhaConfere } = require('../service/auth');

const logout = token => {
    return BlackList.find({ token }).then(listado => {
        if (!listado.length) {
            const listedToken = new BlackList({ token });
            listedToken.save();
        }
    });
};

const checarToken = token => {
    return BlackList.find({ token }).then(listado => listado.length > 0);
};

const login = (email, senha) => {
    return Usuario.findOne({ email }).then(cadastrado => {
        if (cadastrado && senhaConfere(senha, cadastrado)) {
            return gerarJWT(
                cadastrado.email,
                cadastrado.nome
            );
        }

        return false;
    });
};

module.exports = { logout, checarToken, login };
