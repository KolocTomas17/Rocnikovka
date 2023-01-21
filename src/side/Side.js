import Card from "../content/Card";



const Side = () => {
    return(
        <div className="columns">
            <div className="column is-fixed-top">
                <div className="column is-three-fifth">is-one-fifth</div>
                <div className="column is-three-fifth">is-one-fifth</div>
                <div className="column is-three-fifth">is-one-fifth</div>
                <div className="column is-three-fifth">is-one-fifth</div>
            </div>
            <div className="column">
                <div className="column"><Card/></div>
                <div className="column"><Card/></div>
            </div>
            <div className="column">
                <div className="column"><Card/></div>
                <div className="column"><Card/></div>
            </div>

            <div className="column">
                <div className="column"><Card/></div>
                <div className="column"><Card/></div>
            </div>

      </div>
      

    );
}

export default Side;