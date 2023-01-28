import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login_container">
      <div className="login_title">
        <h1>
          Inicia <span>sesión</span>
        </h1>
      </div>
      <div className="form_container">
        <form className="form">
          <div className="input_container">
            <label for="email">Correo electrónico</label>
            <input type="email" name="email" placeholder="Ingresa tu correo" />
          </div>
          <div className="input_container">
            <label for="password">Contraseña</label>
            <input
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
            <Link className="registrate_btn">Registrate</Link>
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
