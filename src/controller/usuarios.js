const { cadastrarUsuario, logarUsuario } = require('../repository/usuarios');
const { listarToken } = require('../repository/blackList');

const cadastro = (req, res, next) => {
    const dadosUsuario = req.body;

    return cadastrarUsuario(dadosUsuario)
        .then(usuario => {
            if (!usuario.cadastrado) {
                return res.status(409).json({ msg: 'E-mail já cadastrado.' });
            }
            return res.json(usuario.token);
        })
        .catch(error => next(error));
};

const login = (req, res, next) => {
    const { email, senha } = req.body;

    return logarUsuario(email, senha)
        .then(usuario => {
            if (!usuario.autenticado) {
                return res
                    .status(401)
                    .json({ err: 'E-mail ou senha inválidos.' });
            }
            return res.json(usuario.token);
        })
        .catch(error => next(error));
};

const logout = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    return res.json(listarToken(token));
};

module.exports = { cadastro, login, logout };
