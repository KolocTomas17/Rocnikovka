import Card from "../content/Card";
import Tank from "../img/Tank.jpg";
import "../side/Side.css";

const Side = () => {
  return (
    <div>
      <h6 className="subtitle title is-3 nadpis" id="Koupit">
        Vozidla k zakoupení
      </h6>
      <div className="columns">
        <div className="navbar-item">
          <div className="field has-addons">
            <div className="control"></div>
          </div>
        </div>

        <div className="column">
          <div className="column">
            <div className="column is-9">
              <div className="card is-shady">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={Tank} alt="Placeholder image" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="content">
                    <h4>Tempor orci dapibus faber in.</h4>

                    <span
                      className="button is-link modal-button"
                      data-target="modal-card"
                    >
                      Modal Card
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <Card />
          </div>
        </div>
        <div className="column">
          <div className="column">
            <Card />
          </div>
          <div className="column">
            <Card />
          </div>
        </div>

        <div className="column">
          <div className="column">
            <Card />
          </div>
          <div className="column">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Side;
