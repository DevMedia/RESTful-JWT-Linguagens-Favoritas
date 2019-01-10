const Router = require('express').Router();

const { autenticarRequisicao } = require('../../middleware/auth');
const controller = require('../../controller/auth');

Router.post('/login', controller.login);
Router.post('/logout', autenticarRequisicao, controller.logout);

module.exports = Router;