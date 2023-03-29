import React, { useState } from "react";
import { Login } from "./Login.jsx";
import { Register } from "./Register.jsx";
import "../login/Logreg.css";
import Navbar from "../content/Navbar.js";

const Logreg = () => {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (forName) => {
    setCurrentForm(forName);
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="app">
        {currentForm === "login" ? (
          <Login onFormSwitch={toggleForm} />
        ) : (
          <Register onFormSwitch={toggleForm} />
        )}
      </div>
    </>
  );
};

export default Logreg;
