import React, { useState, useEffect } from "react";
import { useAppContext } from "./AppContext";
import { fetchProducts } from "../mockApi";

const HomePage = () => {
  const { addToCart, searchTerm } = useAppContext();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    fetchData();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="products-container">
      <h2>Featured Products</h2>
      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image"></div>
              <h3>{product.name}</h3>
              <p className="product-desc">{product.desc}</p>
              <div className="product-footer">
                <span className="price">{product.price}</span>
                <button
                  onClick={() => addToCart(product)}
                  className="add-to-cart-button"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
