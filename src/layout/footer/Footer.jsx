import { Link } from "react-router";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <Link to="/corazon/presion-alta">Presión alta</Link>
          <Link to="/heart/insuficiencia-cardiaca">Insuficiencia Cardíaca</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;