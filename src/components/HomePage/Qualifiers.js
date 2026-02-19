import React from 'react';
import './Prize.css';
import imagen2 from "../../assets/main/IMG_Regional Qualifiers.webp";
import imagen2Desktop from "../../assets/desktop/Main/IMG_Regional Qualifiers.webp";
import imgband1 from "../../assets/main/IMG_Band.png";
import imgband2 from "../../assets/desktop/Main/IMG_Band_web.webp";

  import { useViewport } from "../../context/ViewportContext";

const Qualifiers = () => {

  const { isMobile } = useViewport();
  const imgband = isMobile ? imgband1 : imgband2;
  const splashImage = isMobile ? imagen2 : imagen2Desktop;

  return (
    <section id="premio" className="premio-section">
      <div style={{position: "absolute", width: "100%", display: "flex", flexDirection: "row-reverse", zIndex: 2}}> <img loading="lazy" src={imgband} alt="Band" className='image-band3'/></div>
      <div  className="premio-container" style={{padding: "0px", minHeight: "0px"}}>
        <img loading="lazy" style={{ height: isMobile ? "100%" : "50vw", objectFit: "cover", width: "100%"}} src={splashImage} alt="Regional Qualifiers" />
     </div>
      <div id='calendario' style={{position: "absolute", width: "100%", display: "flex", flexDirection: "row-reverse"}}> <img loading="lazy" src={imgband} alt="Band" className='image-band4' /></div>
      
    </section>
  );
};

export default Qualifiers;
