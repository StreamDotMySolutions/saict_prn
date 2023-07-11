import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink} from 'react-router-dom'


function TopNavbar() {
  return (
    <Navbar fixed="top"  bg="light" data-bs-theme="light">
      <Container fluid className="px-5">
        <Navbar.Brand href="/"><h3>#prn2023</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <NavDropdown title="Negeri" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/selangor">Selangor</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/kedah">Kedah</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/kelantan">Kelantan</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/pulau-pinang">Pulau Pinang</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/terengganu">Terengganu</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/negeri-sembilan">Negeri Sembilan</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default TopNavbar;