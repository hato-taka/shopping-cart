import React from "react";

function CartItem() {
  return (
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
  );
}

export default CartItem;
