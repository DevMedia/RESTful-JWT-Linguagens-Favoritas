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

/**
 * Configuração do servidor
 * Não estará no projeto
 */
const https = require('https');
const privateKey = fs.readFileSync(
    '/etc/letsencrypt/live/deviup.com.br/privkey.pem',
    'utf8'
);
const certificate = fs.readFileSync(
    '/etc/letsencrypt/live/deviup.com.br/cert.pem',
    'utf8'
);
const ca = fs.readFileSync(
    '/etc/letsencrypt/live/deviup.com.br/chain.pem',
    'utf8'
);
const portHttps = process.env.APP_PORT_HTTPS || 443;

const credenciais = {
    key: privateKey,
    cert: certificate,
    ca: ca
};

const httpsServer = https.createServer(credenciais, app);

database.connect(err => {
    if (!err) {
        if (environment === 'production') {
            httpsServer.listen(portHttps, () => {
                console.log(`ouvindo porta ${portHttps} - HTTPS`);
            });
        }

        app.listen(port, host, () => {
            console.log(`ouvindo ao endereço ${host} na porta ${port}`);
        });
    } else {
        console.log(err);
    }
});

module.exports = app;
