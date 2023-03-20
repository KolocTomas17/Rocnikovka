import Footer from "../footer/Footer";
import Navbar from "./Navbar";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


const Napis = () => {
  return (
    <>
    <Navbar></Navbar>

    <div className="column is-one-third has-text-left sloupec">
      <h1 className="nadpis">Napište nám</h1>
      <div className="field">
        <label className="label">Jméno</label>
        <div className="control">
          <input className="input is-medium" type="text" placeholder="Jan Novák"/>
        </div>
      </div>
      <div className="field">
        <label className="label">Email</label>
        <div className="control">
          <input className="input is-medium" type="text" placeholder="email@gmail.com"/>
        </div>
      </div>
      <div className="field">
        <label className="label">Zpráva</label>
        <div className="control">
          <textarea className="textarea is-medium" defaultValue={""} placeholder="Vaše zpáva."/>
        </div>
      </div>
      <div className="control">
        <Popup trigger={<button className="button"> Odeslat</button>} >
          <div>Odesláno</div>
        </Popup>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
};


export default Napis;