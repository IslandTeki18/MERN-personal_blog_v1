import asyncHandler from "express-async-handler";
import Post from "../models/blog/PostModel.js";

//@desc     Get all posts
//@route    GET /api/posts
//@access   Public

//@desc     Get post by ID
//@route    GET /api/posts/:id
//@access   Public

//@desc     Creat a post
//@route    POST /api/posts
//@access   Private/Admin

//@desc     Delete a post by ID
//@route    DELETE /api/posts/:id
//@access   Private/Admin

//@desc     Update a post by ID
//@route    PUT /api/posts/:id
//@access   Private/Admin

//@desc     Create post comment
//@route    POST /api/posts/:id
//@access   Public

//@desc     Delete post comment by ID
//@route    DELETE /api/posts/:id/:comment_id
//@access   Private

//@desc     Update post comment by ID
//@route    PUT /api/posts/:id/:comment_id
//@access   Public

