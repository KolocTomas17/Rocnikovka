import React, { useState} from "react";
import  Logo  from "../img/logo.png";
import Worker from "../img/worker.png";
import "../content/Content.css"
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Kariera = () => {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <>
        <nav className="navbar py-4 navbar is-fixed-top">
      <div className="container is-fluid">
        <div className="navbar-brand">
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
          <a
            className="navbar-burger"
            role="button"
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div className="navbar-menu">
          
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

          <div className="navbar-end">
            <ul className="navbar-item">
              <CustomLink to="/prihlaseni">Přihlásit se</CustomLink>
            </ul>
          </div>


        </div>
      </div>
      
    </nav>

    <section className="hero is-white is-fullheight aaa">
      <div className="hero-body ">
        <div className="container ">
          <div className="columns  is-vcentered reverse-columns ">
            <div
              className="column
    is-10-mobile 
    is-10-tablet 
    is-5-desktop 
    is-5-widescreen 
    is-5-fullhd 
    kariera"
              data-aos="fade-down"
            >
                
              <h1 className="title titled is-1 mb-6 ">
                Proč pracovat zrovna u Nás?
              </h1>
              <div className="Text">
              <p>Nabízíme nejlepší pracovní podmínky</p>
              <p>Vstupní příspěvek 10 000Kč</p>
              <p>Firemní auto</p>
              <p>Nástupní plat 32 000Kč</p>
              <p>Možnost stravování v naší jídelně</p>
              <p>Dovolená až 25 dnů do ročně</p>
              <br></br>
              <ul>
                <CustomLink className="button is-link" to="/Onas">Napište nám</CustomLink>
              </ul>
              
                </div>
            </div>
            <div
              data-aos="fade-right"
              className="column
    is-10-mobile 
    is-10-tablet 
    is-4-desktop 
    is-7-widescreen 
    is-4-fullhd is-offset-1-fullhd"
            >
              <figure className="image is-square">
                <img src={Worker} />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

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

export default Kariera;
