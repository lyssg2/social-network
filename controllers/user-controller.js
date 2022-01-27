const { process_params } = require('express/lib/router')
const { Thought, User } = require('../models')


// Get all users
const getAllUsers = async(req, res) => {
    try {
        const getAllUsers = await User.find()
            .populate('thoughts')
            .populate('friends')
        res.json(getAllUsers)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

// Get one user by ID
const getOneUser = async(req, res) => {
    try {
        const getOneUser = await User.findOne({ _id: req.params.userId })
            .populate('thoughts')
            .populate('friends')
        res.json(getOneUser)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

// Post new user
const newUser = async(req, res) => {
    try {
        const newUser = await User.create(req.body)
        res.json(newUser)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

// Update user by ID
const updateUser = async(req, res) => {
    try {
        const updateUser = await User.findOne({
                _id: req.params.userId
            },
            req.body)
        res.json(updateUser)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

// Delete User by ID
const deleteUser = async(req, res) => {
    try {
        const deleteUser = await User.findOneandDelete({
            _id: req.params.userId
        })
        res.json(deleteUser)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

// Add a new friend to a user's friend list
const addFriend = async(req, res) => {
    try {
        const addFriend = await User.findOneAndUpdate({
            _id: params.userId
        }, {
            friends: params.friendId
        })
        res.json(addFriend)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

// Delete Friend
const deleteFriend = async(req, res) => {
    try {
        const deleteFriend = await User.findOneAndDelete({
            _id: params.userId
        }, {
            friends: params.friendId
        })
        res.json(deleteFriend)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

module.exports = { getAllUsers, getOneUser, newUser, updateUser, deleteUser, addFriend, deleteFriend }