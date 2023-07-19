import express from 'express';
import {
    getUser,
    getUsers,
    getUserFriends,
    addRemoveFriend,
} from '../controllers/users.js';

import { verifyToken } from '../middleware/auth';

const router = express.Router();

// read
router.get('/', verifyToken, getUsers);
router.get('/:id', verifyToken, getUser);
router.get('/:id/friends', verifyToken, getUserFriends);

//update
router.patch('/:id/:friendId', verifyToken, addRemoveFriend);

export default router;