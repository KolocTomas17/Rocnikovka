import "../content/Content.css";


const Map = () => {
    return(
<div className="mapouter">
  <div className="gmap_canvas">
    <iframe
      title="map"
      className="map"
      width="450"
      height="410"
      src="https://maps.google.com/maps?q=Mlad%C3%A1%20Boleslav%20Jilemnick%C3%A9ho%201119&t=&z=13&ie=UTF8&iwloc=&output=embed"
    />
   
    
   
  </div>
</div>
    );
}

export default Map;
