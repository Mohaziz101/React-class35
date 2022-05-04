import { Link } from "react-router-dom";

import ProductImage from "./ProductImage";

import "../css/Product.css";

function Product({ id, title, image }) {
  return (
    <Link to={`/product/${id}`}>
      <div className="product">
        <ProductImage productId={id} image={image} />
        <span className="product-title" title={title}>
          {title}
        </span>
      </div>
    </Link>
  );
}

export default Product;