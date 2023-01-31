const Registration = () => {
  return (
    <div className="registration_container">
      <div className="registration_title">
        <h1>
          Regístrate <span>ahora</span>
        </h1>
      </div>
      <div className="form_container-registration">
        <form className="form-registration">
          <div className="input_container">
            <label htmlFor="name">Nombre</label>
            <input type="text" name="name" />
          </div>
          <div className="input_container">
            <label htmlFor="email">Correo electrónico</label>
            <input type="email" name="email" />
          </div>
          <div className="input_container">
            <label htmlFor="repeat_password">Repite tu contraseña</label>
            <input type="password" name="repeat_password" />
          </div>
          <div className="input_container">
            <label htmlFor="name">Apellido</label>
            <input type="text" name="surname" />
          </div>
          <div className="input_container">
            <label htmlFor="password">Contraseña</label>
            <input type="password" name="password" />
          </div>
          <div className="form_action-btn-registration">
            <input
              type="submit"
              name="registrate"
              value="Regístrate"
              className="input_submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
