import React from "react";
import ShopV2Screen from "../Modules/ShopV2Screen";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ShopV2",
};

const ShopV2 = async ({ searchParams }: { searchParams: { search: string } }) => {
  const search = searchParams.search;

  return <ShopV2Screen search={search} />;
};

export default ShopV2;
