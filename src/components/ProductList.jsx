// src/components/ProductList.js
import React from "react";
import Product from "./Product";

const ProductList = ({
  products,
  addToCart,
  removeFromCart,
  getCartItemQuantity,
}) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          getCartItemQuantity={getCartItemQuantity}
        />
      ))}
    </div>
  );
};

export default ProductList;
