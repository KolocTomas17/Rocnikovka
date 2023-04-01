import { Link } from "react-router-dom";
import Navbar from "../content/Navbar";
import Footer from "../footer/Footer";
import Lexus from "../img/lexus.png";
import "../product/Product.css";

const Product = () => {
  return (
    <>
      <Navbar></Navbar>

      <section className="columns">
        <img className="pic column is-half" src={Lexus} alt="Lexus" />
        <div className="column is-one-third">
          <h4 className="title nadpis">Lexus LS 220d</h4>

          <p className="tittle">Výkon: 200 koní</p>
          <p className="tittle">Hmotnost: 1,6 tun</p>
          <p className="tittle">Max. rychlost: 180 km/h</p>
          <p className="tittle">Kategorie: Sedan/limuzína</p>
          <p className="tittle">Spotřeba: 8,1 l/100 km</p>
          <p className="tittle">Najeto: 150 080km</p>
          <p className="tittle">Převodovka: manuální</p>
          <p className="tittle">Pohon FWD</p>
          <p className="tittle">Palivo: nafta</p>
          <p className="tittle">VIN: JTHBB262302000696</p>
          <p className="tittle">Cena: 25 000 CZK</p>
          <br />
          <Link className="button tlacitko" to="/NapisteNam">
            Mám zájem
          </Link>
        </div>
        <div className="column is-one-third asistenty">
          <h4 className="title popisek">Asistenty</h4>
          <p className="tittle popisek">
            ABS, ESP, Tempomat, Deaktivace airbagu spolujezdce, El. ovládání
            oken, El. ovládání zrcátek, El. sklopná zrcátka, Multifunkční
            volant, Nastavitelný volant, Posilovač řízení, Senzor stěračů,
            Venkovní teploměr, Vyhřívaná zrcátka
          </p>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Product;
