import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../mockApi";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProducts();
      const selectedProduct = data.find((item) => item.id === parseInt(id));
      setProduct(selectedProduct);
    };
    fetchData();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-detail">
      <div className="product-detail-content">
        <div className="product-image-large"></div>
        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="product-price">{product.price}</p>
          <p className="product-description">{product.desc}</p>
          <button className="add-to-cart-button-large">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
