import React from 'react';
import Product from './Product';
import '../css/ProductList.css';

function ProductList({ products }) {
  return (
    <div className="products">
      <ul className="products-list">
        {products.map((product) => {
          return (
            <li key={`product-${product.id}`} className="products-item">
              <Product title={product.title} image={product.image} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProductList;