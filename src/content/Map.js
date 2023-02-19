import "../content/Content.css";


const Map = () => {
    return(
<div className="mapouter">
  <div className="gmap_canvas">
    <iframe
      width={450}
      height={450}
      id="gmap_canvas"
      src="https://maps.google.com/maps?q=Mlad%C3%A1%20Boleslav%20Jilemnick%C3%A9ho%201119&t=&z=13&ie=UTF8&iwloc=&output=embed"
    />
   
    
   
  </div>
</div>
    );
}

export default Map;
