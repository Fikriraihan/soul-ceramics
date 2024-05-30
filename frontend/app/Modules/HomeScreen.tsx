import ImageOverlay from "@/components/shared/ImageOverlay";
import { JournalCard, ShopCard } from "@/components/shared/Card";

import { productList } from "@/constant/ProductJson";
import React, { Suspense } from "react";
import { journalList } from "@/constant/JournalJson";
import { CollectionCard } from "@/components/shared/CollectionCard";
import { getAllProducts } from "@/services/product/product-service";
import { ProductProps } from "@/types/types";

async function Products() {
  const products: any = await getAllProducts();

  return (
    <div className="gap-x-3 md:gap-y-20 gap-y-10 grid grid-cols-10 sm:flex-row flex-col mt-6">
      {products?.map((product: ProductProps) => (
        <ShopCard key={product?.id} discount={product?.discount} category={product?.category} image={product?.image} price={product?.price} size={product?.size} title={product?.title} />
      ))}
    </div>
  );
}

const HomeScreen = async () => {
  const journals = journalList;
  return (
    <main className="mt-6 text-black flex flex-col gap-16">
      <section className="grid grid-cols-2 gap-4">
        <CollectionCard image={productList[0].image} title={productList[0].title} />
        <CollectionCard image={productList[1].image} title={productList[1].title} />
      </section>
      <section>
        <div className="flex justify-between">
          <h1>Shop latest</h1>
          <small>EXPLORE ALL</small>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <Products />
        </Suspense>
      </section>
      <section>
        <ImageOverlay />
      </section>
      <section>
        <div className="gap-x-3 place-content-center md:gap-y-20 gap-y-10 grid grid-cols-9 sm:flex-row flex-col mt-6">
          {journals.map((journal) => (
            <JournalCard title={journal.title} category={journal.category} description={journal.description} headImage={journal.headImage} id={journal.id} key={journal.id} size={journal.size} subDetail={journal.subDetail} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default HomeScreen;
