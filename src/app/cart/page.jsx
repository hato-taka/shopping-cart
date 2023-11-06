"use client";

import React, { useContext } from "react";
import "./cart.css";
import CartItem from "./cartItem";
import { ShopContext } from "@/context/shop-context";

const Cart = () => {
  const { items, cartItems, getTotalCartAmount, checkout } =
    useContext(ShopContext);
  // 小数点第2位で四捨五入
  const totalAmount = Math.round(getTotalCartAmount() * 100) / 100;

  return (
    <div className="cart">
      <div>
        <h1>カートの商品</h1>
      </div>
      <div className="cart">
        {items.map((item) => {
          if (cartItems[item.id] !== 0) {
            return <CartItem data={item} key={item.id} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p className="total">合計: ${totalAmount}</p>
          <button
            onClick={() => {
              checkout();
            }}
          >
            カートを空にする
          </button>
        </div>
      ) : (
        <h1> cart is empty</h1>
      )}
    </div>
  );
};

export default Cart;
