import express from "express";
import {
    getPosts,
    getUserPosts,
    likePost
} from "../controllers/posts.js";

import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// read
router.get("/", verifyToken, getPosts);
router.get("/:id/posts", verifyToken, getUserPosts);

//update
router.patch("/:id/likePost", verifyToken, likePost);

export default router;
