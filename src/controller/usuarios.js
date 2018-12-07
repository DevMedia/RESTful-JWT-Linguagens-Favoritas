const { verify } = require('jsonwebtoken');

const Usuario = require('../model/Usuario');
const { validarUsuario } = require('../middleware/validacao');

const cadastro = (req, res, next) => {
    const dadosUsuario = req.body;

    return Usuario.find({ email: dadosUsuario.email }).then(data => {
        if (data.length) {
            return res.status(409).json({ msg: 'e-mail já cadastrado' });
        }

        const usuarioFinal = new Usuario(dadosUsuario);
        usuarioFinal.definirSenha(dadosUsuario.senha);

        return usuarioFinal
            .save()
            .then(usuario => res.json(usuario.dadosAutenticados()))
            .catch(err => next(err));
    });
};

const login = (req, res, next) => {
    const { email, senha } = req.body;

    return Usuario.findOne({ email })
        .then(usuario => {
            if (!usuario || !usuario.validarSenha(senha)) {
                return res
                    .status(401)
                    .json({ err: 'email ou senha inválidos' });
            }
            return usuario;
        })
        .then(usuario => res.json(usuario.dadosAutenticados()))
        .catch(err => next(err));
};

module.exports = { cadastro, login };
