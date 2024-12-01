import React from "react";
import { X } from "react-feather";
import { useAppContext } from "./AppContext";

const Cart = ({ isOpen, setIsOpen }) => {
  const { cart } = useAppContext();

  return (
    <div className={`cart-sidebar ${isOpen ? "open" : ""}`}>
      <div className="cart-header">
        <h2>Shopping Cart</h2>
        <button onClick={() => setIsOpen(false)} className="close-button">
          <X />
        </button>
      </div>
      <div className="cart-items">
        {cart.length === 0 ? (
          <div className="cart-empty">Your cart is empty</div>
        ) : (
          cart.map((item, index) => (
            <div key={index} className="cart-item">
              <span>{item.name}</span>
              <span>{item.price}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;
