import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, useLocation} from 'react-router-dom'




function TopNavbar() {

  const location = useLocation();

  const flag = (stateName) => {
    return (
      <img src={'/img/flags/' + stateName + '.png' }  className="img-fluid" width="30px" />
      )
  }

  return (
    <Navbar fixed="top"  bg="light" data-bs-theme="light">
      <Container className="justify-content-center">
        <Navbar.Brand as={NavLink} to="/"><h3>#mypru15</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav  className="ms-auto">
          
            <NavDropdown title="Negeri" id="basic-nav-dropdown">
              <NavDropdown.Item style={{width:'180px'}} as={NavLink} to="/selangor">{flag('selangor')} Selangor</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/kedah">{flag('Kedah')} Kedah</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/kelantan">{flag('Kelantan')} Kelantan</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/pulau-pinang">{flag('PP')} Pulau Pinang</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/terengganu">{flag('Terengganu')} Terengganu</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/negeri-sembilan">{flag('NS')} Negeri Sembilan</NavDropdown.Item>
            </NavDropdown>

            <Nav activeKey={location.pathname}>
              <Nav.Link as={NavLink} to="/dashboard">Dashboard</Nav.Link>
            </Nav>
            
          </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default TopNavbar;