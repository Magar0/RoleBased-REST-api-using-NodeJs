const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    profileImage: {
        type: String,
        default: null
    }
})

const User = mongoose.models.Users || mongoose.model('Users', userSchema)

module.exports = User;
