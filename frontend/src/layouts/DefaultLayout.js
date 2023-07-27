import { Outlet} from "react-router-dom"
import './style.css'
import TopNavBar from "./TopNavBar";
import Container from 'react-bootstrap/Container';
import Footer from "./Footer";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const DefaultLayout = () => {

  const mode =  (process.env.REACT_APP_MODE)

  return (
    <>
    { mode == 'production' ?
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
          :
          <>
            <Container>
              <div className="d-flex justify-content-center">
                  <img src="img/maintainance.jpg" className="img-fluid" width="50%" title="maitainance" />
              </div>
              <Row>
                <h2 className="text-center mt-3">Laman Web Dalam Penyelengaraan</h2>
              </Row>
            </Container>
          </>
      }
    </>
  ); // return JSX
};

export default DefaultLayout;