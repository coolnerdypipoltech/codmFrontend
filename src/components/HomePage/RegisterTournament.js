import React from "react";
import imagen2 from "../../assets/main/IMG_texture_RGTM.webp";
import imagen3 from "../../assets/desktop/Main/IMG_texture_RG_RegistrowebT.webp";
import comprarBoletos from "../../assets/desktop/Registro/Button_Registro al torneo_web.webp";

import { useViewport } from "../../context/ViewportContext";
import { useNavigate } from "react-router-dom";
const RegisterTournament = () => {
  const navigate = useNavigate();
  const { isMobile } = useViewport();

  const backgroundImage = isMobile ? imagen2 : imagen3;

  return (

     <section id="buyTickets" className="buyTickets-section" style={{backgroundColor: "#cbc1b7"}}>
      {!isMobile && <div style={{minHeight: "90px", width: "100%"}}></div>}
      <div className="buyTickets-container" >
        <img
          className="buyTickets-background2"
          src={backgroundImage}
          alt="Background"
        ></img>
        <div
          style={{
            zIndex: "10",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <p className="buyTickets-text" style={{ marginTop: isMobile ? "40px" : "50px", color: "black" }}>
            SI LLEGASTE HASTA AQUÍ,
          </p>
          <p className="buyTickets-text" style={{ color: "black" }}>REGÍSTRATE EN EL TORNEO</p>
          <div onClick={() => navigate('/registro')} style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center", alignContent: "center", flexWrap: "wrap", flexDirection: "column",  cursor: "pointer"}}>
            <img
              loading="lazy"
              src={comprarBoletos}
              className="buyTickets-Image"
              alt="Comprar Boletos"
              style={{width: "100%", maxWidth: "300px"}}
            />

            <p className="buyTickets-buttonText">REGISTRO AL TORNEO</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterTournament;
