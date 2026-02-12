import React from "react";
import imagen2 from "../../assets/main/IMG_texture_RG.png";
import imagen3 from "../../assets/desktop/Main/IMG_texture_RG_web.png";
import comprarBoletos from "../../assets/main/Button_Comprar Boletos.png";
import "./BuyTickets.css"
import { useViewport } from "../../context/ViewportContext";
const BuyTickets = () => {

  const { isMobile } = useViewport();

  const backgroundImage = isMobile ? imagen2 : imagen3;

  return (
    <section
      id="buyTickets"
      className="buyTickets-section"
    >
      <div
        className="buyTickets-container"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <p className="buyTickets-text" style={{marginTop: "40px"}}>
          COMPRA TUS BOLETOS

        </p>
        <p
          className="buyTickets-text"
        >
          PARA LA GRAN FINAL EN VIVO
        </p>
        <>
          <img
            loading="lazy"
            src={comprarBoletos}
           className="buyTickets-Image"
            alt="Comprar Boletos"
          />
          ´
          <p
            className="buyTickets-buttonText"
            
          >
            COMPRAR BOLETOS
          </p>
        </>
      </div>
    </section>
  );
};

export default BuyTickets;
