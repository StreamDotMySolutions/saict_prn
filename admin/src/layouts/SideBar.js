import { NavLink, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useProfileStore from '../pages/Profile/utils/Store'
import avatar from '../pages/Profile/img/avatar.webp'
import { useAuthStore } from "../stores/AuthStore"
import HandleLogout from '../libs/Logout'

const SideBar = () => {

    const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn) // set state
    const profile = useProfileStore()
    const currDate = {
        show : new Date().toLocaleString(),
    }

    const logout = () => {
        console.log('loggging out')
        HandleLogout()
        setIsLoggedIn(false)
    }

    return (
        
    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{'height':'100vh', 'width': '280px'}}>
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
    <span className="fs-4">CMS Administration</span>
    </a>

    <span style={{'color' : 'green'}}><small>{currDate.show}</small></span>
    <hr />
    <ul className="nav nav-pills flex-column mb-auto">

        <li>
            <NavLink className="nav-link text-white" to="/dashboard"  ><FontAwesomeIcon icon="fas fa-dashboard" /> Dashboard </NavLink>
        </li>

        <li>
            <NavLink className="nav-link text-white"  to="/blogs"  ><FontAwesomeIcon icon="fas fa-book" /> Contents </NavLink>
        </li>

        <li>
            <NavLink className="nav-link text-white"  to="/users"  ><FontAwesomeIcon icon="fas fa-users" /> Users </NavLink>
        </li>
   
    </ul>
    <hr />
    <div className="dropdown">
    <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <img src={ profile.avatar ? profile.avatar : avatar } alt="" width="32" height="32" className="rounded-circle me-2" />
        <strong>Webmaster</strong>
    </a>
    <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
        <li><NavLink className="dropdown-item" to="/profile"><FontAwesomeIcon icon="fas fa-lock" /> My Account</NavLink></li>
        <li><hr className="dropdown-divider" /></li>
        <li><a href="#" className='dropdown-item' onClick={logout}><FontAwesomeIcon icon="fas fa-sign-out" /> Log Out</a></li>
        {/* <Link className="dropdown-item"  onClick={props.handleLogout}><FontAwesomeIcon icon="fas fa-sign-out" /> Logout </Link> */}
    </ul>
    </div>
</div>
    )
}

export default SideBar