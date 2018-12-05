const Router = require('express').Router();

const { validarUsuario } = require('../../middleware/validacao');
const controller = require('../../controller/usuarios');

Router.use(validarUsuario);

Router.post('/signup', controller.cadastro);

Router.post('/login', controller.login);

module.exports = Router;
