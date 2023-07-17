import { Outlet} from "react-router-dom"
import './style.css'
import TopNavBar from "./TopNavBar";
import Container from 'react-bootstrap/Container';
import Footer from "./Footer";

const DefaultLayout = () => {

  return (
    <>
      <TopNavBar/> 
      <Container fluid className="p-5">
        <hr />
        <Outlet />
      </Container>
      <Footer/>
    </>
  );
};

export default DefaultLayout;