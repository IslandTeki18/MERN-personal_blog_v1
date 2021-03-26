import mongoose from "mongoose";

const PostSchema = mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    postImage: {
      type: String,
    },
    summary: {
      type: String,
    },
    tldr: {
      type: String,
    },
    published: {
      type: Boolean,
      default: false,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    publishedAt: {
      type: Date,
      default: Date.now,
      required: true,
    },
    postComments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    postTags: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tag",
      },
    ],
    postCategories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", PostSchema);
export default Post;
