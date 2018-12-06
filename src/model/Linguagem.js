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

LinguagemSchema.statics.listarLinguagens = function(idUsuario) {
    // return this.linguagensCurtidasPorUsuario(id).then(linguagensCurtidas => {

    // })
    return this.aggregate([
        {
            $project: {
                nome: 1,
                urlImagem: 1,
                numeroUsuarios: { $size: '$usuarios' }
            }
        },
        { $sort: { numeroUsuarios: -1 } }
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
        if (usuarioJaCurte.length) {
            return false;
        }

        return this.updateOne(
            { _id: idLinguagem },
            { $push: { usuarios: idUsuario } }
        );
    });
};

LinguagemSchema.statics.linguagensCurtidasPorUsuario = function(idUsuario) {
    return this.find({ usuarios: ObjectId(idUsuario) })
        .select({ _id: 1 })
        .then(linguagens => linguagens.map(linguagem => linguagem._id))
        .then(linguagens => {
            return linguagens;
        });
};

module.exports = mongoose.model('Linguagem', LinguagemSchema);
