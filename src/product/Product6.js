import { Link } from "react-router-dom";
import Navbar from "../content/Navbar";
import Footer from "../footer/Footer";
import Porsche from "../img/Taycan.png";
import "../product/Product.css";



const Product = () => {

  return (
    <>
      <Navbar></Navbar>
      
        <section className="columns">
            
                <img className="picture column is-half" src={Porsche} alt="Porsche" />
                <div className="column is-one-third">
            <h4 className="title nadpis">Porsche Taycan 4S</h4>
            
            <p className="tittle">Výkon: 489 koní</p>
            <p className="tittle">Hmotnost: 2,2 tun</p>
            <p className="tittle">Max. rychlost: 250 km/h</p>
            <p className="tittle">Kategorie: Sedan/limuzína</p>
            <p className="tittle">Spotřeba: 19,5 l/100 km</p>
            <p className="tittle">Najeto: 40 478km</p>
            <p className="tittle">Převodovka: automatická</p>
            <p className="tittle">Pohon 4x4</p>
            <p className="tittle">Palivo: elektřina</p>
            <p className="tittle">VIN: WP0AB2Y19MSA43448</p>
            <p className="tittle">Cena: 2 200 000 CZK</p>
            <br/>
            <Link className="button" to="/NapisteNam">Mám zájem</Link>
            </div>
            <div className="column is-one-third asistenty">
                <h4 className="title">Asistenty</h4>
                <p className="tittle">
                ABS, ESP, Hlídání mrtvého úhlu, Protiprokluzový systém kol (ASR), Sledování jízdního pruhu, Adaptivní tempomat, Parkovací kamera, Parkovací senzory, Rozpoznávání dopravních značek, Parkovací senzory přední, Parkovací senzory zadní
                </p>
                

                
            </div>
            
            
            

            
        </section>
      <Footer></Footer>
    </>
  );
}



 

export default Product;
