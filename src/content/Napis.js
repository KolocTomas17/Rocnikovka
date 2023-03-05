import Footer from "../footer/Footer";
import Navbar from "./Navbar";

const Napis = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className="column is-one-third has-text-left">
      <h1 className="title is-1">Napište nám</h1>
      <div className="field">
        <label className="label">Jméno</label>
        <div className="control">
          <input className="input is-medium" type="text" />
        </div>
      </div>
      <div className="field">
        <label className="label">Email</label>
        <div className="control">
          <input className="input is-medium" type="text" />
        </div>
      </div>
      <div className="field">
        <label className="label">Zpráva</label>
        <div className="control">
          <textarea className="textarea is-medium" defaultValue={""} />
        </div>
      </div>
      <div className="control">
        <button
          type="submit"
          className="button is-link is-fullwidth has-text-weight-medium is-medium"
        >
          Odeslat
        </button>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
};


export default Napis;