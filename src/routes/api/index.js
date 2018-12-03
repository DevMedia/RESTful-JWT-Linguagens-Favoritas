const Router = require('express').Router();
const usuariosRouter = require('./usuarios');
const linguagensRouter = require('./linguagens');

Router.get('/', (req, res, next) => res.json({ resp: '/api' }));
Router.use('/usuarios', usuariosRouter);
Router.use('/linguagens', linguagensRouter);

module.exports = Router;
