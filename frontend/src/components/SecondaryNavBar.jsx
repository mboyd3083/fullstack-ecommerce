import { Navbar, Nav, Container} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const SecondaryNavBar = () => {
  const navLink = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Products",
      path: "/products",
    },
  ];
  return (
    <Navbar variant="light" className="secondary_nav_container">
      <Container>
        <Nav className="me-auto">
          {navLink.map((link, index) => (
            <LinkContainer to={link.path} key={index}>
              <Nav.Link>{link.name}</Nav.Link>
            </LinkContainer>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
};
export default SecondaryNavBar;
