const internalServer = (error, req, res, next) =>
    res.status(500).json({ error: error.message });

const notFound = (req, res, next) =>
    res.status(404).json({ error: 'não há nada aqui' });
module.exports = { internalServer, notFound };
