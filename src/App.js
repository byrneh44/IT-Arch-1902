import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./components/AppContext";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import ProductPage from "./components/ProductPage";
import LoginPage from "./components/LoginPage";
import Cart from "./components/Cart";
import "./styles.css";

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <AppProvider>
      <Router>
        <div className="app">
          <Navigation setCartOpen={setCartOpen} />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </main>
          <Cart isOpen={cartOpen} setIsOpen={setCartOpen} />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
