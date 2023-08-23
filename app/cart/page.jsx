import Cart from "@/components/cart/Cart";
import React from "react";
import { useSelector } from "react-redux";

export default function page() {
  const cartItems = useSelector((state) => state.cart);

  console.log("cartItems: ", cartItems);
  return (
    <>
      <Cart />
    </>
  );
}
