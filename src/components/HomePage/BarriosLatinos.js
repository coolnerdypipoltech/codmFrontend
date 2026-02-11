import React from "react";
import "./BarriosLatinos.css";
import splashArt from "../../assets/main/IMG_Splash_1Home.png";
const BarriosLatinos = () => {
  return (
    <section
      id="barrios-latinos"
      className="barrios-latinos-section"
    >
      <img loading="lazy" src={splashArt} style={{marginTop: "80px"}} alt="Splash Art" />

    </section>
  );
};

export default BarriosLatinos;
