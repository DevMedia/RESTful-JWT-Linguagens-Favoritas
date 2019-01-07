const { checarToken } = require('../repository/blackList');
const { verificarToken } = require('../service/auth');

const autenticarRequisicao = (req, res, next) => {
    if (
        !req.headers.authorization ||
        req.headers.authorization.split(' ').length < 2
    ) {
        return res.status(401).json({ error: 'acesso não autorizado' });
    }
    const token = req.headers.authorization.split(' ')[1];

    verificarToken(token, (err, payload) => {
        if (err) {
            return res.status(401).json({ error: 'acesso não autorizado' });
        }

        checarToken(token).then(estaListado => {
            if (estaListado) {
                return res.status(401).json({ error: 'acesso não autorizado' });
            }
            res.locals.payload = payload;
            return next();
        });
    });
};

module.exports = { autenticarRequisicao };
