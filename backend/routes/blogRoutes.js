import express from "express"
import router  from express.Router()
import { getAllPost, getPostById, postNewPost } from "../controllers/blogController.js";
import { admin, protect } from "../middleware/authMiddleware.js";

router.route("/").get(getAllPost).post(protect, admin, postNewPost)
router.route("/:id").get(getPostById)

export default router