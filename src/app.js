const express = require('express');
const cors = require('cors');

const database = require('./database/database');
const routes = require('./routes');
const { internalServer, notFound } = require('./middleware/errorHandler');
const environment = process.env.ENV || 'development';
const { port, host } = require('./config/config')[environment];

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.use(internalServer);
app.use(notFound);

database.connect(err => {
    if (!err) {
        app.listen(port, host, () => {
            console.log(`ouvindo ao endereço ${host} na porta ${port}`);
        });
    } else {
        console.log(err);
    }
});

module.exports = app;
