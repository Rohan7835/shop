import React, { useState } from "react";
import Cart from "./Cart";
import { CSSTransition } from "react-transition-group";

const Header = ({ click }) => {
  const [showCart, setShowCart] = useState(false);

  const hideCart = () => {
    setShowCart(false);
  };
  return (
    <>
      <CSSTransition
        in={showCart}
        classNames={"slidein-slideout"}
        timeout={800}
        unmountOnExit={true}
        appear={true}
      >
        <Cart hideCart={hideCart} />
      </CSSTransition>
      <header>
        <div className="menu-toggler">
          <div className="icon-justify" onClick={click}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="search-bar">
          <div className="search-icon">
            <i className="fas fa-search"></i>
          </div>
          <input type="text" placeholder="Eg. Meat, Yogurt, Eggs" />
        </div>
        <nav>
          <ul className="nav-links">
            <li className="nav-link">Receipes</li>
            <li className="nav-link">My Account</li>
            <li className="nav-link" onClick={() => setShowCart(!showCart)}>
              <i className="fas fa-shopping-cart"></i>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
