const Router = require('express').Router();

Router.get('/', (req, res, next) => res.json({ resp: '/usuarios' }));

Router.post('/signup', (req, res, next) => {
    const { body } = req;
    console.log(body);
});

Router.post('/login', (req, res, next) => {
    //TODO
});

module.exports = Router;
