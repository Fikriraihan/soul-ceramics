// frontend/services/api.js
"use server";
import { unstable_noStore as noStore, revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getAllProducts = async () => {
  noStore();
  return await fetch(`${API_BASE_URL}/api/products`).then((res) => res.json());
};

export const createProduct = async (product: FormData) => {
  const rawData = Object.fromEntries(product);

  try {
    await fetch(`${API_BASE_URL}/api/products`, {
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
