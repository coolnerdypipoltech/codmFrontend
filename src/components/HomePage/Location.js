import React from "react";
import "./Location.css";
import venue from "../../assets/main/IMG_Venue.png";
import icon from "../../assets/main/Icon_Ubicación.png";
import graffiti from "../../assets/main/TAGS_BLACK.png";
import sticker1 from "../../assets/main/STICKER BOCA.png";
import sticker2 from "../../assets/main/STICKERS_CODM_03.png";
import { isMobile } from "pixi.js";
const Location = () => {
  return (
    <section id="locacion" className="locacion-section">
      <div className="locacion-container">
        <div className="locacion-info" style={{ backgroundColor: "white" }}>
          <p className="venue-name2" style={{color: "#F201B7"}}>UBICACIÓN</p>
          <p className="venue-name">CIUDAD DE MÉXICO, CDMX</p>
          <p className="venue-address">
            House of Vans es el spot donde la imaginación se suelta sin freno, con arte chido, talleres que rifan y escenarios que prenden los conciertos; un lugar que inspira a toda la banda que corre, rueda o pisa fuerte cada rincón.

          </p>
          <p className="venue-address" style={{ paddingTop: "10px" }}>
            Rubens 6, San Juan, Benito Juárez, 03730 Ciudad de México, CDMX
          </p>
          <div
            className="graffitiTag-container"
          >
            {" "}
            <img
              loading="lazy"
              src={graffiti}
              alt="Graffiti"
              className="graffitiTag"
            />
          </div>
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
              style={{ position: "relative", color: "white", top: "-20px", fontSize: isMobile ? "32px" : "16px" }}
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
