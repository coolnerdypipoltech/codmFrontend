import React from "react";
import "./BarriosLatinos.css";
import splashArt from "../../assets/main/IMG_Splash_1Home.png";
const BarriosLatinos = () => {
  return (
    <section
      id="barrios-latinos"
      className="barrios-latinos-section"
      style={{backgroundImage: `url(${splashArt})`, marginTop: "80px", backgroundPosition: "center", backgroundSize: "100% auto", objectFit:"contain", overflow: "clip", overflowClipMargin: "content-box"}}
    >

    </section>
  );
};

export default BarriosLatinos;
