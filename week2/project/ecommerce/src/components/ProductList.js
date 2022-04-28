import React from 'react';

import Product from './Product';

import '../css/ProductList.css';

function ProductList({ products }) {
  return (
    <ul className="products">
      {products.map((product) => {
        return (
          <li key={`${product.id}`} className="products-item">
            <Product
              id={product.id}
              title={product.title}
              image={product.image}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default ProductList;