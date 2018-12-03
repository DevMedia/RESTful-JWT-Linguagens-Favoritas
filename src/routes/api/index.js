const Router = require('express').Router();
const usuariosRouter = require('./usuarios');

Router.get('/', (req, res, next) => res.json({ resp: '/api' }));
Router.use('/usuarios', usuariosRouter);

module.exports = Router;
