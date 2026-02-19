import React from "react";
import imagen2 from "../../assets/main/IMG_texture_RG.webp";
import imagen3 from "../../assets/desktop/Main/IMG_texture_RG_web.webp";
import image4 from "../../assets/main/IMG_texture_RG2.webp";
import image5 from "../../assets/desktop/Main/IMG_texture_RG_webT2.webp";
import comprarBoletos from "../../assets/main/Button_Comprar Boletos.webp";

import "./BuyTickets.css";
import { useViewport } from "../../context/ViewportContext";
const BuyTickets = ({type}) => {
  const { isMobile } = useViewport();
  let backgroundImage;
  if(type === "1"){
     backgroundImage = isMobile ? image4 : image5;
  }else{
     backgroundImage = isMobile ? imagen2 : imagen3;
  }


  

  return (
    <section id="buyTickets" className="buyTickets-section">
      <div className="buyTickets-container">

        
        <img
          className="buyTickets-background"
          style={{maxHeight: type === "1" && isMobile ? "280px" : "",}}
          src={backgroundImage}
          alt="Background"
        ></img>
        <div
          style={{
            zIndex: "10",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginBottom: "20px"
          }}
        >
          <p className="buyTickets-text" style={{ marginTop: "30px", color: "black", lineHeight: "0.6" }}>
            DEL BARRIO PARA EL MUNDO
          </p>
          <p className="buyTickets-text" style={{color: "black"}}>ESTO ES BARRIOS LATINOS</p>
          {false && <>
            <img
              loading="lazy"
              src={comprarBoletos}
              className="buyTickets-Image"
              alt="Comprar Boletos"
            />

            <p className="buyTickets-buttonText">COMPRAR BOLETOS</p>
          </>}
        </div>
      </div>
    </section>
  );
};

export default BuyTickets;
