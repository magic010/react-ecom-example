import React from "react";
import Product from "../components/ProductItem";

const Cart = ({
  products,
  handleIncrement,
  handleDecrement,
  handleReset,
  handleRemoveFromCart,
}) => {
  const cartProducts = products.filter((p) => p.isInCart);
  return (
    <>
      {cartProducts.length === 0 && <h1>Cart is empty</h1>}
      {cartProducts.map((p) => (
        <Product
          key={p.name}
          product={p}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
          handleRemoveFromCart={handleRemoveFromCart}
        />
      ))}
      {cartProducts.length !== 0 && (
        <div onClick={() => handleReset()} className="btn btn-secondary ms-2">
          Reset
        </div>
      )}
    </>
  );
};

export default Cart;
