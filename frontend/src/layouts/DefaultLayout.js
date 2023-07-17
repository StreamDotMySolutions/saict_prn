import { Outlet} from "react-router-dom"
import './style.css'
import TopNavBar from "./TopNavBar";
import Container from 'react-bootstrap/Container';
import Footer from "./Footer";
import Col from 'react-bootstrap/Col';

const DefaultLayout = () => {

  return (
    <>
      <TopNavBar/> 
      <Container fluid className="p-5">
        <hr />
        <Col lg={6} className="mt-3">
          <Outlet />
        </Col>
      </Container>
      <Footer/>
    </>
  );
};

export default DefaultLayout;