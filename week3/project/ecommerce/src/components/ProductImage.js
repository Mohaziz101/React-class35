/* eslint-disable jsx-a11y/alt-text */
import { useContext } from "react";

import FavouriteContext from "../contexts/FavouriteContext";

import heartFilled from "../assets/heart-solid.svg";
import heartEmpty from "../assets/heart-regular.svg";
import "../css/ProductImage.css";

function ProductImage({ productId, image }) {
  const { isFavourite, toggleFavourite } = useContext(FavouriteContext);

  const isFav = isFavourite(productId);

  return (
    <div className="product-image-container">
      <img className="product-image" src={image}/>
      <div
        className="product-image-favourite-container"
        onClick={(e) => {
          e.preventDefault();
          toggleFavourite(productId);
        }}
      >
        <img
          className="product-image-favourite"
          src={isFav ? heartFilled : heartEmpty}
        />
      </div>
    </div>
  );
}

export default ProductImage;