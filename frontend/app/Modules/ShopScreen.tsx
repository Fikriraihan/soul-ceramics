import { ShopCard } from "@/components/shared/Card";
import React, { Suspense } from "react";
import Link from "next/link";
import FilterDrawer from "@/components/shared/FilterDrawer";
import { getAllProducts } from "@/services/product/product-service";
import { ProductProps } from "@/types/types";

async function Products() {
  const products: any = await getAllProducts();
  return (
    <>
      {products?.map((product: any) => (
        <ShopCard href={`/product/${product?._id}`} key={product?.id} discount={product?.discount} category={product?.category} image={product?.image} price={product?.price} size={product?.size} title={product?.title} />
      ))}
    </>
  );
}

const ShopScreen = async () => {
  const products: any = await getAllProducts();
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex">
          <label className="input w-[240px] !border-none bg-white flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-6 h-6 opacity-70">
              <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
            </svg>
            <input type="text" className="grow text-xs" placeholder="SEARCH..." />
          </label>
          <Link href="/product/create">
            <button className="btn btn-primary btn-outline">Create Product</button>
          </Link>
        </div>
        <div>
          <FilterDrawer products={products} />
        </div>
      </div>
      <div className="gap-x-3 md:gap-y-20 gap-y-10 grid grid-cols-10 sm:flex-row flex-col mt-6">
        <Suspense fallback={<div>Loading...</div>}>
          <Products />
        </Suspense>
      </div>
    </div>
  );
};

export default ShopScreen;
