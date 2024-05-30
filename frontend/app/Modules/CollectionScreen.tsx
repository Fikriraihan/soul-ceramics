import { CollectionCard } from "@/components/shared/CollectionCard";
import { productList } from "@/constant/ProductJson";
import Link from "next/link";
import React from "react";

const CollectionScreen = () => {
  return (
    <>
      <div className="grid grid-cols-2">
        <h4 className="capitalize font-medium">Collections</h4>
        <p className="text-xs leading-[14.4px] font-medium">
          Here, you&apos;ll find an array of exclusive drops and limited-edition releases that stand at the forefront of contemporary trends. From cutting-edge fashion to the latest gadgets, our selections are designed to captivate and
          inspire. These collections are not just products; they are unique experiences crafted for those who appreciate the essence of exclusivity and desire to stay ahead of the curve. Keep an eye on this space for the newest, most
          sought-after items that you won&apos;t find anywhere else!
        </p>
      </div>
      <div className="mt-24 grid grid-cols-2 md:gap-x-4 md:gap-y-24 gap-8">
        {productList?.map((product) => (
          <div key={product?.id} className="md:col-span-1 col-span-2">
            <Link href={`/product/category/${product.category?.replace(" ", "-").toLowerCase()}`}>
              <CollectionCard image={product.image} title={product.title} />
            </Link>
          </div>
        ))}
      </div>
      <div className="w-full h-24" />
    </>
  );
};

export default CollectionScreen;
