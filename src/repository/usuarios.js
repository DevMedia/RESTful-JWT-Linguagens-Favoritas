const Usuario = require('../model/Usuario');
const { gerarCredenciais, gerarJWT, senhaConfere } = require('../service/auth');

const cadastrarUsuario = dadosUsuario => {
    return Usuario.find({ email: dadosUsuario.email }).then(data => {
        const usuario = { cadastrado: false };
        if (!data.length) {
            usuario.novo = new Usuario(dadosUsuario);

            const credenciais = gerarCredenciais(dadosUsuario.senha);
            usuario.novo.salt = credenciais.salt;
            usuario.novo.hash = credenciais.hash;
            usuario.token = gerarJWT(
                usuario.novo.id,
                usuario.novo.email,
                usuario.novo.nome
            );
            usuario.novo.save();
            usuario.cadastrado = true;
        }
        return usuario;
    });
};

const logarUsuario = (email, senha) => {
    return Usuario.findOne({ email }).then(cadastrado => {
        const usuario = { autenticado: false };
        if (cadastrado && senhaConfere(senha, cadastrado)) {
            usuario.token = gerarJWT(
                cadastrado.id,
                cadastrado.email,
                cadastrado.nome
            );
            usuario.autenticado = true;
        }
        return usuario;
    });
};

module.exports = { cadastrarUsuario, logarUsuario };
