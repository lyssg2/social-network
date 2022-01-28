const { Thought, User } = require('../models')

// Get all thoughts
const getAllThoughts = async(req, res) => {
    try {
        const getAllThoughts = await Thought.find()
        res.json(getAllThoughts)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

// Get one thought by ID
const getOneThought = async(req, res) => {
    try {
        const getOneThought = await Thought.findOne({ _id: req.params.thoughtId })
        res.json(getOneThought)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

// Post new thought
const newThought = async(req, res) => {
    try {
        const newThought = await Thought.create(req.body)
        res.json(newThought)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

// Update thought by ID
const updateThought = async(req, res) => {
    try {
        const updateThought = await Thought.findOne({
                _id: req.params.thoughtId
            },
            req.body)
        res.json(updateThought)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

// Delete thought by ID
const deleteThought = async(req, res) => {
    try {
        const deleteThought = await Thought.findOneandDelete({
            _id: req.params.thoughtId
        })
        res.json(deleteThought)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}


module.exports = { getAllThoughts, getOneThought, newThought, updateThought, deleteThought }