import React from "react";
import "./cart.css";
import CartItem from "./cartItem";

const Cart = () => {
  return (
    <div className="cart">
      <div>
        <h1>カートの商品</h1>
      </div>
      <div className="cart">
        <CartItem />
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
