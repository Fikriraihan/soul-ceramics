import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },

  size: {
    type: String,
    required: true,
  },
  discount: {
    type: Number,
  },
  stock: {
    type: Number,
  },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
