const mongoose = require('mongoose');

const historySchema = mongoose.Schema({
    bot: {
        type: String,
        required: true
    },
    song: {
        type: String,
        required: true
    },
    userBy: {
        type: String,
        required: true
    },
    channel: {
        type: String,
        required: true
    }


});

module.exports = mongoose.model('history', historySchema)