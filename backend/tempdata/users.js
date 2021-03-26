import bcrypt from "bcryptjs";

const users = [
  {
    firstName: "Landon",
    lastName: "McKell",
    email: "landon.roney7923@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    bio: "I am software engineer learning technology and how to leverage it.",
    post: [],
    isAdmin: true,
  },
];

export default users;
