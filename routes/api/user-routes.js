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

// /api/users
router.route('/').get(getAllUsers).post(newUser);

// /api/users/:userId
router.route('/:userId').get(getOneUser).delete(deleteUser);

// /api/users/:userId/friends
router.route('/:userId/friends').post(addFriend);

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').delete(removeFriend);

module.exports = router;