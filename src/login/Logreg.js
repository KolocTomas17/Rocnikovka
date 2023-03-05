import React, { useState } from "react";
import { Login } from "./Login.jsx";
import { Register } from "./Register.jsx";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import  "../login/Logreg.css";
import Navbar from "../content/Navbar.js";





const Logreg = () => {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (forName) => {
    setCurrentForm(forName);
  }

  return (
    <>
    <Navbar></Navbar>
    <div className="app" >
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>


      </>

      

  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Logreg;