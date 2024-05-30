"use client";

import { cartSelector } from "@/store/cart-store";
import React from "react";
import { productList } from "@/constant/ProductJson";

type Size = "small" | "medium" | "large";

const AddToCart = () => {
  const addToCart = cartSelector.use.addToCart();
  const onSubmit = (formData: FormData) => {
    const size: Size = formData.get("size" as string) as Size;
    if (size !== "small" && size !== "medium" && size !== "large") {
      throw new Error("Invalid size");
    }

    addToCart({ ...productList[0], size: size as Size });
  };
  return (
    <form action={onSubmit} className=" border border-black">
      <select name="size" className=" bg-white w-full h-12 border-none uppercase p-2">
        <option defaultValue="Select">Select Size</option>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>
      <div className="w-full flex h-12 justify-center items-center bg-black text-white">
        <button type="submit" className="w-full font-medium text-lg">
          Add to cart
        </button>
      </div>
    </form>
  );
};

export default AddToCart;
