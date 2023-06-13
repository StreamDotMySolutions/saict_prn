import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import ProtectedRoute from "./Helpers/ProtectedRoute"

/** Layouts */
import Layout1 from "./Layouts/Layout1";
import Layout2 from "./Layouts/Layout2";

/** Pages */
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import Login from "./Pages/Login";
import Protected from "./Pages/Protected";
import Contact from "./Pages/Contact";



export default function App() {
  const [user, setUser] = useState(false); // simulate user object
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<Layout1 />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Home />} />

          <Route element={<ProtectedRoute user={user} />}>
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/protected" element={<Protected />} />
          </Route>
        </Route>

        <Route element={<Layout2 />}>
          <Route path="contact2" element={<Contact />} />
          <Route path="login2" element={<Login />} />
        </Route>


      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);