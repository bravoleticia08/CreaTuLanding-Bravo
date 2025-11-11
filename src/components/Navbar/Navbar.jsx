import { NavLink } from "react-router";
import Carrito from "../CartWidget/CartWidget";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <NavLink to="/"><img src="/src/assets/merida-logo.jpg" alt="Logo del negocio" /></NavLink>
      </div>

      <nav className="navbar-links">
        <ul>
          <li><NavLink to="/">Inicio</NavLink></li>
          <li><NavLink to="/sucursales">Sucursales</NavLink></li>
          <li><NavLink to="/contact">Contactate</NavLink></li>
        </ul>
      </nav>

      <div className="navbar-cart">
        <Carrito />
      </div>
    </header>
  );
}

export default Navbar;
