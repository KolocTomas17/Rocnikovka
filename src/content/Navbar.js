import React, { useState } from "react";
import "../content/Navbar.css";
import  Logo  from "../img/logo.png"
import { Link } from "react-router-dom";


function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // zobrazi burger
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="navbar py-4 navbar is-fixed-top">
       <div className="navbar-item" href="#">
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
          </div>
      <ul className={active}>
        <div className="navbar-start">
          <ul className="navbar-item ">
              <Link to="/Koupit" className="polozky">Koupit</Link>
            </ul>
            <ul className="navbar-item">
              <Link to="/Financovani" className="polozky">Financování</Link>
            </ul>
            <ul className="navbar-item">
              <Link to="/Kariera" className="polozky">Kariéra</Link>
            </ul>

            <ul className="navbar-item">
              <Link to="/Onas" className="polozky">O nás</Link>
            </ul>

            <ul className="navbar-item ">
            <Link to="/Prihlaseni" className="polozky polozka">Přihlásit se</Link>
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



export default Navbar;