import { Navbar, Nav, Container } from "react-bootstrap"

const MyNav = () => (
  <Navbar expand="lg" className="ms-3 mb-3" bg="light" data-bs-theme="light">
    <Container fluid>
      <Navbar.Brand href="#">EpiBooks</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#" className="active">
            Books
          </Nav.Link>
          <Nav.Link href="#">Links</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default MyNav
