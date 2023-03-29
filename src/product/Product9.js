import { Link } from "react-router-dom";
import Navbar from "../content/Navbar";
import Footer from "../footer/Footer";
import Urus from "../img/urus.png";
import "../product/Product.css";



const Product = () => {

  return (
    <>
      <Navbar></Navbar>
      
        <section className="columns">
            
                <img className="picture column is-half" src={Urus} alt="Lexus" />
                <div className="column is-one-third">
            <h4 className="title nadpis">Lamborghini Urus</h4>
            
            <p className="tittle">Výkon: 650 koní</p>
            <p className="tittle">Hmotnost: 2,3 tun</p>
            <p className="tittle">Max. rychlost: 305km/h</p>
            <p className="tittle">Kategorie: SUV</p>
            <p className="tittle">Spotřeba: 12,7 l/100 km</p>
            <p className="tittle">Najeto: 2 492km</p>
            <p className="tittle">Převodovka: automatická</p>
            <p className="tittle">Pohon 4x4</p>
            <p className="tittle">Palivo: benzín</p>
            <p className="tittle">VIN: ZPBEA1xxxxxxxx026</p>
            <p className="tittle">Cena: 9 000 000 CZK</p>
            <br/>
            <Link className="button" to="/NapisteNam">Mám zájem</Link>
            </div>
            <div className="column is-one-third asistenty">
                <h4 className="title">Asistenty</h4>
                <p className="tittle">
                360° monitorovací systém (AVM), Adaptivní tempomat, Parkovací kamera, Parkovací senzory, Rozpoznávání dopravních značek, Parkovací senzory přední, Parkovací senzory zadní, Sledování jízdního pruhu, Sledování únavy řidiče, Hlídání mrtvého úhlu
                </p>
                

                
            </div>
            
            
            

            
        </section>
      <Footer></Footer>
    </>
  );
}



 

export default Product;
