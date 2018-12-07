const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
    nome: String,
    email: String,
    hash: String,
    salt: String
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
