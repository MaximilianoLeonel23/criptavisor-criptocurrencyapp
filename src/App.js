import Nav from "./components/nav/nav";
import { Outlet } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useAuthContext } from "./contexts/authContext";

function App() {
  const { userAuth, setUserAuth } = useAuthContext();
  window.addEventListener("load", () => {
    if (localStorage.getItem("dataUser")) {
      setUserAuth(JSON.parse(localStorage.getItem("dataUser")))
    }
  })

  return (
    
      <div className="app_container">
        <Nav />
        <Outlet />
      </div>
   
  );
}

export default App;
