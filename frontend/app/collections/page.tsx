import React from "react";
import CollectionScreen from "../Modules/CollectionScreen";
import { getAllUsers } from "@/services/user/user-service";
import { getAllProducts } from "@/services/product/product-service";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collections",
};

const Collections = async () => {
  const product = await getAllProducts();
  const users = await getAllUsers();

  return <CollectionScreen />;
};

export default Collections;
