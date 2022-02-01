const router = require('express').Router();
const {
    getAllUsers,
    getOneUser,
    newUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/user-controller');

// /api/user
router.route('/').get(getAllUsers).post(newUser);

// /api/user/:id
router.route('/:id').get(getOneUser).put(updateUser).delete(deleteUser);

// /api/user/:Id/friends/:friendId
router.route('/:id/friends/:friendId').delete(deleteFriend).post(addFriend);

module.exports = router;