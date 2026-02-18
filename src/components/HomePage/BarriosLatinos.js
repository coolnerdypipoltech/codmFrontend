import React from "react";
import "./BarriosLatinos.css";
import splashArt from "../../assets/main/IMG_Splash_1Home.jpg";
import splashArtDesktop from "../../assets/desktop/Main/IMG_Splash_1Home_web.png";
import { useViewport } from "../../context/ViewportContext";

const BarriosLatinos = () => {
  const { isMobile } = useViewport();

  const splash = isMobile ? splashArt : splashArtDesktop;

  return (
    <section
      id="barrios-latinos"
      className="barrios-latinos-section"
    >
      <img loading="lazy" src={splash} style={{marginTop: "80px"}} alt="Splash Art" />
      

    </section>
  );
};

export default BarriosLatinos;
