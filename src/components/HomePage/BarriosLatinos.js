import React from "react";
import "./BarriosLatinos.css";

import splashArtDesktop from "../../assets/desktop/Main/IMG_Splash_1Home_web.webp";
import { useViewport } from "../../context/ViewportContext";

const BarriosLatinos = () => {
  const splashArt = "https://res.cloudinary.com/dqsdjfi92/image/upload/v1774553997/IMG_Splash_1Home_hvishx.webp";

  const { isMobile } = useViewport();

  const splash = isMobile ? splashArt : splashArtDesktop;

  return (
    <section
      id="barrios-latinos"
      className="barrios-latinos-section"
    >
      <img src={splash} style={{marginTop: "80px"}} alt="Splash Art" />
      

    </section>
  );
};

export default BarriosLatinos;
