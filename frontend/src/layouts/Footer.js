import React from "react";
import { NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

const Footer = () => {
  return (
    <footer className="container py-5">
      <div className="row">
        <div className="col-md-4">
          <ul className="list-unstyled">
            <li>
              <Nav.Link as={NavLink} to="/keselamatan" className="text-secondary text-decoration-none">
                Dasar Keselamatan
              </Nav.Link>
            </li>
            <li>
              <Nav.Link as={NavLink} to="/penafian" className="text-secondary text-decoration-none">
                Penafian
              </Nav.Link>
            </li>
            <li>
              <Nav.Link as={NavLink} to="/privasi" className="text-secondary text-decoration-none">
                Dasar Privasi
              </Nav.Link>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <p>
            Radio Televisyen Malaysia <br />
            Angkasapuri Kota Media <br />
            50614 Kuala Lumpur <br />
            Tel: 03 - 2282 5333 <br />
            Faks: 03 - 2284 7591
          </p>
        </div>
        <div className="col-md-4">
          <p>
            Hak Cipta Terpelihara &copy; 2023 Seksyen Aplikasi ICT, Jabatan Penyiaran Malaysia
          </p>
          <p className="text-end">
            <a href="#" className="text-secondary text-decoration-none">
              Back to top
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
