const Router = require('express').Router();
const apiRouter = require('./api');

Router.get('/', (req, res, next) => res.json({ resp: '/' }));
Router.use('/api', apiRouter);

module.exports = Router;
