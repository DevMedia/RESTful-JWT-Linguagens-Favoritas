const { checarToken } = require('../repository/blackList');
const { verificarToken } = require('../service/auth');

const autenticarRequisicao = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).json({ error: 'acesso não autorizado' });
    }
    const token = req.headers.authorization.split(' ')[1];

    checarToken(token).then(estaListado => {
        if (estaListado) {
            return res.status(401).json({ error: 'acesso não autorizado' });
        }
    });

    verificarToken(token, (err, payload) => {
        if (err) {
            return res.status(401).json({ error: 'acesso não autorizado' });
        }
        res.locals.payload = payload;
        return next();
    });
};

module.exports = { autenticarRequisicao };
