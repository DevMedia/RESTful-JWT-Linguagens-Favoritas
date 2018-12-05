const Linguagem = require('../model/Linguagem');

const listar = async (req, res, next) => {
    // Linguagem.listarLinguagens()
    //     .then(linguagens => res.json(linguagens))
    //     .catch(err => next(err));
    try {
        return res.json(await Linguagem.listarLinguagens());
    } catch (error) {
        next(error);
    }
};

const curtir = async (req, res, next) => {
    // const idLinguagem = req.params.id;
    // const idUsuario = res.locals.payload.usuario.id;
    // Linguagem.curtirLinguagem(idLinguagem, idUsuario)
    //     .then(linguagem => res.json(linguagem))
    //     .catch(err => next(err));
    try {
        const idLinguagem = req.params.id;
        const idUsuario = res.locals.payload.usuario.id;
        return res.json(
            await Linguagem.curtirLinguagem(idLinguagem, idUsuario)
        );
    } catch (error) {
        next(error);
    }
};

const detalhes = (req, res, next) => {
    Linguagem.detalhesLinguagem(req.params.id)
        .then(linguagem => res.json({ linguagem }))
        .catch(err => next(err));
};

module.exports = { listar, curtir, detalhes };
