import express from "express";

import { createTweet, getTweet } from "../../controllers/tweet-controller.js";
import { toggleLike } from "../../controllers/like-controller.js";
import { createComment } from "../../controllers/comment-controller.js";
import { signup, signin } from "../../controllers/auth-controller.js";
import { authenticate } from "../../config/authenticate.js";
const router = express.Router();

router.post("/tweets", authenticate, createTweet);
router.get("/tweets/:id", getTweet);
router.post("/like/toggle", authenticate, toggleLike);
router.post("/signup", signup);
router.post("/login", signin);
router.post("/comments", createComment);
export default router;
