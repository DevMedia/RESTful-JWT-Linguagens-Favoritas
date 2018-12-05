const { verify } = require('jsonwebtoken');

const Usuario = require('../model/Usuario');
const { validarUsuario } = require('../middleware/validacao');

const cadastro = async (req, res, next) => {
    // const dadosUsuario = req.body.usuario;
    // Usuario.find({ email: dadosUsuario.email }).then(data => {
    //     if (data.length)
    //         return res.status(409).json({ msg: 'e-mail já cadastrado' });
    // });
    // const usuarioFinal = new Usuario(dadosUsuario);
    // usuarioFinal.definirSenha(dadosUsuario.senha);
    // return usuarioFinal
    //     .save()
    //     .then(usuario => res.json(usuario.dadosAutenticados()))
    //     .catch(err => next(err));

    try {
        const dadosUsuario = req.body.usuario;
        const cadastrado = await Usuario.find({ email: dadosUsuario.email });
        if (cadastrado.length) {
            return res.status(409).json({ msg: 'e-mail já cadastrado' });
        }

        const novoUsuario = new Usuario(dadosUsuario);
        novoUsuario.definirSenha(dadosUsuario.senha);
        const usuarioFinal = novoUsuario.save();
        return res.json(await usuarioFinal.dadosAutenticados());
    } catch (error) {
        next(error);
    }
};

const login = async (req, res, next) => {
    // const { email, senha } = req.body.usuario;

    // Usuario.findOne({ email })
    //     .then(usuario => {
    //         if (!usuario || !usuario.validarSenha(senha))
    //             return res
    //                 .status(401)
    //                 .json({ err: 'email ou senha inválidos' });
    //         return usuario;
    //     })
    //     .then(usuario => res.json(usuario.dadosAutenticados()))
    //     .catch(err => next(err));

    try {
        const { email, senha } = req.body.usuario;
        const usuario = await Usuario.findOne({ email });
        if (!usuario || !usuario.validarSenha(senha)) {
            return res.status(401).json({ err: 'email ou senha inválidos' });
        }

        return res.json(usuario.dadosAutenticados());
    } catch (error) {
        next(error);
    }
};

module.exports = { cadastro, login };
