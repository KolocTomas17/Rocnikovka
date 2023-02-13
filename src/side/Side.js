import Card from "../content/Card";
import Card2 from "../content/Card2";

import "../side/Side.css";

const Side = () => {
  const listItems = Card.map((item) => (
    <div className="colums ">
      <div className="column is-10 ">
        <div className="card is-shady ">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={item.odkaz} />
            </figure>
          </div>
          <div className="card-content">
            <div className="content">
              <h4>{item.nazev}</h4>
              <p>{item.popisek}</p>
              <span
                className="button is-link modal-button"
                data-target="modal-image2"
              >
                Koupit
              </span>
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
          <figure className="image is-4by3">
            <img src={item.odkaz} />
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
            <h4>{item.nazev}</h4>
            <p>{item.popisek}</p>
            <span
              className="button is-link modal-button"
              data-target="modal-image2"
            >
              Koupit
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  
));
  
  return (
    <>
    <div className="karta">{listItems}</div>
    <div className="karta">{listItems2}</div>
    </>

   );


}



export default Side;
