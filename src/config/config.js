module.exports = {
    development: {
        port: 3000,
        host: '192.168.1.52',
        database: {
            host: 'mongo',
            port: 27017,
            name: 'jwt-auth'
        }
    },
    production: {
        port: process.env.EV_PORT,
        host: process.env.EV_HOST,
        database: {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            name: process.env.DB_NAME
        }
    }
};
