const mongoose = require('mongoose');
const { sign } = require('jsonwebtoken');
const { randomBytes, pbkdf2Sync } = require('crypto');

const UsuarioSchema = new mongoose.Schema({
    nome: String,
    email: String,
    hash: String,
    salt: String
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
