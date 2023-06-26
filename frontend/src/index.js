import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProtectedRoute from "./Helpers/ProtectedRoute"

/** Layouts */
import AdminLayout from "./Layouts/Admin"

/** Error */
import Error404 from "./Pages/Error404"

/** Pages - PUBLIC */
import Home from "./Pages/Home"
import Blogs from "./Pages/Blogs"
import Login from "./Pages/Login"
import Contact from "./Pages/Contact"

/** Auth */
import SignIn from "./Pages/SignIn"

/** Users Management - ADMIN */
import UsersIndex from "./Pages/Users"

/** Pages - PRIVATE */
import Dashboard from "./Pages/Dashboard"
import MyAccount from "./Pages/MyAccount"
import Client from "./Pages/Client"

/** Profile */
import ProfileShow from "./Pages/Profile/show"
import ProfileEdit from "./Pages/Profile/edit"

/** Prop Drilling Demo */
import PropDrilling from "./Pages/PropDrilling/Page"
import Zustand from "./Pages/PropDrilling/Zustand"
import Objects from "./Pages/PropDrilling/Objects"

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
