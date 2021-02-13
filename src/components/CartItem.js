import React, { useState, useEffect } from "react";

const CartItem = ({ title, price, icon }) => {
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    if (amount < 0) {
      setAmount(0);
    }
  }, [amount]);
  return (
    <div className="cart-item">
      <img src={icon} alt="" />
      <div className="cart-details">
        <p>{title}</p>
        <p>Unit Price ${(price * amount).toFixed(2)}</p>
        <button className="cart-btn">
          <p onClick={(prv) => setAmount(amount - 1)}>-</p>
          {amount}
          <p onClick={(prv) => setAmount(amount + 1)}>+</p>
        </button>
      </div>

      <div className="price-bold">${(price * amount).toFixed(2)}</div>
    </div>
  );
};
export default CartItem;
