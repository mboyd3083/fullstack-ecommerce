import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useParams } from "react-router-dom";
import Paginate from "../components/Paginate";
import { Link } from "react-router-dom";
import ProductCarousel from "../components/ProductCarousel";

const HomeScreen = () => {
  const { keyword, pageNumber } = useParams();
  const pageSize = 12;
  const { data, isLoading, error } = useGetProductsQuery({
    pageNumber,
    pageSize,
    keyword,
  });

  const { products, pages, page } = data || {};

  return (
    <>
    {!keyword ? <ProductCarousel/> : <Link to="/" className="btn btn-light mb-4">Go Back</Link>}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <h1>Latest Products</h1>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            baseUrl="/page"
            keyword={keyword ? keyword : ""}
          />
        </>
      )}
    </>
  );
};
export default HomeScreen;
