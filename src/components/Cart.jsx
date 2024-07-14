import React from "react";
import CartItem from "./CartItem";

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div className="cart">
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
      ))}
      <p>Total Items: {cartItems.length}</p>
    </div>
  );
};

export default Cart;
