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
router.route('/:userId').get(getOneUser).post(updateUser).delete(deleteUser);

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').delete(deleteFriend).post(addFriend);

module.exports = router;