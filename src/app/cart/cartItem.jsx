"use client";
import { ShopContext } from "@/context/shop-context";
import React, { useContext } from "react";

function CartItem(props) {
  const { id, title, image, price } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={image} />
      <div className="description">
        <p className="cartItemTitle">{title}</p>
        <p>$ {price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
        <p className="subtotal">小計: ${price * cartItems[id]}</p>
      </div>
    </div>
  );
}

export default CartItem;
