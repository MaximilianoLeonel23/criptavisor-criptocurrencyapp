import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav_welcome">
        <span className="nav_spark"></span>
        {/* Configurar el nombre del usuario */}
        <Link to="/"> Bienvenido, M </Link>
      </div>
      <div className="nav_menu">
        <ul className="nav_list">
          <li className="nav_item">
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li className="nav_item">
            <NavLink to="/criptomonedas">Criptomonedas</NavLink>
          </li>
          <li className="nav_item">
            <NavLink to="/profile">Perfil</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
