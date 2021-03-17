import mongoose, { Schema } from "mongoose";

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
    descripion: {
      type: String,
      required: true,
    },
    publishedAt: {
      type: Date.now,
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
