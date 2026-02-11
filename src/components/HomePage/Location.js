import React from "react";
import "./Location.css";
import venue from "../../assets/main/IMG_Venue.png";
import icon from "../../assets/main/Icon_Ubicación.png";
import graffiti from "../../assets/main/TAGS_BLACK.png";
import sticker1 from "../../assets/main/STICKER BOCA.png";
import sticker2 from "../../assets/main/STICKERS_CODM_03.png";
const Location = () => {
  return (
    <section id="locacion" className="locacion-section">
      <div className="locacion-container">
        <div className="locacion-info" style={{ backgroundColor: "white" }}>
          <h3 className="guild-font">UBICACIÓN</h3>
          <p className="venue-name">CIUDAD DE MÉXICO, CDMX</p>
          <p className="venue-address">
            House of Vans es el lugar donde la imaginación da rienda suelta con
            instalaciones de arte, talleres y escenarios de conciertos,
            inspirando continuamente a cada persona que corre, rueda o pisa cada
            uno de sus espacios.
          </p>
          <p className="venue-address" style={{ paddingTop: "10px" }}>
            Rubens 6, San Juan, Benito Juárez, 03730 Ciudad de México, CDMX
          </p>
          <div
            style={{
              position: "absolute",
              width: "100%",
              display: "flex",
              flexDirection: "row-reverse",
              overflowX: "clip",
              left: "0px",
              paddingTop: "50px"
            }}
          >
            {" "}
            <img
              loading="lazy"
              src={graffiti}
              alt="Graffiti"
              style={{
                position: "relative",
                width: "200px",
                height: "200px",
                opacity: "0.21",
                left: "85px",
              }}
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
              className="guild-font"
              style={{ position: "relative", color: "white", top: "-20px" }}
            >
              [ HOUSE OF VANS ]{" "}
            </p>
          </div>
          <div
            style={{
              position: "absolute",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              overflowX: "hidden",
              width: "100%",
            }}
          >
            <img
              loading="lazy"
              src={sticker2}
              alt="Sticker 2"
              style={{
                position: "relative",
                top: "10%",
                right: "45vw",
                width: "150px",
                height: "150px",
                marginBottom: "10%",
              }}
            />
            <img
              loading="lazy"
              src={sticker1}
              alt="Sticker 1"
              style={{
                position: "relative",
                top: "10px",
                left: "45vw",
                width: "100px",
                height: "100px",
                marginBottom: "10%",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
