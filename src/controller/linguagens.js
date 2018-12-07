const Linguagem = require('../model/Linguagem');

const listar = async (req, res, next) => {
    const idUsuario = res.locals.payload.usuario.id;

    return Linguagem.listarLinguagens(idUsuario)
        .then(linguagens => res.json(linguagens))
        .catch(err => next(err));
};

const curtir = (req, res, next) => {
    const idLinguagem = req.params.id;
    const idUsuario = res.locals.payload.usuario.id;

    return Linguagem.curtirLinguagem(idLinguagem, idUsuario)
        .then(retorno => {
            if (!retorno.disponivel) {
                return res
                    .status(409)
                    .json({ error: 'usuário já curte a linguagem' });
            }
            return res.json({ message: 'curtida com sucesso' });
        })
        .catch(err => next(err));
};

const detalhes = (req, res, next) => {
    return Linguagem.detalhesLinguagem(req.params.id)
        .then(linguagem => res.json({ linguagem }))
        .catch(err => next(err));
};

module.exports = { listar, curtir, detalhes };
