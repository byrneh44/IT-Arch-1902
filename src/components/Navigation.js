import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, User, Search } from "react-feather";
import { useAppContext } from "./AppContext";

const Navigation = ({ setCartOpen }) => {
  const { user, searchTerm, setSearchTerm } = useAppContext();

  return (
    <nav className="navbar">
      <div className="nav-content">
        <Link to="/" className="logo">
          TechStore
        </Link>
        <div className="nav-items">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} // Update global search term
            />
            <Search className="search-icon" />
          </div>
          <div className="nav-buttons">
            {user ? (
              <span className="user-name">Hello, {user.name}</span>
            ) : (
              <Link to="/login" className="nav-link">
                <User />
              </Link>
            )}
            <button onClick={() => setCartOpen(true)} className="cart-button">
              <ShoppingCart />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
