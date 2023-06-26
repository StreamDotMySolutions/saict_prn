import { Outlet} from "react-router-dom"
import './style.css'
import SideBar from "./SideBar"

const AdminLayout = () => {

  return (
    <>
    <main className="bg-light">
        <SideBar/>
        <div className="container-fluid py-4"  >
           
            <div className="card " style={{'height':'95vh'}}>
   
                <div className="card-body" >
                    <Outlet />
                </div>
            </div>
        </div>
    </main>   
    </>
  )
};

export default AdminLayout;