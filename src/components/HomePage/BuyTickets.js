import React from "react";
import imagen2 from "../../assets/main/IMG_texture_RG.png";
import comprarBoletos from "../../assets/main/Button_Comprar Boletos.png";
import "./BuyTickets.css"
const BuyTickets = () => {
  return (
    <section
      id="buyTickets"
      className="buyTickets-section"
    >
      <div
        className="buyTickets-container"
        style={{ backgroundImage: `url(${imagen2})` }}
      >
        <p className="buyTickets-text" style={{marginTop: "40px"}}>
          COMPRAR BOLETOS
        </p>
        <p
          className="buyTickets-text"
        >
          PARA LA FINAL EN VIVO
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
