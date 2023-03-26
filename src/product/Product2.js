import { Link } from "react-router-dom";
import Navbar from "../content/Navbar";
import Footer from "../footer/Footer";
import Audi from "../img/Audirs6.png";
import "../product/Product.css";



const Product = () => {

  return (
    <>
      <Navbar></Navbar>
      
        <section className="columns">
            
                <img className="picture column is-half" src={Audi} alt="Audi rs6" />
                <div className="column is-one-third">
            <h4 className="title nadpis">Audi rs6 avant</h4>
            
            <p className="tittle">Výkon: 560 koní</p>
            <p className="tittle">Hmotnost: 2,5 tun</p>
            <p className="tittle">Max. rychlost: 270 km/h</p>
            <p className="tittle">Kategorie: kombi</p>
            <p className="tittle">Spotřeba: 12 l/100 km</p>
            <p className="tittle">Najeto: 120 000km</p>
            <p className="tittle">Převodovka: automatická</p>
            <p className="tittle">Pohon 4x4</p>
            <p className="tittle">Palivo: benzín</p>
            <p className="tittle">VIN: WUAZZZ4G2FN901734</p>
            <p className="tittle">Cena: 1 590 000 CZK</p>
            <br/>
            <Link className="button" to="/NapisteNam">Mám zájem</Link>
            </div>
            <div className="column is-one-third asistenty">
                <h4 className="title">Asistenty</h4>
                <p className="tittle">
Adaptivní tempomat, Asistent rozjezdu do kopce, Parkovací asistent, Parkovací kamera, Parkovací senzory, Rozpoznávání dopravních značek, Tempomat, Parkovací senzory přední, Parkovací senzory zadní
</p>

                
            </div>
            
            
            

            
        </section>
      <Footer></Footer>
    </>
  );
}



 

export default Product;
