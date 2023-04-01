import { Link } from "react-router-dom";
import Navbar from "../content/Navbar";
import Footer from "../footer/Footer";
import Tank from "../img/Tank.png";
import "../product/Product.css";

const Product = () => {
  return (
    <>
      <Navbar></Navbar>

      <section className="columns">
        <img className="pic column is-half" src={Tank} alt="tank" />
        <div className="column is-one-third">
          <h4 className="title nadpis">Tank T34-85</h4>

          <p className="tittle">Poměr výkon/hmotnost: 16,2 hp/tunu</p>
          <p className="tittle">Rok výroby: 1942</p>
          <p className="tittle">Hmotnost: 32 tun</p>
          <p className="tittle">Max. rychlost: 55 km/h</p>
          <p className="tittle">Kategorie: střední tank</p>
          <p className="tittle">Míst pro osádku: 4</p>
          <p className="tittle">Počet válců: 12</p>
          <p className="tittle">Kanón vz. 44</p>
          <p className="tittle">Dostřel: 14 000 metrů</p>
          <p className="tittle">Cena: 15 000 000 CZK</p>
          <br />
          <Link className="button tlacitko" to="/NapisteNam">
            Mám zájem
          </Link>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Product;
