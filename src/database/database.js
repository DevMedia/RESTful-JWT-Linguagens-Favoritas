const mongoose = require('mongoose');
const environment = process.env.ENV || 'development';
const { 
    database: { name, host } 
} = require('../config/config')[environment];

const connect = callback => {
    mongoose.promise = global.Promise;
    mongoose.connect(
        `mongodb://${host}/${name}`,
        { useNewUrlParser: true },
        callback
    );
};

module.exports = { connect };
