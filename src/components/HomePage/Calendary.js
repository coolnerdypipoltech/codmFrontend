import React, { useState, useEffect } from "react";
import "./Calendary.css";
import fondo from "../../assets/main/IMG_Texture_Gran_final.png";
import fondoDesktop from "../../assets/desktop/Main/IMG_Texture_Granfinal_web.png";
import brushNavMenu from "../../assets/main/IMG_BRUSHCalendary.png";
import fecha1 from "../../assets/main/IMG_Fecha.png";
import fechaDesktop from "../../assets/desktop/Main/IMG_Fecha_web.png";
import imgband1 from "../../assets/main/IMG_Band.png";
import imgband2 from "../../assets/desktop/Main/IMG_Band_web.png";

import { useViewport } from "../../context/ViewportContext";

const Calendary = () => {
  const { isMobile } = useViewport();

  const backgroundImage = isMobile ? fondo : fondoDesktop;
  const fecha = isMobile ? fecha1 : fechaDesktop;
  const imgband = isMobile ? imgband1 : imgband2;
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
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
    <>
      <div style={{ minHeight: isMobile ? "10px" : "100px", width: "100%", backgroundColor: "#FFB838" }}></div>
      <section
        id="calendario"
        className="calendario-section"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: isMobile ? "100% auto" : " auto 100%",
          height: isMobile ? "auto" : "38vw",
          objectFit: "cover",
          overflow: "clip",
          overflowClipMargin: "content-box",
          padding: isMobile ? "40px 0px" : "40px 0px 0px",
        }}
      >
        <div style={{ minHeight: isMobile ? "30px" : "60px", width: "100%" }}></div>
        <div className="brush-text">
          <img
            loading="lazy"
            src={brushNavMenu}
            className="calendary-brush"
            alt="Close"
          />
          <p className="calendary-title">LA GRAN FINAL</p>
        </div>
        <img
          loading="lazy"
          src={fecha}
          alt="Fecha"
          className="calendary-date"
        />
        <div className="countdown-container">
          <div className="countdown">
            <div className="countdown-container">
              <div className="countdown-item">
                <span className="countdown-value">{timeLeft.days}</span>
              </div>
              <span className="countdown-label">D</span>
            </div>

            <div
              className="countdown-container"
              style={{ left: isMobile ? "5px" : "0px" }}
            >
              <div className="countdown-item">
                <span className="countdown-value">{timeLeft.hours}</span>
              </div>
              <span className="countdown-label">HRS</span>
            </div>
            <p
              className="guild-font"
              style={{
                color: "white",
                fontSize: isMobile ? "25px" : "45px",
                position: "relative",
                left: isMobile ? "8px" : "0px",
                top: isMobile ? "-12px" : "-4px",
              }}
            >
              :
            </p>
            <div
              className="countdown-container"
              style={{
                left: isMobile ? "5px" : "0px",
                width: isMobile ? "70px" : "100px",
              }}
            >
              <div className="countdown-item">
                <span className="countdown-value">{timeLeft.minutes}</span>
              </div>
              <span className="countdown-label">MIN</span>
            </div>
            <p
              className="guild-font"
              style={{
                color: "white",
                fontSize: isMobile ? "25px" : "45px",
                position: "relative",
                left: "0px",
                top: isMobile ? "-12px" : "-4px",
              }}
            >
              :
            </p>
            <div
              className="countdown-container"
              style={{
                left: isMobile ? "5px" : "0px",
                width: isMobile ? "60px" : "100px",
              }}
            >
              <div className="countdown-item">
                <span className="countdown-value">{timeLeft.seconds}</span>
              </div>
              <span className="countdown-label">SEG</span>
            </div>
          </div>
        </div>
        <div id='location' style={{position: "absolute", width: "100%", display: "flex", flexDirection: "row-reverse"}}> <img loading="lazy" src={imgband} alt="Band" className='image-band5' /></div>
      
      </section>
    </>
  );
};

export default Calendary;
