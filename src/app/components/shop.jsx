"use client";
import React, { useEffect, useState } from "react";

function Shop() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setItems(json);
      });
  }, []);

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>E-commerce Shop</h1>
      </div>

      <div className="products">
        {items.map((item) => (
          <div key={item.id}>
            <p>{item.id}</p>
            <p>{item.title}</p>
            <p>{item.price}</p>
            <p>{item.category}</p>
            <p>{item.description}</p>
            <img src={item.image} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
