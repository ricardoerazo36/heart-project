import { NavLink } from "react-router-dom";

import "./Footer.css";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="py-14 pt-0">
      <div className="mt-0 container px-4">
        <hr className="mt-0" />
        <div className="row">
          <div className=" col">
            <h3 className=" fw-medium">HeartCare</h3>
          </div>

          <div className="col">
            <h4>Enfermedades</h4>
            <ul className="list-unstyled d-flex flex-column gap-2 ">
              <li>
                <NavLink
                  to="/enfermedades/arritmia"
                  className="text-decoration-none text-custom-white"
                >
                  Arritmia
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/enfermedades/enfermedadCoronaria"
                  className="text-decoration-none text-custom-white"
                >
                  Enfermedad Coronaria
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/enfermedades/hipertension"
                  className="text-decoration-none text-custom-white"
                >
                  Hipertension arterial
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/enfermedades/insuficienciaCardiaca"
                  className="text-decoration-none text-custom-white"
                >
                  Insuficiencia Cardiaca
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="col">
            <h4>Información</h4>
            <ul className="list-unstyled d-flex flex-column gap-2 ">
              <li>
                <NavLink to="/" className="text-decoration-none text-custom-white">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/sobreNosotros" className="text-decoration-none text-custom-white">
                  Sobre Nosotros
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="col ">
            <h4>Pruebas</h4>
            <ul className="list-unstyled d-flex flex-column gap-2 ">
              <li>
                <NavLink to="/" className="text-decoration-none text-custom-white">
                  Quiz
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="d-flex justify-content-between text-custom-white">
          <p>© 2025 HeartCare</p>
          <div className="d-flex gap-2 ">
            <NavLink to="/" className="text-light">
              <i className="bi bi-instagram fs-10 me-3"></i>
            </NavLink>
            <NavLink to="/" className="text-light">
              <i className="bi bi-facebook fs-10 me-3"></i>
            </NavLink>
            <NavLink to="/" className="text-light">
              <i className="bi bi-twitter fs-10 me-3"></i>
            </NavLink>
            <NavLink to="/" className="text-light">
              <i className="bi bi-linkedin fs-10 me-3"></i>
            </NavLink>
            <NavLink to="/" className="text-light">
              <i className="bi bi-youtube fs-10"></i>
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
