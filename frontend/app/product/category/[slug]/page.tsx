import CategoryScreen from "@/app/Modules/CategoryScreen";
import { getAllProducts } from "@/services/product/product-service";
import React from "react";

async function generateStaticParams() {
  // const response = await getAllProducts();
}

const Category = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const products = await getAllProducts();

  const productByCategory = products.filter((product: any) => product.category?.toLowerCase() === slug.replace("-", " "));

  return <CategoryScreen productByCategory={productByCategory} slug={slug} />;
};

export default Category;
