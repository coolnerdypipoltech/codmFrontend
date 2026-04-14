import React from "react";
import "./BarriosLatinos.css";
import splashArt from "../../assets/main/IMG_Splash_1Home.webp";
import splashArtDesktop from "../../assets/desktop/Main/IMG_Splash_1Home_web.webp";
import { useViewport } from "../../context/ViewportContext";

import fondo from "../../assets/main/Button_Registro al torneo.webp";
import highlight from "../../assets/desktop/Header/Spray_graffbutton.webp"

const BarriosLatinos = () => {
  const { isMobile } = useViewport();

  const splash = isMobile ? splashArt : splashArtDesktop;

  return (
    <section
      id="barrios-latinos"
      className="barrios-latinos-section"
    >
      <img src={splash} style={{marginTop: "80px"}} alt="Splash Art" />
      
      
      <div
        onClick={() => { window.gtag?.('event', 'click_promocion_comprar_entradas', { event_category: 'engagement', event_label: 'floating_button' }); window.open("https://feverup.com/m/593821", "_blank"); }}
        className="survey-container"
        style={{
          opacity: 1,
          pointerEvents: 'auto',
          transition: 'opacity 0.3s ease',
          cursor: "pointer"
        }}
      >
        <img loading="lazy" src={fondo} alt="img" className="survey-image"/>
        <img loading="lazy" src={highlight} alt="" className="survey-highlight"/>
        <p className="guild-font survey-text">COMPRAR ENTRADAS</p>
      </div>



    </section>
  );
};

export default BarriosLatinos;
