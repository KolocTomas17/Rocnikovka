import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Map from "../content/Map";
import "../content/Content.css";
import Navbar from "./Navbar";
import Footer from "../footer/Footer";

const Onas = () => {
  return (
    <>
      <Navbar></Navbar>
      <section className="hero is-fullheight hero">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns is-8 is-variable ">
              <div className="column is-two-thirds has-text-left">
                <h1 className="title is-1">Kde nás najít</h1>

                <p className="is-size-4"></p>
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

              <div className="content">
              <div class="column">
                <h1 className="title is-1">Kdo jsme?</h1>
                <p className="is-size-5">Jsme autobazar <strong>AutobazarPro,</strong> který sídlí v Mladé Boleslavi již od roku 2010.</p>
                <p className="is-size-5"> Společnost <strong>AutobazarPro</strong> se může prokázat svou špičkovou kvalitou všech vozů, které si u nás můžete zakoupit.</p>
                <p className="is-size-5">Nemáme konkurenci, které se naše služby mohou vyrovnat.</p>
                <p className="is-size-5"> <strong>AutobazarPro</strong> je synonymem pro profesionální přístup, kvalitu a záruku.</p>
              </div>
              </div>


            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Onas;
