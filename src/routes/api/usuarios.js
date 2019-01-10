const Router = require('express').Router();

const { validarUsuario, validarSenha } = require('../../middleware/validacao');
const controller = require('../../controller/usuarios');

Router.use(validarUsuario);

Router.post('/', validarSenha, controller.cadastro);

module.exports = Router;
