const { verify } = require('jsonwebtoken');

const autenticarRequisicao = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];

        verify(token, 'secret', (err, payload) => {
            if (err) {
                return res.status(401).json({ err: 'acesso não autorizado' });
            }
            res.locals.payload = payload;
            next();
        });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

module.exports = { autenticarRequisicao };
