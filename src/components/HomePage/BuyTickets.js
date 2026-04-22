import React from "react";
import imagen2 from "../../assets/main/IMG_texture_RG.webp";
import imagen3 from "../../assets/desktop/Main/IMG_texture_RG_web.webp";
import image4 from "../../assets/main/IMG_texture_RG2.webp";
import image5 from "../../assets/desktop/Main/IMG_texture_RG_webT2.webp";
import comprarBoletos from "../../assets/main/Button_Comprar Boletos.webp";
import compraBoletoText from "../../assets/main/La gloriadelbarrio.webp";
import highlight from "../../assets/desktop/Header/Spray_graffbutton.webp";
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
          id="button-buyTickets"
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
          {!isMobile && (
            <img
              loading="lazy"
              src={highlight}
              className="buyTickets-highlight"
              alt="Highlight"
            />
          )}

          {true && (
            <div
              onClick={() => {
                window.gtag?.("event", "click_comprar_boletos", {
                  event_category: "engagement",
                  event_label: "buy_tickets_section",
                });
                window.open("https://feverup.com/m/593821", "_blank");
              }}
              style={{
                width: "auto",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                loading="lazy"
                src={comprarBoletos}
                className="buyTickets-Image"
                style={{ width: "95%", bottom: "-9px" }}
                alt="Comprar Boletos"
              />

              <p className="buyTickets-buttonText">COMPRAR BOLETOS</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BuyTickets;
