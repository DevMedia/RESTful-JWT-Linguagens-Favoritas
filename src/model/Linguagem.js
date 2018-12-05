const mongoose = require('mongoose');

const SchemaObjectId = mongoose.Schema.Types.ObjectId;
const ObjectId = mongoose.Types.ObjectId;

const LinguagemSchema = new mongoose.Schema(
    {
        nome: String,
        criadoPor: String,
        surgidoEm: Number,
        ultimaVersao: Number,
        paradigmas: [String],
        usuarios: [SchemaObjectId]
    },
    { collection: 'linguagens' }
);

LinguagemSchema.statics.listarLinguagens = function() {
    return this.aggregate([
        {
            $project: {
                nome: 1,
                urlImagem: 1,
                numeroUsuarios: { $size: '$usuarios' }
            }
        }
    ]);
};

LinguagemSchema.statics.detalhesLinguagem = function(idLinguagem) {
    return this.aggregate([
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

LinguagemSchema.statics.curtirLinguagem = function(idLinguagem, idUsuario) {
    return this.findById(idLinguagem).then(linguagem => {
        usuarioJaCurte = linguagem.usuarios.filter(
            id => String(id) === idUsuario
        );
        if (usuarioJaCurte.length)
            throw new Error('usuário já curte a linguagem');

        return this.updateOne(
            { _id: idLinguagem },
            { $push: { usuarios: idUsuario } }
        );
    });
};

module.exports = mongoose.model('Linguagem', LinguagemSchema);
