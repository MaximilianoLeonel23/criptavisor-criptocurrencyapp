import Nav from "./components/nav/nav";
import { Outlet } from "react-router-dom";
import React, { useState, useEffect } from "react";

export const userContext = React.createContext();

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch("https://dummyjson.com/users/19")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <userContext.Provider value={user}>
      <div className="app_container">
        <Nav />
        <Outlet />
      </div>
    </userContext.Provider>
  );
}

export default App;
