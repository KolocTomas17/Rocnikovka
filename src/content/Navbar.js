import React, { useState } from "react";
import "../content/Navbar.css";
import  Logo  from "../img/logo.png"
import { Link, useMatch, useResolvedPath } from "react-router-dom";


function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="navbar py-4 navbar is-fixed-top">
       <a className="navbar-item" href="#">
            <Link to="/">
              <ul>
                <img
                  className="image"
                  src={Logo}
                  alt=""
                  width="110px"
                  href="*"
                />
              </ul>
            </Link>
          </a>
      <ul className={active}>
        <div className="navbar-start">
          <ul className="navbar-item polozky">
              <CustomLink to="/Koupit">Koupit</CustomLink>
            </ul>
            <ul className="navbar-item">
              <CustomLink to="/Financovani">Financování</CustomLink>
            </ul>
            <ul className="navbar-item">
              <CustomLink to="/Kariera">Kariéra</CustomLink>
            </ul>

            <ul className="navbar-item">
              <CustomLink to="/Onas">O nás</CustomLink>
            </ul>
          </div>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
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

export default Navbar;