import React from "react";
import ReactDOM from "react-dom/client";
import "./css/style.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import Criptomonedas from "./components/criptomonedas/Criptomonedas";
import Home from "./components/home/home";
import Profile from "./components/profile/profile";
import CriptoDetails from "./components/criptomonedas/CriptoDetails";
import Registration from "./components/registration/registration";
import AuthContextProvider from "./contexts/authContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/criptomonedas" element={<App />}>
          <Route index element={<Criptomonedas />} />
          <Route path=":id" element={<CriptoDetails />} />
        </Route>
      </Routes>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </Router>
  </AuthContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
