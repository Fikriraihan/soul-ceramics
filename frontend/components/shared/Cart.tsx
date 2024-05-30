import React, { useEffect, useState } from "react";
import Drawer from "./Drawer";
import { cartSelector } from "@/store/cart-store";
import { ShopCard } from "./Card";

const Cart = () => {
  const itemsInCart = cartSelector.use.cart();
  const totalItemsInCart = cartSelector.use.totalItems();
  const removeFromCart = cartSelector.use.removeFromCart();
  const clearCart = cartSelector.use.clearCart();
  const getCartTotal = cartSelector.use.getCartTotal();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(getCartTotal());
  }, [itemsInCart, getCartTotal]);

  return (
    <Drawer
      drawerName="cartDrawer"
      trigger={`Bag ${totalItemsInCart}`}
      content={
        <div className="flex flex-col gap-14 pb-20">
          {" "}
          {/* Added padding-bottom */}
          {itemsInCart.length > 0 ? (
            itemsInCart.map((item, index) => (
              <div key={index} className="leading-[0px] w-full">
                <ShopCard image={item.image} additionalClassName="!w-[37.7em] !h-[37.7em]" size={item.size} title={item.title} price={item.price} discount={item.discount} />
                <button className="underline text-xs font-medium" onClick={() => item.id !== undefined && removeFromCart(+item.id)}>
                  Remove
                </button>
              </div>
            ))
          ) : (
            <div className="w-full flex justify-center items-center h-screen">
              <p>No items in cart</p>
            </div>
          )}
          {itemsInCart.length > 0 && (
            <div className="w-full">
              <button onClick={clearCart} className="btn btn-primary px-10">
                Clear Cart
              </button>
            </div>
          )}
          <div className="fixed bottom-0 left-0 w-full bg-white p-4 border-t flex justify-between items-center z-10">
            <p className="text-xs">Subtotal</p>
            <p className="font-medium text-xs">$ {total}.00 UD</p>
          </div>
        </div>
      }
      title="Your Bag"
    />
  );
};

export default Cart;
