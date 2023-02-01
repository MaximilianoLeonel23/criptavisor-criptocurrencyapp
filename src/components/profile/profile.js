import { useContext } from "react";
import { userContext } from "../../App";

const Profile = () => {
  const user = useContext(userContext);

  return (
    <>
      <h1 className="profile_title">
        {" "}
        Perfil de <br />
        <b className="cripto_name">{user.firstName}</b>
      </h1>
      <div className="profile_page">
        <div className="profile_container">
          <div className="profile_img_container">
            <img src={user.image} alt={user.firstName}></img>
          </div>
          <div className="profile_info_container">
            <h4>{user.firstName + " " + user.lastName}</h4>
            <p><b>Usuario: </b> {user.username}</p>
            <p><b>Email: </b>{user.email}</p>
            <p><b>Teléfono: </b> {user.phone}</p>
            <p>
              <b>Dirección: </b> {user.address.address}, {user.address.city}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
