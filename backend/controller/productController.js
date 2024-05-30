import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

//  @desc Create new product
//  POST /api/products
//  access Public
const createProduct = asyncHandler(async (req, res) => {
  try {
    const { title, price, image, description, size, category, stock } = req.body;

    // Check if req.file exists and extract its filename
    // let imageUrl = "";
    // if (req.file) {
    //   imageUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
    // }

    // // Log received data for debugging
    // console.log("Received data:", { title, price, description, size, category, stock, imageUrl });

    const product = await Product.create({
      title,
      price,
      description,
      image,
      size,
      category,
      stock,
    });

    res.status(201).json(product);
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

//  @desc Get all products
//  GET /api/products
//  access Public
const getAllProduct = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

export { createProduct, getAllProduct };
