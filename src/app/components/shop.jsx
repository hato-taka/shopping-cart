"use client";
import React, { useContext, useEffect, useState } from "react";
import "./shop.css";
import Item from "./item";
import { ShopContext } from "@/context/shop-context";

function Shop() {
  const { items } = useContext(ShopContext);

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
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Shop;
