import { Row, Col, Image } from "react-bootstrap";
import Product from "../components/Product";
import { useGetLatestProductsQuery } from "../slices/productsApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ProductCarousel from "../components/ProductCarousel";

import { categories, brands } from "../assets/Data";

const HomeScreen = () => {
  const { keyword } = useParams();

  const {
    data: latestProducts,
    isLoading,
    error,
  } = useGetLatestProductsQuery();

  return (
    <>
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to="/" className="btn btn-light mb-4">
          Go Back
        </Link>
      )}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <h1>Popular Categories</h1>

          <div className="category_container">
            {categories.map((category, index) => (
              <Link
                className="category_items"
                to={`/products/${category.title}`}
                key={index}
                style={{ textDecoration: "none" }}
              >
                <div className="category_image_bg">
                  <Image
                    className="category_image"
                    src={category.image}
                    alt={category.title}
                    fluid
                  />
                </div>
                <h5 className="category_title"> {category.title} </h5>
              </Link>
            ))}
          </div>

          <h1>Latest Products</h1>
          <Row>
            {latestProducts.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <h1 className="home_screen_titles">Top Brands</h1>
          <Row className="brand_row_container">
            {brands.map((brand, index) => (
              <Col
                key={index}
                sm={12}
                md={6}
                lg={4}
                xl={3}
                className="brand_section_container"
              >
                <div className="brand_container">
                  <Image
                    className="brand_image"
                    src={brand.image}
                    alt={brand.title}
                  />
                </div>
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};
export default HomeScreen;
