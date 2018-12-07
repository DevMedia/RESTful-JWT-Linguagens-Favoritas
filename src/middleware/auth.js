const { verify } = require('jsonwebtoken');

const autenticarRequisicao = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).json({ err: 'acesso não autorizado' });
    }
    const token = req.headers.authorization.split(' ')[1];

    verify(token, 'secret', (err, payload) => {
        if (err) {
            return res.status(401).json({ err: 'acesso não autorizado' });
        }
        res.locals.payload = payload;
        next();
    });
};

module.exports = { autenticarRequisicao };
