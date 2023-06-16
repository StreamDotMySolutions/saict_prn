import { Outlet } from "react-router-dom"
import SideBar from "./SideBar"
import { useStore } from "../Helpers/Store"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const AdminLayout = () => {

  const isLoggedIn = useStore( (state) => state.isLoggedIn ) // get state
  const setIsLoggedIn = useStore((state) => state.setIsLoggedIn) // set state

  const handleLogout = () => {
    // set store isLoggedIn to false
    setIsLoggedIn(false)

    // tell the server to destroy the token
    const url = 'http://localhost:8000/api/logout'
    const options = {
        method: 'get',
    }

    fetch(url,options)
    .then(response => {
        // response.ok status 200-299
        if(response.ok) {
            return response.json()
        } 
        return Promise.reject(response); // reject the promise
    })
    .then(json => {

    })
    .catch( error =>{
        console.log(error)
    })

    // delete token from localstorage
    localStorage.removeItem('token');
  }

  return (
    <>
    <main>
        <SideBar handleLogout={handleLogout} />
        <div className="container-fluid">
            <Outlet />
        </div>
    </main>       
    </>
  )
};

export default AdminLayout;