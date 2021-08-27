import mongoose from "mongoose";

const TagSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    default: false,
  },
  content: {
    type: String,
    required: true,
  },
});

const Tag = mongoose.model("Tag", TagSchema);
export default Tag;
