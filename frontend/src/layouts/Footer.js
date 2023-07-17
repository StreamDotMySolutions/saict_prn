import React from "react";

const Footer = () => {
  return (
    <footer className="container py-5">
      <div className="row">
        <div className="col-md-4">
          <p>
            <a href="#" className="text-secondary text-decoration-none">
              Penafian
            </a>
          </p>
          <p>
            <a href="#" className="text-secondary text-decoration-none">
              Polisi Keselamtan
            </a>
          </p>
          <p>
            <a href="#" className="text-secondary text-decoration-none">
              Polisi Privasi
            </a>
          </p>
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
            Hak Cipta Terpelihara &copy; 2023 Seksyen Aplikasi ICT, Jabatan Penyiaran Malaysia.
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
