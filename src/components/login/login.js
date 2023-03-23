import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/authContext";
import { useState } from "react";
const Login = () => {
  const navigation = useNavigate();
  const { userAuth, setUserAuth } = useAuthContext();

  /* Testing data 
  ---
  username: kminchelle
  password: 0lelplR
  ---
  "username": "atuny0",
  "password": "9uQFF1Lh",
  ---
  "username": "jtreleven5",
  "password": "zY1nE46Zm",
  */
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const submit = function (e) {
    e.preventDefault();
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.id) {
          setUserAuth(data);
          localStorage.setItem("tokenUser", data.token);
          localStorage.setItem("dataUser", JSON.stringify(data));
        }
      })

      .catch((error) => {
        console.log(error);
      });
  };

  if (localStorage.getItem("tokenUser")) {
    return <Navigate to="/" />;
  }

  return (
    <div className="login_container">
      <div className="login_title">
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-5 -5 24 24"
            width="36"
            fill="currentColor"
          >
            <path d="M3.414 7.657l3.95 3.95A1 1 0 0 1 5.95 13.02L.293 7.364a.997.997 0 0 1 0-1.414L5.95.293a1 1 0 1 1 1.414 1.414l-3.95 3.95H13a1 1 0 0 1 0 2H3.414z"></path>
          </svg>
        </Link>
        <h1>
          Inicia <span>sesión</span>
        </h1>
      </div>
      <div className="form_container">
        <form onSubmit={submit} className="form">
          <div className="input_container">
            <label htmlFor="username">Usuario</label>
            <input
              onChange={(e) => {
                setUser({
                  ...user,
                  username: e.target.value,
                });
              }}
              type="text"
              name="username"
              placeholder="Ingresa tu usuario (kminchelle)"
            />
          </div>
          <div className="input_container">
            <label htmlFor="password">Contraseña</label>
            <input
              onChange={(e) => {
                setUser({
                  ...user,
                  password: e.target.value,
                });
              }}
              type="password"
              name="password"
              placeholder="Ingresa tu contraseña (0lelplR)"
            />
          </div>
          <div className="form_action-btn">
            <input
              type="submit"
              name="submit"
              value="Inicia sesión"
              className="input_submit"
            />
            <Link to="/registration" className="registrate_btn">
              Registrate
            </Link>
          </div>
          <div className="form_details">
            <Link to="/">¿No recuerdas tu contraseña?</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
