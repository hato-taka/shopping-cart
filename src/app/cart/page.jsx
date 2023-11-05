import React from "react";
import "./cart.css";

const Cart = () => {
  return (
    <div className="cart">
      <div>
        <h1>カートの商品</h1>
      </div>
      <div className="cart">
        <div className="cartItem">
          <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
          <div className="description">
            <p>
              <b>name</b>
            </p>
            <p>price</p>
            <div className="countHandler">
              <button> - </button>
              <input value={"1"} />
              <button> + </button>
            </div>
          </div>
        </div>
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
