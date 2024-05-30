"use client";

import React from "react";
import Drawer from "./Drawer";
import { Icon } from "@iconify/react";
import { productList } from "@/constant/ProductJson";
import Link from "next/link";
import { getAllProducts } from "@/services/product/product-service";

const FilterDrawer = ({ products }: { products: any[] }) => {
  const categoryFilter = new Set(products.map((product) => product.category));
  const arrCategory = Array.from(categoryFilter);
  return (
    <Drawer
      drawerName="filterDrawer"
      trigger={
        <div className="flex items-center gap-2 !z-0">
          <Icon icon="material-symbols:filter-alt" />
          <h6>Filter</h6>
        </div>
      }
      title="Filter"
      content={
        <>
          <div className="mb-[18px]">
            <p className="text-xs font-medium">Filter By Category</p>
          </div>
          <div className="flex flex-col">
            {arrCategory.map((product) => (
              <Link href={`/product/category/${product?.replace(" ", "-").toLowerCase()}`} className="cursor-pointer text-xs font-medium" key={product}>
                {product}
              </Link>
            ))}
          </div>
        </>
      }
    />
  );
};

export default FilterDrawer;
