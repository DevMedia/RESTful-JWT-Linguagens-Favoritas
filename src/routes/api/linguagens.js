const Router = require('express').Router();
const { autenticarRequisicao } = require('../../middleware/auth');
const Linguagem = require('../../model/Linguagem');

Router.use(autenticarRequisicao);

Router.get('/', (req, res, next) => {
    Linguagem.listarLinguagens()
        .then(linguagens => res.json(linguagens))
        .catch(err => next(err));
});

Router.put('/curtir/:id', (req, res, next) => {
    const idLinguagem = req.params.id;
    const idUsuario = res.locals.payload.usuario.id;
    Linguagem.curtirLinguagem(idLinguagem, idUsuario)
        .then(linguagem => res.json(linguagem))
        .catch(err => next(err));
});

Router.get('/:id', (req, res, next) => {
    Linguagem.detalhesLinguagem(req.params.id)
        .then(linguagem => res.json({ linguagem }))
        .catch(err => next(err));
});

module.exports = Router;
