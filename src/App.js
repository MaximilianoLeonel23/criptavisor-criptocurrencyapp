import Nav from "./components/nav/nav";
import { Outlet } from "react-router-dom";
import React, { useState, useEffect } from "react";


function App() {
  
  return (
    
      <div className="app_container">
        <Nav />
        <Outlet />
      </div>
   
  );
}

export default App;
