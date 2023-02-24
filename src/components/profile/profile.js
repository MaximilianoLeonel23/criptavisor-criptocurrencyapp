import { useAuthContext } from "../../contexts/authContext";
import { useEffect, useState } from "react";

const Profile = () => {
  const { userAuth, setUserAuth } = useAuthContext();
  const [userProfile, setUserProfile] = useState({});

  window.addEventListener("load", () => {
    if (localStorage.getItem("dataUser")) {
      setUserAuth(JSON.parse(localStorage.getItem("dataUser")));
    }
  });

  useEffect(() => {
    fetch(`https://dummyjson.com/users/filter?key=id&value=${userAuth.id}`)
      .then((res) => res.json())
      .then((data) => {
        setUserProfile(data.users[0]);
      })
      .catch((error) => console.log(error));
  });

  return (
    <>
      <h1 className="profile_title">
        Perfil de <br />
        <b className="cripto_name">{userProfile?.firstName}</b>
      </h1>
      <div className="profile_page">
        <div className="profile_container">
          <div className="profile_img_container">
            <img src={userProfile?.image} alt={userProfile?.username}></img>
          </div>
          <div className="profile_info_container">
            <h4>{userProfile?.firstName + " " + userProfile?.lastName}</h4>
            <p>
              <b>Usuario: </b> {userProfile?.username}
            </p>
            <p>
              <b>Email: </b>
              {userProfile?.email}
            </p>
            <p>
              <b>Teléfono: </b> {userProfile?.phone}
            </p>
            <p>
              <b>Dirección: </b> {userProfile?.address?.address}, <br />{" "}
              {userProfile?.address?.city}
            </p>
          </div>
        </div>
        <div className="profile_criptomonedas">
          <h3>No se ha realizado ningun seguimiento de criptomonedas</h3>
        </div>
      </div>
    </>
  );
};

export default Profile;
