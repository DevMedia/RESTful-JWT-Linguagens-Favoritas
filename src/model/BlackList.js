const mongoose = require('mongoose');

const BlackListSchema = new mongoose.Schema(
    {
        token: String
    },
    { collection: 'blacklist' }
);

module.exports = mongoose.model('BlackList', BlackListSchema);
