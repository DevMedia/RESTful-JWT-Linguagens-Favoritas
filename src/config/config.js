module.exports = {
    development: {
        port: 3000,
        host: 'localhost',
        database: {
            host: 'localhost',
            port: 27017,
            name: 'jwt-auth'
        },
        secret: '1C3C7E1694F1E9DAD939399E87E5FFB5DF06B2327CA31B409CB3'
    },
    production: {
        port: process.env.EV_PORT,
        host: process.env.EV_HOST,
        database: {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            name: process.env.DB_NAME
        },
        secret: process.env.JWT_SECRET
    }
};
