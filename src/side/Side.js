import Card from "../content/Card";
import Tank from "../img/Tank.jpg";
import'../side/Side.css'

const Side = () => {
  return (
    <div>
      <h2 className="title">Ročníky aut</h2>

      <div className="columns">
        <div className="column">
        <div className="navbar-item">
        <div className="field has-addons">
          <div className="control">
            <input
              className="input"
              type="search"
              placeholder="Zadej ročník auta"
              aria-label="Search"
            />
          </div>
          <div className="control">
            <button className="button" type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style={{ width: 24, height: 24 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

          </div>
        </div>
      </div>  

          
        </div>
        <div className="column">
          <div className="column">
          <div className="column is-9">
      <div className="card is-shady">
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              src={Tank}
              alt="Placeholder image"
            />
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
