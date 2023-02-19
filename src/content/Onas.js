  


import { FaFacebook, FaInstagram ,FaLinkedin } from "react-icons/fa";
import Map from "../content/Map";
import  Logo  from "../img/logo.png"
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "../content/Content.css"





const Onas = () => {
  return(
    <>
    <nav className="navbar py-4 navbar is-fixed-top ">
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
<section className="hero is-fullheight hero">
  <div className="hero-body" >
    <div className="container has-text-centered">
      <div className="columns is-8 is-variable ">
        <div className="column is-two-thirds has-text-left">
          
          <h1 className="title is-1">Kde nás najít</h1>
          
          <p className="is-size-4">
            
            
          </p>
          <div className="social-media">
            <a
              href="https://facebook.com"
              target="_blank"
              className="button is-light is-medium"
              
            >
              <FaFacebook />
            </a>
            <> </>
            <a
              href="https://instagram.com"
              target="_blank"
              className="button is-light is-medium"
            >
             <FaInstagram />
            </a>
            <> </>
            <a
              href="https://cz.linkedin.com/"
              target="_blank"
              className="button is-light is-medium"
            >
              <FaLinkedin />
            </a>
            
          </div>
          <div className="Map">
             <Map></Map>
          </div>
        </div>
        
        
        <div className="column is-one-third has-text-left">
          <h1 className="title is-1">Napište nám</h1>
          <div className="field">
            <label className="label">Jméno</label>
            <div className="control">
              <input className="input is-medium" type="text" />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input className="input is-medium" type="text" />
            </div>
          </div>
          <div className="field">
            <label className="label">Zpráva</label>
            <div className="control">
              <textarea className="textarea is-medium" defaultValue={""} />
            </div>
          </div>
          <div className="control">
            <button
              type="submit"
              className="button is-link is-fullwidth has-text-weight-medium is-medium"
            >
              Odeslat
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
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



export default Onas
