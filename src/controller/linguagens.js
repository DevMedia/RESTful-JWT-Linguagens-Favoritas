const Linguagem = require('../model/Linguagem');

const listar = async (req, res, next) => {
    Linguagem.listarLinguagens()
        .then(linguagens => res.json(linguagens))
        .catch(err => next(err));
};

const curtir = async (req, res, next) => {
    const idLinguagem = req.params.id;
    const idUsuario = res.locals.payload.usuario.id;
    Linguagem.curtirLinguagem(idLinguagem, idUsuario)
        .then(disponivel => {
            if (!disponivel) {
                res.status(409).json({ error: 'usuário já curte a linguagem' });
            }
        })
        .then(linguagem => res.json({ message: 'curtida com sucesso' }))
        .catch(err => next(err));
};

const detalhes = (req, res, next) => {
    Linguagem.detalhesLinguagem(req.params.id)
        .then(linguagem => res.json({ linguagem }))
        .catch(err => next(err));
};

module.exports = { listar, curtir, detalhes };
