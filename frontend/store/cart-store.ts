import { ProductProps } from "@/types/types";
import { StateCreator } from "zustand";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { createSelectors } from "./create-selector";

interface CartState {
  cart: ProductProps[];
  addToCart: (product: ProductProps) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  totalItems: number;
}

const useCartStore = create<CartState>(
  persist(
    (set, get) => ({
      cart: [],
      totalItems: 0,
      addToCart: (product: ProductProps) => {
        set((state) => {
          const updatedCart = [...state.cart, product];
          return {
            cart: updatedCart,
            totalItems: updatedCart.length,
          };
        });
      },
      removeFromCart: (id: number) => {
        set((state) => {
          const updatedCart = state.cart.filter((item) => item.id !== id);
          return {
            cart: updatedCart,
            totalItems: updatedCart.length,
          };
        });
      },
      clearCart: () => {
        set({
          cart: [],
          totalItems: 0,
        });
      },
      getCartTotal: () => {
        return get().cart.reduce((total, item: any) => {
          let price = item.price || 0;
          if (item.discount) {
            if (typeof item.discount === "number") {
              price -= item.discount; // assuming discount is a fixed amount
            } else if (typeof item.discount === "string" && item.discount.includes("%")) {
              const discountPercentage = parseFloat(item.discount) / 100;
              price -= price * discountPercentage;
            }
          }
          return total + price;
        }, 0);
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  ) as StateCreator<CartState, [], []>
);

export const cartSelector = createSelectors(useCartStore);
