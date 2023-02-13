  


import { FaFacebook, FaInstagram ,FaLinkedin } from "react-icons/fa";
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

          <div className="navbar-item">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="search"
                  placeholder="BMW, Audi..."
                  aria-label="Search"
                />
              </div>
              <div className="control">
                <button className="button" >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    style={{ width: 24, height: 24 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
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
        </div>
        
        <div className="column is-one-third has-text-left">
          <h1 className="title is-1">Zeptejte se nás</h1>
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