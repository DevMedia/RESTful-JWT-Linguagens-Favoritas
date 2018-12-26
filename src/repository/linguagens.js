const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const Linguagem = require('../model/Linguagem');

const listarLinguagens = idUsuario => {
    return Linguagem.aggregate([
        {
            $project: {
                nome: 1,
                urlImagem: 1,
                numeroUsuarios: { $size: '$usuarios' },
                usuarioCurte: {
                    $cond: {
                        if: {
                            $in: [ObjectId(idUsuario), '$usuarios']
                        },
                        then: true,
                        else: false
                    }
                }
            }
        },
        { $sort: { nome: 1 } }
    ]);
};

const curtirLinguagem = (idLinguagem, idUsuario) => {
    return Linguagem.findById(idLinguagem).then(linguagem => {
        const usuarioJaCurte = linguagem.usuarios.filter(
            id => String(id) === idUsuario
        );
        if (usuarioJaCurte.length) {
            return false;
        }

        return Linguagem.updateOne(
            { _id: ObjectId(idLinguagem) },
            { $push: { usuarios: idUsuario } }
        );
    });
};

const detalhesLinguagem = idLinguagem => {
    return Linguagem.aggregate([
        {
            $match: { _id: ObjectId(idLinguagem) }
        },
        {
            $project: {
                nome: 1,
                urlImagem: 1,
                numeroUsuarios: { $size: '$usuarios' },
                paradigmas: 1,
                criadoPor: 1,
                surgidoEm: 1,
                ultimaVersao: 1
            }
        }
    ]);
};

module.exports = { listarLinguagens, curtirLinguagem, detalhesLinguagem };
