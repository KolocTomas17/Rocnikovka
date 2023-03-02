  


import { FaFacebook, FaInstagram ,FaLinkedin } from "react-icons/fa";
import Map from "../content/Map";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "../content/Content.css"
import Navbar from "./Navbar";





const Onas = () => {
  return(
    <>
    <Navbar></Navbar>
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

export default Onas
