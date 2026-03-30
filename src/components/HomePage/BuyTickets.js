import React from "react";
import imagen3 from "../../assets/desktop/Main/IMG_texture_RG_web.webp";
import comprarBoletos from "../../assets/main/Button_Comprar Boletos.webp";

import "./BuyTickets.css";
import { useViewport } from "../../context/ViewportContext";
const BuyTickets = ({type}) => {
  const image4 = "https://res.cloudinary.com/dqsdjfi92/image/upload/v1774553994/IMG_texture_RG2_xekfjn.webp"
  const imagen2 = "https://res.cloudinary.com/dqsdjfi92/image/upload/v1774553994/IMG_texture_RG_gbax0v.webp"
  const image5 = "https://res.cloudinary.com/dqsdjfi92/image/upload/v1774554005/Button_Comprar_Boletos_clpbn0.webp"
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
            COMPRA BOLETOS
          </p>
          <p className="buyTickets-text" style={{color: "black"}}>PARA LA FINAL EN VIVO</p>
          {true && <div onClick={() => window.open("https://feverup.com/m/593821", "_blank")} style={{width: "auto", cursor: "pointer"}}>
            <img
              
              loading="lazy"
              src={comprarBoletos}
              className="buyTickets-Image"
              style={{width: "100%"}}
              alt="Comprar Boletos"
            />

            <p className="buyTickets-buttonText">COMPRAR BOLETOS</p>
          </div>}
        </div>
      </div>
    </section>
  );
};

export default BuyTickets;
