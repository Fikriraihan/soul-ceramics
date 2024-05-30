import express from "express";
import { getUserList, registerUser } from "../controller/userController.js";

const router = express.Router();

router.route("/").get(getUserList).post(registerUser);

export default router;
