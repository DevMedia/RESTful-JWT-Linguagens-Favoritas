const Router = require('express').Router();

const { autenticarRequisicao } = require('../../middleware/auth');
const controller = require('../../controller/linguagens');

Router.use(autenticarRequisicao);

Router.get('/', controller.listar);

Router.get('/:id', controller.detalhes);

Router.post('/curtir/:id', controller.curtir);

module.exports = Router;
