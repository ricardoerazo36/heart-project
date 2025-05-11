import { NavLink } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Header.css";

const Header = () => {
  return (
    <nav
<<<<<<< HEAD
      style={{ backgroundColor: "#225DCA", position :'fixed', width: '100%', zIndex: 1000  }}
=======
      style={{ backgroundColor: "#225DCA", position: 'fixed', zIndex: 1000, width: '100%', top: 0, left: 0 }}
>>>>>>> bc582cd0a55dab98b29f9797252955b1dd93d2c2
      className="navbar navbar-expand-md px-3"
    >
      <div className="container-fluid">
        <NavLink
          to="/"
          className="navbar-brand d-flex align-items-center gap-3"
        >
          <img
            src="/imagenes/headerLogo.png"
            alt="Logo Heart Care"
            className="custom-img"
          />
          <span className="fw-normal text-custom-white">Heart Care</span>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav gap-3">
            <li className="nav-item">
              <NavLink to="/" className="nav-link text-custom-white">
                Inicio
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle text-custom-white"
                data-bs-toggle="dropdown"
                style={{ cursor: "pointer", fontWeight: "500" }}
              >
                Enfermedades
              </span>

              <ul className="dropdown-menu dropdown-menu-custom ">
                <li>
                  <NavLink
                    to="/enfermedades/arritmia"
                    className="dropdown-item"
                  >
                    <span className="dropdown-text text-custom-white">Arritmia</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/enfermedades/enfermedadCoronaria"
                    className="dropdown-item"
                  >
                    <span className="dropdown-text text-custom-white">Enfermedad Coronaria</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/enfermedades/hipertension"
                    className="dropdown-item"
                  >
                    <span className="dropdown-text text-custom-white">Hipertension Arterial</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/enfermedades/insuficienciaCardiaca" className="dropdown-item">
                    <span className="dropdown-text text-custom-white">Insuficiencia Cardiaca</span>
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item ">
              <NavLink to="/quiz" className="nav-link text-custom-white">
                Quiz
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/nosotros" className="nav-link text-custom-white">
                Sobre nosotros
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/login" className="btn btn-custom">
                Iniciar Sesión
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
