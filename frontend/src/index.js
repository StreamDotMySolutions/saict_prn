import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProtectedRoute from "./libs/ProtectedRoute"

/** Layouts */
import AdminLayout from "./layouts/Admin"

/** Error */
import Error404 from "./pages/Error404"

/** Pages - PUBLIC */
import Home from "./pages/Home"
import Blogs from "./pages/Blogs"
import Login from "./pages/Login"
import Contact from "./pages/Contact"

/** Auth */
import SignIn from "./pages/SignIn"

/** Users Management - ADMIN */
import UsersIndex from "./pages/Users"

/** Pages - PRIVATE */
import Dashboard from "./pages/Dashboard"
import MyAccount from "./pages/MyAccount"
import Client from "./pages/Client"

/** Profile */
import ProfileShow from "./pages/Profile/Show"
import ProfileEdit from "./pages/Profile/Edit"

/** Prop Drilling Demo */
import PropDrilling from "./pages/PropDrilling/Page"
import Zustand from "./pages/PropDrilling/Zustand"
import Objects from "./pages/PropDrilling/Objects"

/** Font Awesome **/
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/prop-drilling" element={<PropDrilling />} />
        <Route path="/zustand" element={<Zustand />} />
        <Route path="/objects" element={<Objects />} />
        <Route index element={<Home />} />
        <Route path="*" element={<Error404 />} />
        <Route element={<AdminLayout />}>
          <Route element={<ProtectedRoute  />}>
              <Route path="/users" element={<UsersIndex />} />
              <Route path="/profile" element={<ProfileShow />} />
              <Route path="/profile/edit" element={<ProfileEdit />} />
              <Route path="/clients" element={<Client />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
