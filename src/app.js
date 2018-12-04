const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');
const { internalServer, notFound } = require('./middleware/errorHandler');
const { database, parser } = require('./config/config');

mongoose.promise = global.Promise;

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.use(internalServer);
app.use(notFound);

mongoose.connect(
    'mongodb://localhost/jwt-auth',
    { useNewUrlParser: true }
);

const port = process.env.EV_PORT || 3000;

app.listen(port, () => console.log(`ouvindo porta ${port}`));
