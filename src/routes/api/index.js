const Router = require('express').Router();
const usuariosRouter = require('./usuarios');
const linguagensRouter = require('./linguagens');

const endpoints = {
    message: 'essa é a API da nossa rede social',
    endpoints: {
        usuarios: {
            caminho: '/usuarios',
            endpoints: {
                POST: '/signup',
                POST: '/login'
            }
        },
        linguagens: {
            caminho: '/linguagens',
            endpoints: {
                GET: '/',
                GET: '/:id',
                PUT: '/curtir/:id'
            }
        }
    }
};

Router.get('/', (req, res, next) => res.json(endpoints));
Router.use('/usuarios', usuariosRouter);
Router.use('/linguagens', linguagensRouter);

module.exports = Router;
