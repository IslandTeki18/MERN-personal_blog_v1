import express from "express";
const router = express.Router();
import {
    getAllPost,
    getPostById,
    postNewPost,
    deletePost,
    updatePostById,
} from "../controllers/postController.js";
import { admin, protect } from "../middleware/authMiddleware.js";

router.route("/").get(getAllPost).post(protect, admin, postNewPost);
router
    .route("/:id")
    .get(getPostById)
    .delete(protect, admin, deletePost)
    .put(protect, admin, updatePostById);

export default router;
