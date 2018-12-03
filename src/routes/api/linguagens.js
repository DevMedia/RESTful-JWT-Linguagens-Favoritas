const Router = require('express').Router();
const jwt = require('jsonwebtoken');

Router.get('/', (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];

    jwt.verify(token, 'secret', (err, payload) => {
        if (err) res.status(401).json({ err: 'acesso não autorizado' });
        res.json({ data: payload });
    });
});

module.exports = Router;
