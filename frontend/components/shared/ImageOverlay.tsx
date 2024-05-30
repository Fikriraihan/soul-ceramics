"use client";

import Image from "next/image";
import React from "react";
import Drawer from "./Drawer";
import { cartSelector } from "@/store/cart-store";
import { productList } from "@/constant/ProductJson";

type Size = "small" | "medium" | "large";

const ImageOverlay = () => {
  const addToCart = cartSelector.use.addToCart();

  const onSubmit = (formData: FormData) => {
    const size: Size = formData.get("size" as string) as Size;
    if (size !== "small" && size !== "medium" && size !== "large") {
      throw new Error("Invalid size");
    }

    addToCart({ ...productList[0], size: size as Size });
  };
  return (
    <div className="background-image-overlay p-10">
      <div className="card card-compact bg-white sm:w-96 w-[16rem] h-[100%] rounded-none shadow-xl p-4">
        <figure className="img-hover-zoom">
          <Image src="https://assets-global.website-files.com/6574562291ff6dc49b9a52c6/6576f313ed839d41ae6be449_Product_placeholder_image_08-p-800.jpg" height={200} width={500} alt="Shoes" />
        </figure>
        <div className="card-body cCard-overlay">
          <small className="gray-title">Latest</small>
          <div className="px-1 flex flex-col gap-3">
            <h2 className="card-title text-3xl">Nebula Salad Bowl</h2>
            <p className="text-xs font-medium">
              Introducing the Nebula Salad Bowl, a stunning addition to your tableware collection. Crafted with the utmost care and attention to detail, this piece not only serves its function but also adds a touch of elegance to your daily
              routine.
            </p>
            <p className="text-xs font-medium">
              <del> $ 65.00 USD </del>$ 49.00 USD
            </p>

            <form action={onSubmit} className="border border-black">
              <select name="size" className=" bg-white w-full h-12 border-none uppercase p-2">
                <option defaultValue="Select">Select Size</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
              <div className="w-full flex h-12 justify-center items-center bg-black text-white">
                <button type="submit" className="w-full font-semibold text-lg">
                  Add to cart
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageOverlay;
