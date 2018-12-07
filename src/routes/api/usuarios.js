const Router = require('express').Router();

const { validarUsuario, validarSenha } = require('../../middleware/validacao');
const controller = require('../../controller/usuarios');

Router.use(validarUsuario);
Router.use('/cadastrar', validarSenha);

Router.post('/cadastrar', controller.cadastro);

Router.post('/login', controller.login);

module.exports = Router;
