import { useAuthContext } from "../../contexts/authContext";
import { useEffect, useState } from "react";

const Profile = () => {
  const { userAuth, setUserAuth } = useAuthContext();
  const { userProfile, setUserProfile} = useState()
  useEffect(() => {
    fetch(`https://dummyjson.com/users/filter?key=id&value=${userAuth.id}`)
      .then((res) => res.json())
      .then((data )=> {
        setUserProfile(data.data)
        console.log(data);
      }).catch(error => console.log(error));
  }, []);
  return (
    <>
      <h1 className="profile_title">
        Perfil de <br />
        <b className="cripto_name">{userAuth.firstName}</b>
      </h1>
      <div className="profile_page">
        <div className="profile_container">
          <div className="profile_img_container">
            <img src={userAuth.image} alt={userAuth.username}></img>
          </div>
          <div className="profile_info_container">
            <h4>{userAuth.firstName + " " + userAuth.lastName}</h4>
            <p>
              <b>Usuario: </b> {userAuth.username}
            </p>
            <p>
              <b>Email: </b>
              {userAuth.email}
            </p>
            {/* <p><b>Teléfono: </b> {userAuth.phone}</p>
            <p>
              <b>Dirección: </b> {userAuth.address.address}, {userAuth.address.city}
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
