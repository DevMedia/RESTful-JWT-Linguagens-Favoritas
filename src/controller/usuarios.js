const { cadastrarUsuario, logarUsuario } = require('../repository/usuarios');

const cadastro = (req, res, next) => {
    const dadosUsuario = req.body;

    return cadastrarUsuario(dadosUsuario).then(usuario => {
        if (!usuario.cadastrado) {
            return res.status(409).json({ msg: 'e-mail já cadastrado' });
        }
        return res.json(usuario.token);
    });
};

const login = (req, res, next) => {
    const { email, senha } = req.body;

    return logarUsuario(email, senha).then(usuario => {
        if (!usuario.autenticado) {
            return res.status(401).json({ err: 'email ou senha inválidos' });
        }
        return res.json(usuario.token);
    });
};

module.exports = { cadastro, login };
