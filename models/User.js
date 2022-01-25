const { Schema, model } = require('mongoose');
const moment = require('moment')

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]
    },
    thoguhts: {
        type: Schema.Types.ObjectId,
        ref: 'Thoughts'
    },
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'Users'
    }]

}, {
    toJSON: {
        virtuals: true,
        getters: true,
    },
    id: false,
});

// Retrieves number of user's friends
userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const User = model('user', userSchema);

module.exports = User;