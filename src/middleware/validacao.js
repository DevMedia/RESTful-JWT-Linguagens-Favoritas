const { validate } = require('email-validator');
const passwordValidator = require('password-validator');

const validarUsuario = (req, res, next) => {
    const usuario = req.body;
    const { email, senha } = usuario;

    if (!email || !senha) {
        return res.status(400).end();
    }

    if (!validate(email)) {
        return res.status(400).end();
    }

    return next();
};

const validarSenha = (req, res, next) => {
    const { senha } = req.body;
    const schema = new passwordValidator();

    schema
        .is().min(3)
        .has().not().spaces();

    if (!schema.validate(senha)) {
        return res.status(400).end();
    }
    return next();
};

module.exports = { validarUsuario, validarSenha };
