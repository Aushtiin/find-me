const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        minlength: 1,
    },

    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 255,
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;