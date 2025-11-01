import React from 'react';
import './Product.css';

const Product: React.FC = () => {
  return (
    <div className="page-container">
      <div className="page-card">
        <h1>Product Page</h1>
        <p>Explore our products and services</p>
        <div className="page-content">
          <div className="product-grid">
            <div className="product-item">
              <h3>Product 1</h3>
              <p>Description of product 1</p>
            </div>
            <div className="product-item">
              <h3>Product 2</h3>
              <p>Description of product 2</p>
            </div>
            <div className="product-item">
              <h3>Product 3</h3>
              <p>Description of product 3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

