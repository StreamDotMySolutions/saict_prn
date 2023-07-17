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
      <Container fluid className="p-1 mt-5">
        <hr />
        <Col lg={12}>
          <Outlet />
        </Col>
        <Footer/>
      </Container>
     
    </>
  );
};

export default DefaultLayout;