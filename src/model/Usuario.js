const mongoose = require('mongoose');
const { sign } = require('jsonwebtoken');
const { randomBytes, pbkdf2Sync } = require('crypto');
const Linguagem = require('./Linguagem');

const UsuarioSchema = new mongoose.Schema({
    nome: String,
    email: String,
    hash: String,
    salt: String
});
UsuarioSchema.methods.definirSenha = function(senha) {
    this.salt = randomBytes(16).toString('hex');
    this.hash = pbkdf2Sync(senha, this.salt, 1000, 512, 'sha512').toString(
        'hex'
    );
};

UsuarioSchema.methods.validarSenha = function(senha, callback) {
    const hash = pbkdf2Sync(senha, this.salt, 1000, 512, 'sha512').toString(
        'hex'
    );
    return this.hash === hash;
};

UsuarioSchema.methods.gerarJWT = function() {
    return Linguagem.linguagensCurtidasPorUsuario(this._id).then(linguagens => {
        return sign(
            {
                usuario: {
                    id: this._id,
                    email: this.email,
                    nome: this.nome,
                    linguagens: linguagens
                }
            },
            'secret'
        );
    });
};

UsuarioSchema.methods.dadosAutenticados = function() {
    return this.gerarJWT().then(token => ({
        token
    }));
};
module.exports = mongoose.model('Usuario', UsuarioSchema);
