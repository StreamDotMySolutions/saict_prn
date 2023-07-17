import { Outlet} from "react-router-dom"
import './style.css'
import SideBar from "./SideBar"
import TopNavBar from "./TopNavBar";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


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