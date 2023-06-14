import { Outlet, Link } from "react-router-dom";
import { useStore } from "../Helpers/Store";

const Layout1 = () => {

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
      <nav>
        <ul>
         { isLoggedIn === true ? 
         <>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/my_account">My Account</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>

            <li>
              <Link to="/clients">Form - Dropdown</Link>
            </li>

            <li>
              <Link onClick={handleLogout} to="/home">Logout</Link>
            </li>
          </>

         : 

          <>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
          </>
        }
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout1;