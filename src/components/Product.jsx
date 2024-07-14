// src/components/Product.js
import React from "react";

const Product = ({
  product,
  addToCart,
  removeFromCart,
  getCartItemQuantity,
}) => {
  const quantity = getCartItemQuantity(product);
  return (
    <div className="product">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      {quantity === 0 ? (
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      ) : (
        <div>
          <button onClick={() => removeFromCart(product)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => addToCart(product)}>+</button>
        </div>
      )}
    </div>
  );
};

export default Product;
