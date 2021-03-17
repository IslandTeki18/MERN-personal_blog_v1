import asyncHandler from "express-async-handler";
import User from "../models/user/userModel.js";

//@desc     Login in auth user
//@route    GET /api/users/login
//@access   Public

//@desc     Get user Info
//@route    GET /api/users/profile
//@access   Private

//@desc     Update users profile
//@route    PUT /api/users/settings
//@access   Private