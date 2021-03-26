import dotenv from "dotenv";
import users from "./tempdata/users.js";
import posts from "./tempdata/posts.js";
import User from "./models/user/userModel.js";
import Post from "./models/blog/PostModel.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await Post.deleteMany();

    const createdUser = await User.insertMany(users);
    const adminUser = createdUser[0]._id;

    const samplePost = posts.map((post) => {
      return { ...post, author: adminUser };
    });

    await Post.insertMany(samplePost);

    console.log("Data Import!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();

    console.log("Data Destroyed!");

    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
