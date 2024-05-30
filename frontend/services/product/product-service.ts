"use server";
import { unstable_noStore as noStore, revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const getAllProducts = async () => {
  noStore();
  return await fetch("http://localhost:8000/api/products").then((res) => res.json());
};

export const createProduct = async (product: FormData) => {
  const rawData = Object.fromEntries(product);

  try {
    await fetch("http://localhost:8000/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rawData),
    }).then((res) => res.json());
  } catch (error) {
    return { message: (error as Error).message };
  }

  revalidatePath("/");
  redirect("/");
};
