const { checarToken } = require('../repository/auth');
const { verificarToken } = require('../service/auth');

const autenticarRequisicao = (req, res, next) => {
    if (
        !req.headers.authorization ||
        req.headers.authorization.split(' ').length !== 2
    ) {
        return res.status(401).end();
    }
    const token = req.headers.authorization.split(' ')[1];

    verificarToken(token, (err, payload) => {
        if (err) {
            return res.status(401).end();
        }

        checarToken(token).then(estaListado => {
            if (estaListado) {
                return res.status(401).end();
            }
            res.locals.payload = payload;
            return next();
        });
        
    });
};

module.exports = { autenticarRequisicao };
