import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useAuthContext } from "../../contexts/authContext";
const Nav = () => {
  const [token, setToken] = useState(false);
  const { userAuth, setUserAuth } = useAuthContext();

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
        {localStorage.getItem("tokenUser") ? (
          <Link to="/">
            {"Bienvenid" +
              (userAuth.gender === "male" ? "o" : "a") +
              ", " +
              userAuth.firstName}
          </Link>
        ) : (
          <Link to="/">Bienvenido</Link>
        )}

        {/* { localStorage.getItem("tokenUser") ? 
            (user.gender === "male" ? "Bienvenido" : "Bienvenida",{" "}
            {user.firstName}{" "}) : "Bienvenido" */}
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
          <li className="nav_item">
            <NavLink
              to={localStorage.getItem("tokenUser") ? "/profile" : "/login"}
            >
              Perfil
            </NavLink>
          </li>
          {/* Iniciar o cerrar sesión */}
          {localStorage.getItem("tokenUser") ? (
            <li className="nav_item">
              <a
                href="/"
                onClick={() => {
                  if (localStorage.getItem("tokenUser")) {
                    localStorage.removeItem("tokenUser");
                    setToken(false);
                  }
                }}
              >
                Cerrar sesión
              </a>
            </li>
          ) : (
            <NavLink to="/login">
              <button
                className="login_btn
              nav_btn"
              >
                Inicia sesión
              </button>
            </NavLink>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
