const Router = require('express').Router();
const Usuario = require('../../model/Usuario');
const { verify } = require('jsonwebtoken');

Router.get('/', (req, res, next) => res.json({ resp: '/usuarios' }));

Router.post('/signup', (req, res, next) => {
    const dadosUsuario = req.body.usuario;
    const usuarioFinal = new Usuario(dadosUsuario);
    usuarioFinal.definirSenha(dadosUsuario.senha);
    return usuarioFinal
        .save()
        .then(usuario => res.json({ data: usuario.dadosAutenticados() }))
        .catch(err => next(err));
});

Router.post('/login', (req, res, next) => {
    const { email, senha } = req.body.usuario;

    Usuario.findOne({ email })
        .then(usuario => {
            if (!usuario || !usuario.validarSenha(senha))
                res.status(401).json({ err: 'usuário ou senha inválidos' });
            return usuario;
        })
        .then(usuario => res.json(usuario.dadosAutenticados()))
        .catch(err => next(err));
});

module.exports = Router;
