const mongoose = require('mongoose');
const environment = process.env.ENV || 'development';
const {
    database: { name, port, host }
} = require('../config/config')[environment];

const connect = () => {
    mongoose.promise = global.Promise;
    mongoose.connect(
        `mongodb://${host}/${name}`,
        { useNewUrlParser: true }
    );
};

module.exports = { connect };
