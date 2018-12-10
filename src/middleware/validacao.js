const { validate } = require('email-validator');
const passwordValidator = require('password-validator');

const validarUsuario = (req, res, next) => {
    const usuario = req.body;

    const { email, senha } = usuario;

    if (!email || !senha) {
        return res.status(400).json({
            error: 'campos email e senha são obrigatórios'
        });
    }

    if (!validate(email)) {
        return res.status(400).json({ error: 'formato de email inválido' });
    }

    return next();
};

const validarSenha = (req, res, next) => {
    const { senha } = req.body;

    const schema = new passwordValidator();

    schema
        .is()
        .min(8)
        .has()
        .lowercase()
        .has()
        .digits()
        .has()
        .not()
        .spaces();

    if (!schema.validate(senha)) {
        return res.status(400).json({ error: 'senha muito fraca' });
    }
    return next();
};

module.exports = { validarUsuario, validarSenha };
