import React from "react";
import "./Location.css";
import venue1 from "../../assets/main/IMG_Venue.png";
import venue2 from "../../assets/desktop/Main/IMG_Venue.png"
import textura1 from "../../assets/main/Textura_UbicacionM.png";
import textura2 from "../../assets/desktop/Main/Textura Ubicacion.png";
import icon from "../../assets/main/Icon_Ubicación.png";
import graffiti from "../../assets/main/TAGS_BLACK.png";
import sticker1 from "../../assets/main/STICKER BOCA.png";
import sticker2 from "../../assets/main/STICKERS_CODM_03.png";
import { useViewport } from "../../context/ViewportContext";
const Location = () => {

  const { isMobile } = useViewport();
  const textura = isMobile ? textura1 : textura2;
  const venue = isMobile ? venue2 : venue1; 
  return (
    <section id="locacion" className="locacion-section">
      <div className="locacion-container"  style={{ flexDirection: isMobile ? "column" : "row"}}>
        <img loading="lazy" src={textura} alt="Venue" className="venue-image" />
        <div className="locacion-info">
          <p className="venue-name2" style={{color: "#F201B7"}}>EVENTO IRL</p>
          <p className="venue-name">CIUDAD DE MÉXICO, MX</p>
          <p className="venue-address">
            <strong>House of Vans</strong> no es cualquier recinto, es territorio sagrado del barrio: puro street art en las paredes, beats reventando el piso y la banda prendida al 100. <br></br> <br></br>
            Aquí haremos historia con el primer torneo presencial de <strong>Call of Duty: Mobile</strong> en Latinoamérica, con los jugadores más duros, capitanes que sí rifan y freestylers chingones soltando barras en vivo.
            Es venir a sentir la vibra real, a gritar cada kill, a vivir la competencia cara a cara y a demostrar que el orgullo de barrio se juega, se rapea y se defiende en grande.
          </p>

        </div>

        <div className="map-container">
          <img loading="lazy" src={venue} alt="Venue" className="venue-image" />
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
        </div>
      </div>
    </section>
  );
};

export default Location;
