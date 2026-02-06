import React from "react";
import imagen2 from "../../assets/main/IMG_texture_RG.png";
import comprarBoletos from "../../assets/main/Button_Comprar Boletos.png";
const RegisterTournament = () => {
  return (
    <section
      id="buyTickets"
      className="premio-section"
      style={{ height: "138px" }}
    >
      <div
        className="premio-container"
        style={{ backgroundImage: `url(${imagen2})`, minHeight: "138px", backgroundSize: "100% auto", objectFit:"contain", overflow: "clip", overflowClipMargin: "content-box" }}
      >
        <p className="guild-font" style={{ fontSize: "12px", color: "white", marginTop: "20px" }}>
          SI LLEGASTE HASTA AQUÍ,
        </p>
        <p
          className="guild-font"
          style={{ fontSize: "12px", color: "white", paddingBottom: "5px" }}
        >
          REGISTRATE EN EL TORNEO
        </p>
        <>
          <img
            src={comprarBoletos}
            style={{ height: "64px" }}
            alt="Comprar Boletos"
          />
          ´
          <p
            className="guild-font"
            style={{
              fontSize: "12px",
              color: "#EDCC00",
              position: "absolute",
              marginTop: "40px",
            }}
          >
            REGISTRO AL TORNEO
          </p>
        </>
      </div>
    </section>
  );
};

export default RegisterTournament;
