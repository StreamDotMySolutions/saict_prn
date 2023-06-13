import { Outlet, Link } from "react-router-dom";

const Layout2 = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">2Home</Link>
          </li>
          <li>
            <Link to="/blogs">2Blogs</Link>
          </li>
          <li>
            <Link to="/contact">2Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout2;