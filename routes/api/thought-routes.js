const router = require('express').Router();
const {
    getAllThoughts,
    getOneThought,
    newThought,
    updateThought,
    deleteThought,
    newReaction,
    deleteReaction,
} = require('../../controllers/thought-controller.js');

// /api/thought
router.route('/').get(getAllThoughts).post(newThought);

// /api/thought/:thoughtId
router
    .route('/:thoughtId')
    .get(getOneThought)
    .put(updateThought)
    .delete(deleteThought)
    .put(newReaction)
    .delete(deleteReaction);

module.exports = router;