import { Link } from "react-router-dom";
import Navbar from "../content/Navbar";
import Footer from "../footer/Footer";
import MB from "../img/MB.png";
import "../product/Product.css";



const Product = () => {

  return (
    <>
      <Navbar></Navbar>
      
        <section className="columns">
            
                <img className="picture column is-half" src={MB} alt="Mercedes-Benz" />
                <div className="column is-one-third">
            <h4 className="title nadpis">Mercedes-Benz 124</h4>
            
            <p className="tittle">Výkon: 160 koní</p>
            <p className="tittle">Hmotnost: 1,7 tun</p>
            <p className="tittle">Max. rychlost: 200 km/h</p>
            <p className="tittle">Kategorie: Sedan/limuzína</p>
            <p className="tittle">Spotřeba: 9 l/100 km</p>
            <p className="tittle">Najeto: 183 100km</p>
            <p className="tittle">Převodovka: automatická</p>
            <p className="tittle">Pohon RWD</p>
            <p className="tittle">Palivo: benzín</p>
            <p className="tittle">VIN: WDB1240261B365066</p>
            <p className="tittle">Cena: 200 000 CZK</p>
            <br/>
            <Link className="button" to="/NapisteNam">Mám zájem</Link>
            </div>
            <div className="column is-one-third asistenty">
                <h4 className="title">Asistenty</h4>
                <p className="tittle">
                    ABS, centrální zamykání, El. ovládání oken, El. ovládání zrcátek, Nezávislé topení s čas. předehřívačem, Posilovač řízení, Venkovní teploměr
                </p>

                
            </div>
            
            
            

            
        </section>
      <Footer></Footer>
    </>
  );
}



 

export default Product;
