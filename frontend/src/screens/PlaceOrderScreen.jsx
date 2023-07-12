import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button, Row, Col, ListGroup, Image, Card } from "react-bootstrap";
import { toast } from "react-toastify";
import CheckoutSteps from "../components/CheckoutSteps";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { useCreateOrderMutation } from "../slices/ordersApiSlice";
import { clearCartItems } from "../slices/cartSlice";

const PlaceOrderScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const {
    shippingAddress,
    paymentMethod,
    cartItems,
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
  } = cart;
  const { address, city, postalCode, country } = shippingAddress;

  const [createOrder, { isLoading }] = useCreateOrderMutation();

  useEffect(() => {
    if (!address) {
      navigate("/shipping");
    } else if (!paymentMethod) {
      navigate("/payment");
    }
  }, [navigate, address, paymentMethod]);

  const placeOrderHandler = async () => {
    try {
      const res = await createOrder({
        orderItems: cartItems,
        shippingAddress: shippingAddress,
        paymentMethod: paymentMethod,
        itemsPrice: itemsPrice,
        shippingPrice: shippingPrice,
        taxPrice: taxPrice,
        totalPrice: totalPrice,
      }).unwrap();
      dispatch(clearCartItems());
      navigate(`/checkout/${res._id}`);
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <>
      <CheckoutSteps step1 step2 step3 />
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Shipping</h2>
              <p>
                <strong>Address: </strong>
                {address}, {city} {postalCode}, {country}
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Order Items</h2>
              {cartItems.length === 0 ? (
                <Message>Your cart is empty</Message>
              ) : (
                <ListGroup variant="flush">
                  {cartItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={2}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                          <Link to={`/checkout/${item._id}`}>{item.name}</Link>
                        </Col>
                        <Col md={4}>
                          {item.qty} x ${item.price} = ${item.qty * item.price}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items:</Col>
                  <Col>${itemsPrice}</Col>
                </Row>
                <Row>
                  <Col>Shipping:</Col>
                  <Col>${shippingPrice}</Col>
                </Row>
                <Row>
                  <Col>Tax:</Col>
                  <Col>${taxPrice}</Col>
                </Row>
                <Row>
                  <Col>Total:</Col>
                  <Col>${totalPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  type="button"
                  className="btn-block"
                  disabled={cartItems.length === 0}
                  onClick={placeOrderHandler}
                >
                  Check Out
                </Button>
                {isLoading && <Loader />}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default PlaceOrderScreen;
