const Router = require('express').Router();
const apiRouter = require('./api');

Router.use('/api', apiRouter);

module.exports = Router;
