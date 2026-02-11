import React from "react";
import imagen2 from "../../assets/main/IMG_texture_RG.png";
import imagen3 from "../../assets/desktop/Main/IMG_texture_RG_web.png";
import comprarBoletos from "../../assets/main/Button_Comprar Boletos.png";

import { useViewport } from "../../context/ViewportContext";
const RegisterTournament = () => {
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
         <p className="buyTickets-text" style={{marginTop: isMobile ? "40px" : "80px"}}>
          SI LLEGASTE HASTA AQUÍ,
        </p>
        <p
          className="buyTickets-text"
        >
          REGISTRATE EN EL TORNEO
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
            className={isMobile ? "buyTickets-buttonText" : "buyTickets-buttonText2"}
          >
            REGISTRO AL TORNEO
          </p>
        </>
      </div>
    </section>
  );
};

export default RegisterTournament;
