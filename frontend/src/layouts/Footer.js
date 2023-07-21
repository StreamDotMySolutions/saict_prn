import React from "react";
import { NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Col from 'react-bootstrap/Col';


const Footer = () => {
  return (
    <footer className="container py-6">
      <hr className="featurette-divider" />
      <div className="social-media-container">
        <Nav.Link as={NavLink} to="https://www.tiktok.com/@radiotelevisyenmalaysia?is_from_webapp=1&sender_device=pc">
          <FontAwesomeIcon icon={faTiktok} className="social-media-icon tiktok-icon"/>
        </Nav.Link>
        <Nav.Link as={NavLink} to="https://www.facebook.com/RadioTelevisyenMalaysia/?ref=embed_page">
          <FontAwesomeIcon icon={faFacebook} className="social-media-icon facebook-icon"/>
        </Nav.Link>
        <Nav.Link as={NavLink} to="https://www.youtube.com/channel/UCjUxj4cyy_F0tVCT8WfmdZQ" >
          <FontAwesomeIcon icon={faYoutube} className="social-media-icon youtube-icon"/>
        </Nav.Link>
        <Nav.Link as={NavLink} to="https://twitter.com/beritartm?lang=en">
          <FontAwesomeIcon icon={faTwitter} className="social-media-icon twitter-icon"/>
        </Nav.Link>
        <Nav.Link as={NavLink} to="https://www.instagram.com/beritartm/?hl=en">
          <FontAwesomeIcon icon={faInstagram} className="social-media-icon instagram-icon"/>
        </Nav.Link>
      </div>
      <div className="row mt-3">
        <Col md={4}>
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
        </Col>
        <Col md={4}>
          <p>
            Radio Televisyen Malaysia <br />
            Angkasapuri Kota Media <br />
            50614 Kuala Lumpur <br />
            Tel: 03 - 2282 5333 <br />
            Faks: 03 - 2284 7591
          </p>
        </Col>
        <Col md={4}>
          <p>
            Hak Cipta Terpelihara &copy; 2023 Seksyen Aplikasi ICT, Jabatan Penyiaran Malaysia
          </p>
          <p className="text-end">
            <a href="#" className="text-secondary text-decoration-none">
              Back to top
            </a>
          </p>
        </Col>
      </div>
    </footer>
  );
};

export default Footer;
