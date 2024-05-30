import express from "express";
import { createProduct, getAllProduct } from "../controller/productController.js";
import { upload } from "../middleware/multerConfig.js";

const router = express.Router();

router.route("/").get(getAllProduct).post(createProduct);
// router.route("/create").post(upload, createProduct);

export default router;
