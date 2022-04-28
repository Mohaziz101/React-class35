/* eslint-disable jsx-a11y/alt-text */
import "../css/ProductImage.css";

function ProductImage({image}) {
  return (
    <div className="product-image-container">
      <img className="product-image" src={image}/>
     
    </div>
  );
}

export default ProductImage;