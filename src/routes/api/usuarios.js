const Router = require('express').Router();

const { validarUsuario, validarSenha } = require('../../middleware/validacao');
const { autenticarRequisicao } = require('../../middleware/auth');
const controller = require('../../controller/usuarios');

Router.post('/logout', autenticarRequisicao, controller.logout);

Router.use(validarUsuario);

Router.post('/', validarSenha, controller.cadastro);

Router.post('/login', controller.login);

module.exports = Router;
