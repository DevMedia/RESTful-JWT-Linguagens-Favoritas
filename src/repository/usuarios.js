const Usuario = require('../model/Usuario');    
const { gerarCredenciais } = require('../service/auth');

const cadastrarUsuario = dadosUsuario => {
    return Usuario.find({ email: dadosUsuario.email }).then(data => {
        if (data.length > 0) {
            return false;
        }

        const credenciais = gerarCredenciais(dadosUsuario.senha);
        const usuario = new Usuario({ ...dadosUsuario, ...credenciais });
        usuario.save();
        return true;
    });
};

module.exports = { cadastrarUsuario };
