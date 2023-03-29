import Worker from "../img/worker.png";
import "../content/Content.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "../footer/Footer";

const Kariera = () => {
  return (
    <>
      <Navbar></Navbar>

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
                    <Link className="button is-link" to="/NapisteNam">
                      Napište nám
                    </Link>
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

      <Footer></Footer>
    </>
  );
};

export default Kariera;
