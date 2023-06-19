import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Steps = ({ stepInfo }) => {
  const { step, link, title } = stepInfo;
  return (
    <Nav.Item>
      {step ? (
        <LinkContainer to={link}>
          <Nav.Link>{title}</Nav.Link>
        </LinkContainer>
      ) : (
        <Nav.Link disabled>{title}</Nav.Link>
      )}
    </Nav.Item>
  );
};
export default Steps;
