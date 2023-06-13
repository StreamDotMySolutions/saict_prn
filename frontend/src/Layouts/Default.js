import {Outlet,Link} from 'react-router-dom'

const Layout = () => {
    <>
    <h2>Header</h2>
    <nav>
        <ul>
            <li>
                <Link to="/home">Home</Link>
            </li>
            <li>
                <Link to="/blogs">Blogs</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
        </ul>
    </nav>
    <Outlet />
    <h2>Footer</h2>
    </>
}
export default Layout