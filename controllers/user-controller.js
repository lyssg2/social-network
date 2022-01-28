const { Thought, User } = require('../models')


// Get all users
const getAllUsers = async(req, res) => {
    try {
        const allUsers = await User.find()
            .populate('thoughts')
            .populate('friends')
        res.json(allUsers)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

// Get one user by ID
const getOneUser = async(req, res) => {
    try {
        const oneUser = await User.findOne({ _id: req.params.id })
            .populate('thoughts')
            .populate('friends')
        res.json(oneUser)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

// Post new user
const newUser = async(req, res) => {
    try {
        const user = await User.create(req.body)
        res.json(user)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

// Update user by ID
const updateUser = async(req, res) => {
    try {
        const updatedUser = await User.findOne({
                _id: req.params.id
            },
            req.body)
        res.json(updatedUser)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

// Delete User by ID
const deleteUser = async(req, res) => {
    try {
        const user = await User.findOneandDelete({
            _id: req.params.id
        })
        res.json(user)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

// Add a new friend to a user's friend list
const addFriend = async(req, res) => {
    try {
        const friend = await User.findOneAndUpdate({
            _id: req.params.id
        }, { $push: { friends: req.params.friendId } })
        res.json(friend)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

// Delete Friend
const deleteFriend = async(req, res) => {
    try {
        const friend = await User.findOneAndDelete({
            _id: req.params.id
        }, { $pull: { friends: req.params.friendId } })
        res.json(friend)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

module.exports = { getAllUsers, getOneUser, newUser, updateUser, deleteUser, addFriend, deleteFriend }