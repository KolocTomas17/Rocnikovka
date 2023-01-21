const Card = () => {
  return (
    <div className="column is-9">
      <div className="card is-shady">
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              src="https://source.unsplash.com/6Ticnhs1AG0"
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
  );
};

export default Card;
