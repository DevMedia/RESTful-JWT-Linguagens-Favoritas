const mongoose = require('mongoose');

const connect = () => {
    mongoose.promise = global.Promise;

    mongoose.connect(
        'mongodb://localhost/jwt-auth',
        { useNewUrlParser: true }
    );
};

module.exports = { connect };
