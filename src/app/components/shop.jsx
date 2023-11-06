"use client";
import React, { useEffect, useState } from "react";
import "./shop.css";
import Item from "./item";

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
          <Item
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            description={item.description}
            category={item.category}
          />
        ))}
      </div>
    </div>
  );
}

export default Shop;
