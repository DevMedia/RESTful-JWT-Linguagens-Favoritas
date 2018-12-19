const Router = require('express').Router();

const { validarUsuario, validarSenha } = require('../../middleware/validacao');
const controller = require('../../controller/usuarios');

Router.post('/logout', controller.logout);

Router.use(validarUsuario);

Router.post('/', validarSenha, controller.cadastro);

Router.post('/login', controller.login);

module.exports = Router;
