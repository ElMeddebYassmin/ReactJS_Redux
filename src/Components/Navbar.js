import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const cartCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <nav>
      <div className="logo">
        <h2>Boutique</h2>
      </div>
      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/products">Products</a>
        </li>
        <li>
          <a href="/cart">Cart ({cartCount})</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
