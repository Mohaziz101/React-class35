import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Title from '../components/Title';
import ProductImage from '../components/ProductImage';
import useFetch from '../hooks/useFetch';

import '../css/ProductDetails.css';

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [isLoading, error, performFetch] = useFetch(
    `https://fakestoreapi.com/products/${id}`,
    setProduct,
  );

  useEffect(() => {
    performFetch();
  }, [id]);// eslint-disable-line react-hooks/exhaustive-deps

  if (error || product === null) {
    return (
      <>
        <Title
          title={'Something went wrong finding the product. Please try again!'}
        />
      </>
    );
  }

  if (isLoading) {
    return 'Loading...';
  }

  const { id: productId, title, description, image } = product;
  return (
    <div className="product-details">
      <Title title={title} />
      <div className="product-details-information">
        <div className="product-details-image">
          <ProductImage productId={productId} image={image} />
        </div>
        <p className="product-details-description">{description}</p>
      </div>
    </div>
  );
}

export default ProductDetails;