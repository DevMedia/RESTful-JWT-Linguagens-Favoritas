const environment = process.env.ENV || 'development';

const internalServer = (err, req, res, next) => {
    
    if (environment === 'production') {
        return res.status(500).end();
    }
    return res.status(500).json({ error: err.message });
};

const notFound = (req, res, next) => {
    return res.status(404).end();
};
module.exports = { internalServer, notFound };
