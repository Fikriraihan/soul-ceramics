import AddToCart from "@/components/shared/AddToCart";
import ScrolledSection from "@/components/shared/ScrolledSection";
import { getAllProducts } from "@/services/product/product-service";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map(({ _id }: any) => ({ id: _id }));
}

export async function generateMetadata({ params: { id } }: { params: { id: string } }): Promise<Metadata> {
  const products = await getAllProducts();
  const productDetail = products.find((product: any) => product._id === id);

  return {
    title: productDetail?.title,
    description: productDetail?.category,
  };
}

const ProductDetail = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const products = await getAllProducts();
  const productDetail = products.find((product: any) => product._id === id);

  if (!productDetail) {
    notFound();
  }

  return (
    <div className="grid grid-cols-12 min-h-screen">
      <section className="col-span-10 md:col-span-3">
        <div className="flex flex-col justify-center h-full gap-2 pr-4">
          <h3 className="leading-[19.2px] font-medium">{productDetail?.category}</h3>
          <h1 className="text-[32px] font-medium leading-[38.4px]">{productDetail?.title}</h1>
          <p className="text-xs leading-[14.4px] font-medium">
            Introducing the Celestial Serving Platter, a stunning addition to your tableware collection. Crafted with the utmost care and attention to detail, this piece not only serves its function but also adds a touch of elegance to your
            daily routine.
          </p>
          <ul className="pl-4 text-xs font-medium leading-[14.4px]">
            <li className="list-disc">High-quality ceramic, kiln-fired for durability.</li>
            <li className="list-disc">Dimensions: 40 x 20 x 5 inches.</li>
            <li className="list-disc">Capacity: 200 ml.</li>
            <li className="list-disc">Weight: 50 g.</li>
            <li className="list-disc">Shipping: Ships worldwide. Delivery times vary based on location.</li>
          </ul>
          <p className="text-xs font-medium leading-[14.4px]">Elevate your dining experience with the bowl, where functionality meets artistry.</p>
        </div>
      </section>
      <section className="col-span-9 md:col-span-6">
        <ScrolledSection image={productDetail!.image} />
      </section>
      <section className="col-span-9 md:col-span-3">
        <div className="flex flex-col justify-center h-full gap-6">
          <p className="font-medium text-xs">$ {productDetail?.price}.00 USD</p>
          <AddToCart />
          <p className="opacity-30 text-xs">Free shipping orders over $200 USD and free return on all orders.</p>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
