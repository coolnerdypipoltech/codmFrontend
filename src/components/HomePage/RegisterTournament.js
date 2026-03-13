import React from "react";
import imagen2 from "../../assets/main/IMG_texture_RGTM.webp";
import imagen3 from "../../assets/desktop/Main/IMG_texture_RG_RegistrowebT.webp";
import comprarBoletos from "../../assets/main/button socialM.webp";
import icon1 from "../../assets/main/Button_Instagram.webp";
import icon2 from "../../assets/main/Button_Facebook.webp";

import { useViewport } from "../../context/ViewportContext";
import { useNavigate } from "react-router-dom";
const RegisterTournament = () => {
  const navigate = useNavigate();
  const { isMobile } = useViewport();

  const backgroundImage = isMobile ? imagen2 : imagen3;

  return (

     <section id="buyTickets" className="buyTickets-section" style={{backgroundColor: "#cbc1b7"}}>
      {!isMobile && <div style={{minHeight: "90px", width: "100%"}}></div>}
      <div className="buyTickets-container" style={{paddingLeft: "30px", paddingRight: "30px"}} >
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
            ¡CHECA CÓMO SE PUSIERON  <br></br> LOS REGIONAL QUALIFIERS!
          </p>
          <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center", flexWrap: "wrap"}}>
            <div onClick={() => window.open("https://www.instagram.com/reel/DVw3Ux2Fqjs/", "_blank")} style={{width: "50%", display: "flex", justifyContent: "center", alignItems: "center", alignContent: "center", flexWrap: "wrap", flexDirection: "column",  cursor: "pointer"}}>
            <img
              loading="lazy"
              src={icon1}
              className="buyTickets-Image"
              alt="Comprar Boletos"
              style={{width: "auto"}}
            />
          </div>
          <div onClick={() => window.open("https://www.facebook.com/share/r/1FrrDezaoq/", "_blank")} style={{width: "50%", display: "flex", justifyContent: "center", alignItems: "center", alignContent: "center", flexWrap: "wrap", flexDirection: "column",  cursor: "pointer"}}>
            <img
              loading="lazy"
              src={icon2}
              className="buyTickets-Image"
              alt="Comprar Boletos"
              style={{width: "auto"}}
            />
          </div>
          
          </div>
          
        </div>
        <div id="calendario" style={{position: "relative", top: "-200px"}}></div>
      </div>
    </section>
  );
};

export default RegisterTournament;
