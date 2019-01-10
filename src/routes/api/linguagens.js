const Router = require('express').Router();

const { autenticarRequisicao } = require('../../middleware/auth');
const controller = require('../../controller/linguagens');

Router.get('/', autenticarRequisicao, controller.listar);

Router.get('/:id', autenticarRequisicao, controller.detalhes);

Router.post('/curtir/:id', autenticarRequisicao, controller.curtir);

module.exports = Router;
