import React, { useState, useEffect } from "react";
import "./Calendary.css";
import fondo from "../../assets/Fondo.png";
const Calendary = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Fecha de la gran final (cambia esta fecha según sea necesario)
    const finalDate = new Date("2026-06-30T00:00:00").getTime();

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
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <div className="calendario-content">
        <div className="fecha-text">
          <h2>Gran Final</h2>
        </div>
      </div>

      <div className="countdown-container">
        <div className="countdown">
          <div className="countdown-container">
            <div className="countdown-item">
              <span className="countdown-value">{timeLeft.days}</span>
            </div>
            <span className="countdown-label">DÍAS</span>
          </div>

          <div className="countdown-container">
            <div className="countdown-item">
              <span className="countdown-value">{timeLeft.hours}</span>
            </div>
            <span className="countdown-label">HORAS</span>
          </div>
          <div className="countdown-container">
            <div className="countdown-item">
              <span className="countdown-value">{timeLeft.minutes}</span>
            </div>
            <span className="countdown-label">MINUTOS</span>
          </div>
          <div className="countdown-container">
            <div className="countdown-item">
              <span className="countdown-value">{timeLeft.seconds}</span>
            </div>
            <span className="countdown-label">SEGUNDOS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calendary;
