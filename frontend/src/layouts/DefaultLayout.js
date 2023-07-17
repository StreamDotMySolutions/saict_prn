import { Outlet} from "react-router-dom"
import './style.css'
import TopNavBar from "./TopNavBar";
import Container from 'react-bootstrap/Container';

const DefaultLayout = () => {

  return (
    <>
      <TopNavBar/> 
      <Container fluid className="p-5">
        <hr />
        <Outlet />
      </Container>
    </>
  );
};

export default DefaultLayout;