import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

// @desc Register new user
// POST /api/users
// access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userAlreadyExist = await User.findOne({ email });
  if (userAlreadyExist) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc Get list of users
// GET /api/users
// access Private/Admin
const getUserList = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

// @desc Get user by ID
// GET /api/users/:id
// access Private
// const getUserById = asyncHandler(async (req, res) => {
//   const user = await User.findById(req.params.id).select("-password");
//   if (user) {
//     res.json(user);
//   } else {
//     res.status(404);
//     throw new Error("User not found");
//   }
// });

const getUserBydId = asyncHandler(async (req, res) => {
  const user = {
    _id: req.user._id,
    name: req.user.name,
    email: req.user.email,
  };

  res.json(user);
});

export { registerUser, getUserList, getUserBydId };
