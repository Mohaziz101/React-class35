import '../css/Product.css';

function Product({ title, image }) {
  return (
    <div className="product">
      <img className="product-image " src={image} alt={title} />
      <span className="product-title" >
        {title}
      </span>
    </div>
  );
}

export default Product;