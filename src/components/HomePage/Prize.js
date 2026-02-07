import React from 'react';
import './Prize.css';
import imagen2 from "../../assets//Fondo.png";
import imgband from "../../assets/main/IMG_Band.png";
const Prize = () => {
  return (
    <section id="premio" className="premio-section">
      <div style={{position: "absolute", width: "100%", display: "flex", flexDirection: "row-reverse"}}> <img src={imgband} alt="Band" style={{position: "relative", width: "100%", height: "80px", top: "-5vh"}} /></div>
      <div style={{backgroundImage: `url(${imagen2})`}} className="premio-container">
        <p className='title-prize'>LA GLORIA DEL BARRIO</p>
        <p className='text-prize'>*Descripción sobre el corazón del barrio.</p>
      </div>
      
      
    </section>
  );
};

export default Prize;
