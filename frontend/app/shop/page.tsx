import React, { cache } from "react";
import ShopScreen from "../Modules/ShopScreen";
import { Metadata } from "next";

// for caching using third party, manually deduplicate request if not using fetch
// const getProducts = cache(async (id: string) => {
//   const products = await prisma.get.findUnique(id);
//   return products
// })

export const metadata: Metadata = {
  title: "ShopV1",
};

const Shop = () => {
  return <ShopScreen />;
};

export default Shop;
