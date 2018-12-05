const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const database = require('./database/database');
const routes = require('./routes');
const { internalServer, notFound } = require('./middleware/errorHandler');

database.connect();

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.use(internalServer);
app.use(notFound);

const port = process.env.EV_PORT || 3000;

app.listen(port, () => console.log(`ouvindo porta ${port}`));
