const { cadastrarUsuario } = require('../repository/usuarios');

const cadastro = (req, res, next) => {
    const dadosUsuario = req.body;

    return cadastrarUsuario(dadosUsuario)
        .then(usuario => {
            if (!usuario) {
                return res.status(409).end();
            }
            
            return res.status(200).end();
        })
        .catch(error => next(error));
};

module.exports = { cadastro };
