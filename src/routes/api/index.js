const Router = require('express').Router();

const usuariosRouter = require('./usuarios');
const linguagensRouter = require('./linguagens');
const authRouter = require('./auth');

const endpoints = {
    message: 'essa é a API da nossa rede social',
    endpoints: {
        usuarios: {
            caminho: '/usuarios'
        },
        linguagens: {
            caminho: '/linguagens'
        },
        autenticacao: {
            caminho: '/auth'
        }
    }
};

Router.get('/', (req, res, next) => res.json(endpoints));
Router.use('/usuarios', usuariosRouter);
Router.use('/linguagens', linguagensRouter);
Router.use('/auth', authRouter);

module.exports = Router;
