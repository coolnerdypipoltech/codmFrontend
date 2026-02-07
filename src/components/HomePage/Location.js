import React from 'react';
import './Location.css';
import venue from "../../assets/main/IMG_Venue.png"
import icon from "../../assets/main/Icon_Ubicación.png"
import graffiti from "../../assets/main/TAGS_BLACK.png"
const Location = () => {
  return (
    <section id="locacion" className="locacion-section">
      
      <div className="locacion-container">
        
        <div className="locacion-info" style={{backgroundColor: "white"}}>
          
          <h3 className='guild-font'>UBICACIÓN</h3>
          <p className="venue-name">CIUDAD DE MÉXICO, CDMX</p>
          <p className="venue-address">House of Vans es el lugar donde la imaginación da rienda suelta con instalaciones de arte, talleres y escenarios de conciertos, inspirando continuamente a cada persona que corre, rueda o pisa cada uno de sus espacios.</p>
          <p className="venue-address" style={{paddingTop: "10px"}}>Rubens 6, San Juan, Benito Juárez, 03730 Ciudad de México, CDMX</p>

        </div>
        <div style={{ position: "absolute", width: "100%", display: "flex", flexDirection: "row-reverse"}}> <img src={graffiti} alt="Graffiti" style={{position: "relative", width: "200px", height: "200px", opacity: "0.21", top: "-40vw", left: "85px"}} /></div>
        <div className="map-container">
          <img src={venue} alt="Venue" className="venue-image" />
          <div style={{position: "absolute", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <img src={icon} alt="Icon" className="icon-image" />
          <p className='guild-font' style={{position: "relative", color: "white", top: "-20px"}}>[HOUSE OF VANS  ] </p></div>
        </div>
        
      </div>
      
    </section>
  );
};

export default Location;
