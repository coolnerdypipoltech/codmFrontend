import React from 'react';
import './Prize.css';
import imagen2 from "../../assets/main/IMG_Regional Qualifiers.png";
import imgband from "../../assets/main/IMG_Band.png";
const Qualifiers = () => {
  return (
    <section id="premio" className="premio-section">
      <div style={{position: "absolute", width: "100%", display: "flex", flexDirection: "row-reverse", zIndex: 2}}> <img loading="lazy" src={imgband} alt="Band" className='image-band3'/></div>
      <div  className="premio-container" style={{padding: "0px", minHeight: "0px"}}>
        <img loading="lazy" src={imagen2} alt="Regional Qualifiers" />
     </div>
      <div id='calendario' style={{position: "absolute", width: "100%", display: "flex", flexDirection: "row-reverse"}}> <img loading="lazy" src={imgband} alt="Band" style={{position: "relative", width: "100%", height: "80px", top: "-7vh"}} /></div>
      
    </section>
  );
};

export default Qualifiers;
