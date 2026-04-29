import React from "react";
import imagen2 from "../../assets/main/IMG_texture_RG.webp";
import imagen3 from "../../assets/desktop/Main/IMG_texture_RG_web.webp";
import image4 from "../../assets/main/IMG_texture_RG2.webp";
import image5 from "../../assets/desktop/Main/IMG_texture_RG_webT2.webp";
import comprarBoletos from "../../assets/main/Button_Comprar Boletos.webp";
import text from "../../assets/main/end_text.png";
import highlight from "../../assets/desktop/Header/Spray_graffbutton.webp";
import flecha from "../../assets/main/flecha.png";
import "./BuyTickets.css";
import { useViewport } from "../../context/ViewportContext";
const BuyTickets = ({ type }) => {
  const { isMobile } = useViewport();
  let backgroundImage;
  if (type === "1") {
    backgroundImage = isMobile ? image4 : image5;
  } else {
    backgroundImage = isMobile ? imagen2 : imagen3;
  }

  return (
    <section id="buyTickets" className="buyTickets-section">
      <div className="buyTickets-container">
        <img
          className="buyTickets-background"
          style={{ maxHeight: type === "1" && isMobile ? "280px" : "" }}
          src={backgroundImage}
          alt="Background"
        ></img>
        <div
          style={{
            zIndex: "10",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginBottom: "20px",
            alignItems: "center",
            position: "absolute",
          }}
        >


          {true && (
            <>
              <img
                loading="lazy"
                src={text}
                className="buyTickets-Image"
                style={{ width: "95%", bottom: "-9px" }}
                alt="Comprar Boletos"
              />
              <img
                loading="lazy"
                src={flecha}
                className="buyTickets-Image"
                style={{ width: "auto", bottom: "-9px", height: isMobile ? "20px" : "30px" }}
                alt="Comprar Boletos"
              />
              
              <div
                id="button-buyTickets"
                onClick={() => {
                  window.gtag?.("event", "click_comprar_boletos", {
                    event_category: "engagement",
                    event_label: "buy_tickets_section",
                  });
                  window.open("https://codmatvi.onelink.me/jYL7/q47wt3t2", "_blank");
                }}
                style={{
                  width: "100%",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                          {!isMobile && (
            <img
              loading="lazy"
              src={highlight}
              className="buyTickets-highlight"
              alt="Highlight"
            />
          )}
                <img
                  loading="lazy"
                  src={comprarBoletos}
                  className="buyTickets-Image"
                  style={{ width: "95%", bottom: "-9px" }}
                  alt="Comprar Boletos"
                />

                <p className="buyTickets-buttonText">
                  VISITA EL SITIO DE COD MOBILE
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default BuyTickets;
