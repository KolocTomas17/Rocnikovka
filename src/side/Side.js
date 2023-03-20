import Card from "../content/Card";
import Card2 from "../content/Card2";
import Card3 from "../content/Card3";
import Navbar from "../content/Navbar";
import Footer from "../footer/Footer";

import "../side/Side.css";

const Side = () => {
  const listItems = Card.map((item) => (
    <div className="colums ">
      <div className="column is-10">
        <div className="card is-shady ">
          <div className="card-image">
            <figure className="image is-5by4" key={item.id}>
              <img src={item.odkaz} />
            </figure>
          </div>
          <div className="card-content">
            <div className="content">
              <h4>{item.nazev}</h4>

              <p>{item.popisek}</p>

              <span className="button modal-button" data-target="modal-image2">
                Prohlédnout
              </span>
              <br />
              <br />
              <h5>{item.cena + " " + item.mena}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  const listItems2 = Card2.map((item) => (
    <div className="colums ">
      <div className="column is-10 ">
        <div className="card is-shady ">
          <div className="card-image">
            <figure className="image is-5by4">
              <img src={item.odkaz} />
            </figure>
          </div>
          <div className="card-content">
            <div className="content">
              <h4>{item.nazev}</h4>
              <p>{item.popisek}</p>

              <span className="button modal-button" data-target="modal-image2">
                Prohlédnout
              </span>
              <br />
              <br />
              <h5>{item.cena + " " + item.mena}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  const listItems3 = Card3.map((item) => (
    <div className="colums ">
      <div className="column is-10 ">
        <div className="card is-shady ">
          <div className="card-image">
            <figure className="image is-5by4">
              <img src={item.odkaz} />
            </figure>
          </div>
          <div className="card-content">
            <div className="content">
              <h4>{item.nazev}</h4>
              <p>{item.popisek}</p>

              <span className="button modal-button" data-target="modal-image2">
                Prohlédnout
              </span>
              <br />
              <br />
              <h5>{item.cena + " " + item.mena}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <Navbar></Navbar>
      <div className="karta ">{listItems}</div>
      <div className="karta ">{listItems2}</div>
      <div className="karta ">{listItems3}</div>
      <Footer></Footer>
    </>
  );
};

export default Side;
