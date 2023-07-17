import { useEffect, useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import Product from "../components/Product";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import { useParams } from "react-router-dom";
import Paginate from "../components/Paginate";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { AiOutlineDownCircle, AiOutlineUpCircle } from "react-icons/ai";

const ProductsScreen = () => {
  const categoryList = [
    "All",
    "Computers & Laptops",
    "TVs",
    "Cameras",
    "Phones & Tablets",
    "Video Games & Consoles",
    "Audio",
  ];

  const [category, setCategory] = useState("");
  const [pageNumber, setPageNumber] = useState();
  const [keyword, setKeyword] = useState("");
  const [showCategoryFilter, setShowCategoryFilter] = useState(false);

  const {
    keyword: searchWord,
    pageNumber: pgNumber,
    category: categoryParam,
  } = useParams();

  const pageSize = 12;
  const { data, isLoading, error } = useGetProductsQuery({
    pageNumber,
    pageSize,
    keyword,
    category,
  });

  const { products, pages, page } = data || {};

  const setCategoryHandler = (category) => {
    setPageNumber(1);
    setKeyword("");
    if (category === "All") {
      setCategory("");
    } else {
      setCategory(category);
    }
  };

  useEffect(() => {
    setCategory(categoryParam);
    setPageNumber(pgNumber);
    setKeyword(searchWord);
  }, [categoryParam, pgNumber, searchWord]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <h1 className="products_screen_title">Products</h1>
          <Row className="products_screen_row">
            <Col style={{ marginTop: "1.2rem" }}>
              <Form>
                <Form.Group
                  controlId="category"
                  className="my-2 category_filter_container"
                >
                  <div
                    className="category_header_container"
                    onClick={() => setShowCategoryFilter(!showCategoryFilter)}
                  >
                    <h4
                      style={{ marginBottom: "1rem" }}
                      className="products_category_header"
                    >
                      Category
                    </h4>
                    <h4 className="products_category_icon">
                      {showCategoryFilter ? (
                        <AiOutlineDownCircle />
                      ) : (
                        <AiOutlineUpCircle />
                      )}
                    </h4>
                  </div>
                  <Row
                    className={
                      showCategoryFilter
                        ? "category_filter_items"
                        : "category_filter_items_hidden"
                    }
                  >
                    {categoryList.map((category) => (
                      <p
                        className="category-filter-title"
                        key={category}
                        onClick={() => setCategoryHandler(category)}
                        style={{ marginBottom: ".5rem" }}
                      >
                        {category}
                      </p>
                    ))}
                  </Row>
                </Form.Group>
              </Form>
            </Col>
            <Col>
              {data.products.length === 0 ? (
                <Message variant="">No products</Message>
              ) : (
                <div className="product_items_container">
                  <Row>
                    {products.map((product) => (
                      <Col
                        key={product._id}
                        xs={12}
                        md={6}
                        lg={4}
                        xl={3}
                        className="product_col"
                      >
                        <Product product={product} screen="products" />
                      </Col>
                    ))}
                  </Row>

                  <Paginate
                    pages={pages}
                    page={page}
                    baseUrl="/page"
                    keyword={keyword ? keyword : ""}
                  />
                </div>
              )}
            </Col>
          </Row>
        </>
      )}
    </>
  );
};
export default ProductsScreen;
