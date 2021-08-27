import express from "express";
const router = express.Router();
import {
  getAuthUser,
  getUserProfile,
  putUpdateUserProfile,
} from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/login").post(getAuthUser);
router.route("/profile").get(protect, admin, getUserProfile);
router.route("/settings").put(protect, admin, putUpdateUserProfile);

export default router;
