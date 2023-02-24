import { Link } from "react-router-dom";

const Registration = () => {
  // const overlay = document.getElementById("registration_overlay");
  // const modal = document.getElementById("registration_modal");
  // const close = document.getElementById("closeModal");

  const handleRegister = (e) => {
    e.preventDefault();

    const register = {
      firstName: e.target.name.value,
      lastName: e.target.surname.value,
      password: e.target.password.value,
      email: e.target.email.value,
    };

    // Enviar data
    fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(register),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));

    // Limpiar formulario
    e.target.name.value = "";
    e.target.surname.value = "";
    e.target.password.value = "";
    e.target.email.value = "";
    e.target.repeat_password.value = "";

    // overlay.style.display = "block";
    // modal.style.display = "block";
  };

  return (
    <div className="registration_container">
      <div
        className="registration_overlay"
        id="registration_overlay"
        // onClick={() => {
        //   overlay.style.display = "none";
        //   modal.style.display = "none";
        // }}
      ></div>
      {/* <div className="registration_modal" id="registration_modal">
        <div className="registration_pop-up">
          <p className="registration_success">Registro exitoso</p>
          <h4>¡Bienvenido/a a Criptavisor!</h4>
          <p>
            En unos minutos recibirás un email con un enlace para verificar tu
            cuenta y comenzar a criptovisar
          </p>
          <svg
            id="closeModal"
            // onClick={() => {
            //   overlay.style.display = "none";
            //   modal.style.display = "none";
            // }}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div> */}
      <div className="registration_title">
        <Link to="/login">
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
          Regístrate <span>ahora</span>
        </h1>
      </div>
      <div className="form_container-registration">
        <form className="form-registration" onSubmit={handleRegister}>
          <div className="input_container">
            <label htmlFor="name">Nombre</label>
            <input type="text" name="name" />
          </div>
          <div className="input_container">
            <label htmlFor="email">Correo electrónico</label>
            <input type="email" name="email" required />
          </div>
          <div className="input_container">
            <label htmlFor="repeat_password">Repite tu contraseña</label>
            <input type="password" name="repeat_password" />
          </div>
          <div className="input_container">
            <label htmlFor="surname">Apellido</label>
            <input type="text" name="surname" />
          </div>
          <div className="input_container">
            <label htmlFor="password">Contraseña</label>
            <input type="password" name="password" required />
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
