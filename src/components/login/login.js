import { useState } from "react";

import { Link, Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const navigation = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  
  /* Testing data 
  username: kminchelle
  password: 0lelplR
  */

  /* Los datos devueltos deben pasar a un useContext 
  como objeto para utilizarlos en el profile, home y otros lugares*/

  const submit = function (e) {
    e.preventDefault();
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUser(data);
        console.log(user);

        localStorage.setItem("tokenUser", data.token);
        navigation("/");
      })

      .catch((error) => console.log(error));
  };
  if (localStorage.getItem("tokenUser")) {
    return <Navigate to="/" /> 
  }
  

  return (
    <div className="login_container">
      <div className="login_title">
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
              placeholder="Ingresa tu usuario"
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
              placeholder="Ingresa tu contraseña"
            />
          </div>
          <div className="form_action-btn">
            <input
              type="submit"
              name="submit"
              value="Inicia sesión"
              className=" input_submit"
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
