import { getAllProducts } from "@/services/product/product-service";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await getAllProducts();
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const postEntries: MetadataRoute.Sitemap = products.map((products: any) => ({
    url: `${BASE_URL}/product/${products?._id}`,
    // lastModified: new Date(products.updatedAt),
    // changeFrequency,
    // priority
  }));
  return [
    {
      url: `${BASE_URL}`,
      lastModified: new Date(),
    },
    ...postEntries,
  ];
}
