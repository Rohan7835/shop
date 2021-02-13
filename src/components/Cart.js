import React from "react";
import CartItem from "./CartItem";

const Cart = ({ hideCart }) => {
  return (
    <div className="cart-container">
      <div className="cart">
        <div className="cart-header">
          <h3>Shopping Cart</h3>
          <div className="cross" onClick={hideCart}>
            <i className="fas fa-times"></i>
          </div>
        </div>
        <div className="cart-items">
          <CartItem
            title="Orange Red Cherries, 2 lb"
            price="3.65"
            icon={"/images/bowl.png"}
          />
          <CartItem
            title="Far Life Fat Free Ultra Milk"
            price="2.12"
            icon={"/images/bowl2.png"}
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
