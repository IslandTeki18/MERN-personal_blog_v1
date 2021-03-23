import asyncHandler from "express-async-handler";
import Post from "../models/blog/PostModel.js";

//@desc     Get all posts
//@route    GET /api/posts
//@access   Public
const getAllPost = asyncHandler(async (req, res) => {
  const posts = await Post.find({});
  res.json(posts);
});

//@desc     Get post by ID
//@route    GET /api/posts/:id
//@access   Public
const getPostById = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.param.id);
  if (post) {
    return res.json(post);
  } else {
    res.status(404);
    throw new Error("Post not found");
  }
});

//@desc     Creat a post
//@route    POST /api/posts
//@access   Private/Admin
const postNewPost = asyncHandler(async (req, res) => {
  const post = new Post({
    author: req.user._id,
    title: "",
    summary: "",
    tldr: "",
    published: "",
    description: "",
    publishedAt: Date.now,
    postComments: [],
    postTags: [],
    postCategories: [],
  });
  const newPost = await post.save();
  res.status(201).json(newPost);
});

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

export { getAllPost, getPostById, postNewPost };
