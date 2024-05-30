import { productList } from "@/constant/ProductJson";
import Link from "next/link";
import React, { Suspense } from "react";
import { Icon } from "@iconify/react";
import Drawer from "@/components/shared/Drawer";
import { ShopCard } from "@/components/shared/Card";

import InputSearch from "@/components/shared/inputSearch";
import { getAllProducts } from "@/services/product/product-service";
import { ProductProps } from "@/types/types";

async function Products({ search }: { search: string }) {
  const products: any = await getAllProducts();
  const filterProduct = products.filter((product: ProductProps) => product.title.toLowerCase().includes(search?.toLowerCase() || ""));

  const productAppear = search ? filterProduct : products;

  return (
    <div className="gap-x-4 md:gap-y-20 gap-y-10 grid grid-cols-6  mt-6">
      {productAppear?.map((product: any) => (
        <ShopCard
          key={product?.id}
          discount={product?.discount}
          category={product?.category}
          image={product?.image}
          price={product?.price}
          size={product?.size}
          title={product?.title}
          additionalClassName="lg:!h-[49em] !h-[30em]"
          wrapperClassname="!max-w-full col-span-6 "
        />
      ))}
    </div>
  );
}

const ShopV2Screen = ({ search }: { search: string }) => {
  const categoryFilter = new Set(productList.map((product) => product.category));
  const arrCategory = Array.from(categoryFilter);

  return (
    <div>
      <InputSearch />
      {/* <div className="flex justify-between">
        <div>
          <Drawer
            drawerName="filterDrawer"
            // trigger={
            //   <div className="flex items-center gap-2">
            //     <Icon icon="material-symbols:filter-alt" />
            //     <h6>Filter</h6>
            //   </div>
            // }
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
        </div>
      </div> */}
      <Suspense key={search} fallback={<div>Loading...</div>}>
        <Products search={search} />
      </Suspense>

      {/* <ListProducts /> */}
    </div>
  );
};

export default ShopV2Screen;
