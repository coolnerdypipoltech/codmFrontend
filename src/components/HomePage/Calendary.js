import React, { useState, useEffect } from "react";
import "./Calendary.css";
import fondo from "../../assets/main/IMG_Texture_Gran_final.png";
import brushNavMenu from "../../assets/main/IMG_BRUSH.png";
import fecha from "../../assets/main/IMG_Fecha.png";
const Calendary = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Fecha de la gran final (cambia esta fecha según sea necesario)
    const finalDate = new Date("2026-04-16T00:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = finalDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((distance / 1000 / 60) % 60),
          seconds: Math.floor((distance / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="calendario"
      className="calendario-section"
      style={{
        backgroundImage: `url(${fondo})`,
        backgroundSize: "100% auto",
        objectFit: "contain",
        overflow: "clip",
        overflowClipMargin: "content-box",
        padding: "40px 0px 0px"
      }}
    >
      <div className="brush-text" >
        <img
          src={brushNavMenu}
          style={{
            width: "300px",
            height: "50px",
            overflowY: "visible",
            objectFit: "cover",
            
            alignSelf: "center", minHeight: "50px"
          }}
          alt="Close"
        />
        <p style={{color: "white", fontSize: "24px", position: "relative", top: "-40px"}} className="guild-font">LA GRAN FINAL</p>
      </div>
      <img src={fecha} alt="Fecha" style={{ width: "150px", height: "auto", position: "relative", top: "-45px" }} />
      <div className="countdown-container">
        <div className="countdown">
          <div className="countdown-container">
            <div className="countdown-item">
              <span className="countdown-value">{timeLeft.days}</span>
            </div>
            <span className="countdown-label">D</span>
          </div>

          <div className="countdown-container" style={{left: "5px"}}>
            <div className="countdown-item">
              <span className="countdown-value">{timeLeft.hours}</span>
            </div>
            <span className="countdown-label">HRS</span>
          </div>
          <p className="guild-font" style={{color: "white", fontSize: "25px", position: "relative", left: "8px", top: "-12px"}}>:</p>
          <div className="countdown-container" style={{left: "5px", width: "70px"}}>
            <div className="countdown-item">
              <span className="countdown-value">{timeLeft.minutes}</span>
            </div>
            <span className="countdown-label">MIN</span>
          </div>
          <p className="guild-font" style={{color: "white", fontSize: "25px", position: "relative", left: "0px", top: "-12px"}}>:</p>
          <div className="countdown-container" style={{left: "-0px", width: "60px"}}>
            <div className="countdown-item">
              <span className="countdown-value">{timeLeft.seconds}</span>
            </div>
            <span className="countdown-label">SEG</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calendary;
