import React from "react";
import imagen2 from "../../assets/main/IMG_texture_RG.png";
import imagen3 from "../../assets/desktop/Main/IMG_texture_RG_web.png";
import image4 from "../../assets/main/IMG_texture_RG2.png";
import image5 from "../../assets/desktop/Main/IMG_texture_RG_webT2.png";
import comprarBoletos from "../../assets/main/Button_Comprar Boletos.png";

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
          <p className="buyTickets-text" style={{ marginTop: "0px" }}>
            DEL BARRIO PARA EL MUNDO,
          </p>
          <p className="buyTickets-text">ESTO ES BARRIOS LATINOS</p>
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
