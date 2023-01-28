import { useState } from "react";
import { useEffect } from "react";

const Profile = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    fetch("https://randomuser.me/api")
      .then((response) => response.json())
      .then((data) => console.log(data.results[0].name));
  });

  return (
    <h1>
      Esta es la página de perfil. Aqui se puede configurar los datos del perfil
      del usuario
    </h1>
  );
};

export default Profile;
