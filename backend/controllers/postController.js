import asyncHandler from "express-async-handler";
import { protect } from "../middleware/authMiddleware.js";
import Post from "../models/post/PostModel.js";

//@desc     Get all posts
//@route    GET /api/posts
//@access   Public
const getAllPost = asyncHandler(async (req, res) => {
    try {
        const posts = await Post.find({});
        if (!posts) return res.status(404).send({ msg: "No Posts Found." });
        res.json(posts);
    } catch (error) {
        res.status(500).send({ msg: "Could not get Posts", error: `${error}` });
    }
});

//@desc     Get post by ID
//@route    GET /api/posts/:id
//@access   Public
const getPostById = asyncHandler(async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post)
            return res.status(404).send({ msg: "Uh oh! Post not found!" });
        res.json(post);
    } catch (error) {
        res.status(500).send({ msg: "Could not get post", error: `${error}` });
    }
});

//@desc     Creat a post
//@route    POST /api/posts
//@access   Private/Admin
const postNewPost = await asyncHandler(async (req, res) => {
    try {
        const post = new Post({
            author: req.user._id,
            title: req.body.title,
            postImage: "http://placehold.it/500x300",
            summary: req.body.summary,
            tldr: req.body.tldr,
            published: req.body.published,
            content: req.body.content,
            publishedAt: Date.now(),
            postComments: [],
            postTags: [],
            postCategories: [],
        });
        const newPost = await post.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).send({
            msg: "Failed to create post",
            error: `${error}`,
        });
    }
});

//@desc     Delete a post by ID
//@route    DELETE /api/posts/:id
//@access   Private/Admin
const deletePost = asyncHandler(async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).send({ msg: "Uh oh! Post not found" });
        }
        await post.deleteOne();
        res.status(200).json({ msg: "Post Removed" });
    } catch (error) {
        res.status(500).send({
            msg: "Failed to remove post",
            error: `${error}`,
        });
    }
});

//@desc     Update a post by ID
//@route    PUT /api/posts/:id
//@access   Private/Admin
const updatePostById = asyncHandler(async (req, res) => {
    try {
        const {
            title,
            summary,
            tldr,
            content,
            postImage,
            updatedAt,
            published,
        } = req.body;
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).send({ msg: "No Post Found!" });
        if (post) {
            post.title = title;
            post.summary = summary;
            post.tldr = tldr;
            post.content = content;
            post.postImage = postImage;
            post.updatedAt = updatedAt;
            post.published = published;
        }
        const updatedPost = await post.save();
        res.json(updatedPost);
    } catch (error) {
        res.status(500).send({
            msg: "Failed to Update Post",
            error: `${error}`,
        });
    }
});

//@desc     Create post comment
//@route    POST /api/posts/:id
//@access   Public

//@desc     Delete post comment by ID
//@route    DELETE /api/posts/:id/:comment_id
//@access   Private

//@desc     Update post comment by ID
//@route    PUT /api/posts/:id/:comment_id
//@access   Public

export { getAllPost, getPostById, postNewPost, deletePost, updatePostById };
