const { Schema, Types, model } = require('mongoose');
const thoughtSchema = require('./Thought');

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
    thoughts: {
        type: Schema.Types.ObjectId,
        ref: 'thought'
    },
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }]

}, {
    toJSON: {
        getters: true,
        virtuals: true,
    },
});

const User = model('user', userSchema);

// // Retrieves number of user's friends
// userSchema.virtual('friendsCount').get(function() {
//     return this.friends.length
// })


module.exports = User;