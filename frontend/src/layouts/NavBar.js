import { NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavBar = () => {

return (
<>
<nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">PRN #23</a>

    <span className='d-block d-sm-none float-end'>

    </span>

    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li classname="nav-item">
          <NavLink className="nav-link"  to="/kedah"  ><FontAwesomeIcon icon="fas fa-home" /> Home </NavLink>
        </li>            
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown">
            Negeri
          </a>
          <ul id="negeri" className="dropdown-menu">
            <li>
                <NavLink className="dropdown-item"  to="/states/kedah"  ><FontAwesomeIcon icon="fas fa-flag" /> Kedah </NavLink>
            </li>

            <li>
                <NavLink className="dropdown-item"  to="/states/kelantan"  ><FontAwesomeIcon icon="fas fa-flag" /> Kelantan </NavLink>
            </li>

            <li>
                <NavLink className="dropdown-item"  to="/states/selangor"  ><FontAwesomeIcon icon="fas fa-flag" /> Selangor </NavLink>
            </li>

            <li>
                <NavLink className="dropdown-item"  to="/states/pulau-pinang"  ><FontAwesomeIcon icon="fas fa-flag" /> Pulau Pinang </NavLink>
            </li>

            <li>
                <NavLink className="dropdown-item"  to="/states/negeri-sembilan"  ><FontAwesomeIcon icon="fas fa-flag" /> Negeri Sembilan </NavLink>
            </li>

            <li>
                <NavLink className="dropdown-item"  to="/states/terengganu"  ><FontAwesomeIcon icon="fas fa-flag" /> Terengganu    </NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

</>

)}

export default NavBar