// src/App.js
import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css";

const App = () => {
  const [products] = useState([
    {
      id: 1,
      name: "Apple iPhone 13",
      description:
        "Latest model with A15 Bionic chip, 5G capability, and improved cameras.",
    },
    {
      id: 2,
      name: "Samsung Galaxy S21",
      description:
        "High-performance smartphone with a 108MP camera and 8K video recording.",
    },
    {
      id: 3,
      name: "Google Pixel 6",
      description:
        "Google’s newest phone featuring the Google Tensor processor and advanced AI.",
    },
    {
      id: 4,
      name: "OnePlus 9 Pro",
      description:
        "Flagship phone with Snapdragon 888 and Hasselblad camera for exceptional photography.",
    },
    {
      id: 5,
      name: "Sony Xperia 5 II",
      description:
        "Compact smartphone with 120Hz display and triple lens camera system.",
    },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct.quantity === 1) {
      setCart(cart.filter((item) => item.id !== product.id));
    } else {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  };

  const getCartItemQuantity = (product) => {
    const cartItem = cart.find((item) => item.id === product.id);
    return cartItem ? cartItem.quantity : 0;
  };

  return (
    <div className="App">
      <h1>Shopping Cart</h1>
      <ProductList
        products={products}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        getCartItemQuantity={getCartItemQuantity}
      />
      <Cart cartItems={cart} removeFromCart={removeFromCart} />
    </div>
  );
};

export default App;
