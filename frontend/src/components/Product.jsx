import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product, screen }) => {
  return (
    <div className={`my-1 p-3 ${screen}_product_card_container`}>
      <Link to={`/product/${product._id}`}>
        <div className="product_card_image_container">
          <Card.Img
            src={product.image}
            variant="top"
            className="product_card_image"
          />
        </div>
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div" className="product-title">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div" className="product_review">
          <Rating value={product.rating} text={`(${product.numReviews})`} />
        </Card.Text>
        <Card.Text as="h5">${product.price}</Card.Text>
      </Card.Body>
    </div>
  );
};
export default Product;
