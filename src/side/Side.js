import Card from "../content/Card";
import Card2 from "../content/Card2";

import Logo from "../img/logo.png";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

import "../side/Side.css";

const Side = () => {
  const listItems = Card.map((item) => (
    <div className="colums ">
      <div className="column is-10 ">
        <div className="card is-shady col">
          <div className="card-image">
            <figure className="image is-5by4">
              <img src={item.odkaz} />
            </figure>
          </div>
          <div className="card-content">
            <div className="content">
              <h4>{item.nazev}</h4>
              <p>{item.p1}</p>
              <p>{item.p2}</p>
              <p>{item.p3}</p>
              <p>{item.p4}</p>
              
                <span
                className="button is-link modal-button"
                data-target="modal-image2"
              >
                Koupit
              </span>
              <h5>{item.cena + " " +item.mena}</h5>
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
    


    
  ));
  
  const listItems2 = Card2.map((item) => (
  <div className="colums ">
    <div className="column is-10 ">
      <div className="card is-shady ">
        <div className="card-image">
          <figure className="image is-5by4">
            <img src={item.odkaz} />
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
            <h4>{item.nazev}</h4>
            <p>{item.popisek}</p>


            <span
              className="button is-link modal-button"
              data-target="modal-image2"
            >
              Koupit
              
            </span>
            <h5>{item.cena + " " +item.mena}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  
));


  
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
    <div className="karta ">{listItems}</div>
    <div className="karta ">{listItems2}</div>
    
    
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





export default Side;
