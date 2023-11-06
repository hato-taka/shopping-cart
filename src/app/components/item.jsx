import React from "react";

function Item({ id, title, image, price, description, category }) {
  return (
    <div key={id} className="product">
      <div className="content">
        <p className="title">
          {id}. {title}
        </p>
        <img src={image} alt={title} className="image" />
        <p className="price">${price}</p>
        <p className="description">{description}</p>
        <p className="category">{category}</p>
      </div>
      <button className="addToCartBtn">ADD</button>
    </div>
  );
}

export default Item;
