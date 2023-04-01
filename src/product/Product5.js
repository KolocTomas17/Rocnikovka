import { Link } from "react-router-dom";
import Navbar from "../content/Navbar";
import Footer from "../footer/Footer";
import Bentley from "../img/Bentley.png";
import "../product/Product.css";

const Product = () => {
  return (
    <>
      <Navbar></Navbar>

      <section className="columns">
        <img className="pic column is-half" src={Bentley} alt="Bentley" />
        <div className="column is-one-third">
          <h4 className="title nadpis">Bentley Continental GT</h4>

          <p className="tittle">Výkon: 551 koní</p>
          <p className="tittle">Hmotnost: 2,6 tun</p>
          <p className="tittle">Max. rychlost: 340 km/h</p>
          <p className="tittle">Kategorie: kupé</p>
          <p className="tittle">Spotřeba: 18 l/100 km</p>
          <p className="tittle">Najeto: 5 100km</p>
          <p className="tittle">Převodovka: automatická</p>
          <p className="tittle">Pohon 4x4</p>
          <p className="tittle">Palivo: benzín</p>
          <p className="tittle">VIN: SCBCW13S0NC097961</p>
          <p className="tittle">Cena: 7 500 000 CZK</p>
          <br />
          <Link className="button tlacitko" to="/NapisteNam">
            Mám zájem
          </Link>
        </div>
        <div className="column is-one-third asistenty">
          <h4 className="title popisek">Asistenty</h4>
          <p className="tittle popisek">
            ABS, Elektronická uzávěrka diferenciálu (EDS), ESP, Hlídání mrtvého
            úhlu, Nouzové brždění, Sledování jízdního pruhu, 360° monitorovací
            systém (AVM), Adaptivní tempomat, Asistent pro jízdu v koloně,
            Asistent změny jízdního pruhu, Parkovací asistent, Parkovací kamera,
            Parkovací senzory, Rozpoznávání dopravních značek, Tempomat
          </p>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Product;
