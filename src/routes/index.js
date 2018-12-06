const Router = require('express').Router();
const apiRouter = require('./api');

Router.get('/', (req, res, next) => next());
Router.use('/api', apiRouter);

module.exports = Router;
