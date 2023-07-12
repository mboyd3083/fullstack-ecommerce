import { Nav } from "react-bootstrap";
import Steps from "./Steps";

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  const steps = [
    {
      step: step1,
      link: "/login",
      title: "Sign In",
    },
    {
      step: step2,
      link: "/shipping",
      title: "Shipping",
    },
    {
      step: step3,
      link: "/placeorder",
      title: "Confirm Order",
    },
    {
      step: step4,
      link: "/",
      title: "Payment",
    },
  ];

  return (
    <Nav className="justify-content-center mb-4">
      {steps.map((step, index) => (
        <Steps key={index} stepInfo={step} />
      ))}
    </Nav>
  );
};
export default CheckoutSteps;
