const environment = process.env.ENV || 'development';

const internalServer = (err, req, res, next) => {
    console.log(err);
    if (environment === 'production') {
        return res.status(500).send();
    }
    return res.status(500).json({ error: err.message });
};

const notFound = (req, res, next) => {
    return res.status(404).send();
};
module.exports = { internalServer, notFound };
