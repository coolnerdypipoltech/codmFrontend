import React, { useState, useEffect } from "react";
import "./Location.css";
import venue1 from "../../assets/main/IMG_Venue.webp";
import venue2 from "../../assets/desktop/Main/IMG_Venue.webp"
import textura1 from "../../assets/main/Textura_UbicacionM.webp";
import textura2 from "../../assets/desktop/Main/Textura Ubicacion.webp";
import icon from "../../assets/main/Icon_Ubicación.webp";
import sticker1 from "../../assets/main/STICKER BOCA.webp";
import sticker2 from "../../assets/main/STICKERS_CODM_03.webp";
import { useViewport } from "../../context/ViewportContext";

const getTextura = (width) => {
  if ((width > 660 && width < 900) || width > 1300) {
    return textura2;
  }
  return textura1;
};

const Location = () => {
  
  const { isMobile } = useViewport();
  const [textura, setTextura] = useState(() => getTextura(window.innerWidth));

  useEffect(() => {
    const handleResize = () => setTextura(getTextura(window.innerWidth));
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  const venue = isMobile ? venue2 : venue1; 
  return (
    <section id="locacion" className="locacion-section">
      <div className="locacion-container"  style={{ flexDirection: isMobile ? "column" : "row"}}>
        <img loading="lazy" src={textura} alt="Venue" className="venue-image" style={{minHeight: "100px", height: "94%"}} />
        <div className="locacion-info">


        </div>

        <div className="map-container" >
          <img loading="lazy" src={venue} alt="Venue" className="venue-image" />
                    <div
            className="graffiti-container"
          >
            <img
              loading="lazy"
              src={sticker2}
              alt="Sticker 2"
              className="graffiti2"
            />
            <img
              loading="lazy"
              src={sticker1}
              alt="Sticker 1"
              className="graffiti1"
                
            />
          </div>
          <div
            style={{
              position: "absolute",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              loading="lazy"
              onClick={() => window.open("https://maps.app.goo.gl/Bq5pA4tYWyc6FVHQA")}
              src={icon}
              alt="Icon"
              className="icon-image"
              style={{ width: "60px" }}
            />
            <p
              className="guild-regular-font"
              style={{ position: "relative", color: "white", top: "-20px", fontSize: isMobile ? "28px" : "34px" }}
            >
              [ HOUSE OF VANS ]
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Location;
