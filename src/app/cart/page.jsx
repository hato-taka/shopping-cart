"use client";

import React, { useContext } from "react";
import "./cart.css";
import CartItem from "./cartItem";
import { ShopContext } from "@/context/shop-context";

const Cart = () => {
  const { items, cartItems } = useContext(ShopContext);

  return (
    <div className="cart">
      <div>
        <h1>カートの商品</h1>
      </div>
      <div className="cart">
        {items.map((item) => {
          if (cartItems[item.id] !== 0) {
            return <CartItem data={item} />;
          }
        })}
      </div>

      <div className="checkout">
        <p>小計: xxxx</p>
        <button>買い物を続ける</button>
        <button>チェックアウト</button>
      </div>
    </div>
  );
};

export default Cart;
