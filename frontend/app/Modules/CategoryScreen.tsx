import { ShopCard } from "@/components/shared/Card";
import Link from "next/link";
import React from "react";

const CategoryScreen = ({ slug, productByCategory }: { slug: string; productByCategory: any }) => {
  return (
    <>
      <div className="grid grid-cols-2">
        <h4 className="capitalize font-medium">{slug.replace("-", " ")}</h4>
        <p className="text-xs leading-[14.4px] font-medium">
          Here, you&apos;ll find an array of exclusive drops and limited-edition releases that stand at the forefront of contemporary trends. From cutting-edge fashion to the latest gadgets, our selections are designed to captivate and
          inspire. These collections are not just products; they are unique experiences crafted for those who appreciate the essence of exclusivity and desire to stay ahead of the curve. Keep an eye on this space for the newest, most
          sought-after items that you won&apos;t find anywhere else!
        </p>
      </div>
      <div className="mt-24 flex flex-col gap-4">
        {productByCategory.map((product: any) => (
          <Link key={product._id} href={`/product/${product._id}`}>
            <ShopCard image={product?.image} category={product.category} title={product.title} price={product.price} size="medium" discount={product?.discount} additionalClassName="!h-[49.881em] !w-[33.188em]" />
          </Link>
        ))}
      </div>
      <div className="w-full h-24" />
    </>
  );
};

export default CategoryScreen;
