import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login_container">
      <div className="login_title">
        <h1>Cripto Mews</h1>
      </div>
      <div className="form_container">
        <form className="form">
          <div className="input_container">
            <label htmlFor="email">Correo electrónico</label>
            <input type="email" name="email" />
          </div>
          <div className="input_container">
            <label htmlFor="password">Contraseña</label>
            <input type="password" name="password" />
          </div>
          <div className="input_container">
            <input type="submit" name="submit" value="Inicia sesión" />
          </div>
          <div className="form_details">
            <Link to="/">¿No recuerdas tu contraseña?</Link>
            <Link to="/">
              ¿Eres nuevo o nueva? Crea tu cuenta gratis y enterate de todas las
              novedades en criptomonedas
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login
