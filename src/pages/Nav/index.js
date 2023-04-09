import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarComponent() {
  return (


    <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: '#222831' }} variant="dark">
      <Container>
        <Navbar.Brand href="/" style={{ fontSize: '1.5em' }} >Brawl Oracle</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/prediction" style={{ fontSize: '1.25em' }}>Prediction</Nav.Link>
            <Nav.Link href="/statistics" style={{ fontSize: '1.25em' }}>Statistics</Nav.Link>

          </Nav>
          <Nav>
            <Nav.Link href="/about" style={{ fontSize: '1.25em' }}>About us</Nav.Link>
            <Nav.Link eventKey={1} href="/contact" style={{ fontSize: '1.25em' }}>
              Contact us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;