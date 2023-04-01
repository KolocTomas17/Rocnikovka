import { Link } from "react-router-dom";
import Navbar from "../content/Navbar";
import Footer from "../footer/Footer";
import M2 from "../img/bmwm2.png";
import "../product/Product.css";

const Product = () => {
  return (
    <>
      <Navbar></Navbar>

      <section className="columns">
        <img className="pict column is-half" src={M2} alt="Bmw M2" />
        <div className="column is-one-third">
          <h4 className="title nadpis">Bmw M2</h4>

          <p className="tittle">Výkon: 374 koní</p>
          <p className="tittle">Hmotnost: 2,1 tun</p>
          <p className="tittle">Max. rychlost: 250 km/h</p>
          <p className="tittle">Kategorie: Sedan</p>
          <p className="tittle">Spotřeba: 10,2 l/100 km</p>
          <p className="tittle">Najeto: 9 080km</p>
          <p className="tittle">Převodovka: automatická</p>
          <p className="tittle">Pohon RWD</p>
          <p className="tittle">Palivo: benzín</p>
          <p className="tittle">VIN: 2160723X</p>
          <p className="tittle">Cena: 1 500 000 CZK</p>
          <br />
          <Link className="button tlacitko" to="/NapisteNam">
            Mám zájem
          </Link>
        </div>
        <div className="column is-one-third asistenty">
          <h4 className="title popisek">Asistenty</h4>
          <p className="tittle popisek">
            Přední a zadní parkovací asistent,Systém pro udržování rychlosti s
            brzdnou funkcí , HiFi systém, M sportovní diferenciál, Adaptivní M
            podvozek,
          </p>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Product;
