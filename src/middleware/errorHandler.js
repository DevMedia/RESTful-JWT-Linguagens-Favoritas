const internalServer = (err, req, res, next) => {
    if (err) {
        console.log(err);
        return res.status(500).json({ error: err.message });
    }
};

const notFound = (req, res, next) =>
    res.status(404).json({ error: 'não há nada aqui' });
module.exports = { internalServer, notFound };
