import { Link } from "react-router-dom";
import Navbar from "../content/Navbar";
import Footer from "../footer/Footer";
import Bmw from "../img/Bmwm1.png";
import "../product/Product.css";



const Product = () => {

  return (
    <>
      <Navbar></Navbar>
      
        <section className="columns">
            
                <img className="picture column is-half" src={Bmw} alt="Bmw M1" />
                <div className="column is-one-third">
            <h4 className="title nadpis">Bmw M1</h4>
            
            <p className="tittle">Výkon: 200 koní</p>
            <p className="tittle">Hmotnost: 1,2 tun</p>
            <p className="tittle">Max. rychlost: 230 km/h</p>
            <p className="tittle">Kategorie: hatchback</p>
            <p className="tittle">Spotřeba: 16 l/100 km</p>
            <p className="tittle">Najeto: 72 900km</p>
            <p className="tittle">Převodovka: manuální</p>
            <p className="tittle">Pohon RWD</p>
            <p className="tittle">Palivo: benzín</p>
            <p className="tittle">VIN: WBAUE51000J901764</p>
            <p className="tittle">Cena: 1 050 000 CZK</p>
            <br/>
            <Link className="button" to="/NapisteNam">Mám zájem</Link>
            </div>
            <div className="column is-one-third asistenty">
                <h4 className="title">Asistenty</h4>
                <p className="tittle">
                    ABS, ESP, Protiprokluzový systém kol (ASR), launch control, hydraulická ruční brzda
                </p>

                
            </div>
            
            
            

            
        </section>
      <Footer></Footer>
    </>
  );
}



 

export default Product;
