const { validate } = require('email-validator');

const validarUsuario = (req, res, next) => {
    const { usuario } = req.body;

    if (!usuario)
        return res.status(400).json({ error: 'campo usuario é obrigatório' });

    const { email, senha } = usuario;

    if (!email || !senha)
        return res.status(400).json({
            error: 'campos email e senha são obrigatórios'
        });

    if (!validate(email))
        return res.status(400).json({ error: 'formato de email inválido' });

    next();
};

module.exports = { validarUsuario };
