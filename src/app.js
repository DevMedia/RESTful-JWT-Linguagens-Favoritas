const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');
const { database, parser } = require('./config/config');

const app = express();

app.use(express.json());
app.use(routes);

mongoose.connect(
    'mongodb://localhost/jwt-auth',
    { useNewUrlParser: true }
);

const port = process.env.EV_PORT || 3000;

app.listen(port, () => console.log(`ouvindo porta ${port}`));
