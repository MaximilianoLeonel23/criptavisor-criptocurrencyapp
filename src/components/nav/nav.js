import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Nav = () => {
  const [login, setLogin] = useState(false);

  return (
    <nav className="nav">
      <div className="nav_welcome">
        <svg
          width="25"
          height="25"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 0L21.6569 10.3431L32 16L21.6569 21.6569L16 32L10.3431 21.6569L0 16L10.3431 10.3431L16 0Z"
            fill="#F2921D"
          />
        </svg>

        {/* Configurar el nombre del usuario */}
        <Link to="/"> Bienvenido, Max </Link>
      </div>
      <div className="nav_menu">
        <ul className="nav_list">
          <li className="nav_item activePage">
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li className="nav_item">
            <NavLink to="/criptomonedas">Criptomonedas</NavLink>
          </li>

          {/* Decidir si mostrar un boton de login o perfil según estado */}

          {login ? (
            <li className="nav_item">
              <NavLink to="/profile">Perfil</NavLink>
            </li>
          ) : (
            <button
              className="login_btn
              nav_btn"
              onClick={(e) => {
                setLogin(true);
              }}
            >
              <NavLink to="/login">Inicia sesión</NavLink>
            </button>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
