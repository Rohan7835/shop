import React, { useState } from "react";
import ProductData from "./ProductData";
import Cart from "./Cart";
import { CSSTransition } from "react-transition-group";

const Products = () => {
  const [showCart, setShowCart] = useState(false);

  const hideCart = () => {
    setShowCart(false);
  };
  const [items, setItems] = useState(ProductData);
  return (
    <main>
      <CSSTransition
        in={showCart}
        classNames={"slidein-slideout"}
        timeout={800}
        unmountOnExit={true}
        appear={true}
      >
        <Cart hideCart={hideCart} />
      </CSSTransition>
      <div className="products-list">
        {items.map((item) => {
          return (
            <div className="products" key={item.id}>
              <div className="product-img">
                <img src={item.img} alt="" />
              </div>
              <div className="product-price">${item.price}</div>
              <div className="product-title">{item.title}</div>
              <button
                className="add-btn"
                onClick={() => {
                  setShowCart(true);
                }}
              >
                ADD
                <div className="plus">+</div>
              </button>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Products;
