import React from "react";

const CartItem = ({ item, removeFromCart }) => {
  return (
    <div className="cart-item">
      <h3>{item.name}</h3>
      <span>Quantity: {item.quantity}</span>
      <button onClick={() => removeFromCart(item)}>Remove from Cart</button>
    </div>
  );
};

export default CartItem;
