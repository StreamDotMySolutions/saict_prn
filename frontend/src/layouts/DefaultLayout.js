import { Outlet} from "react-router-dom"
import './style.css'
import SideBar from "./SideBar"
import NavBar from "./NavBar";

const DefaultLayout = () => {

  return (
    <>
    <main className="bg-light">
        {/* <SideBar/> */}
          
        <div className="container-fluid mt-5 py-4 " style={{'height':'95vh'}} >
        <NavBar/> 
            <div className="card">
   
                <div className="card-body" >
                    <Outlet />
            </div>
            </div>
        </div>
    </main>   
    </>
  )
};

export default DefaultLayout;