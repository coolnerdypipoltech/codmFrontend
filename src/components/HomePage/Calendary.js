import React, { useState, useEffect } from 'react';
import './Calendary.css';

const Calendary = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Fecha de la gran final (cambia esta fecha según sea necesario)
    const finalDate = new Date('2026-06-30T00:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = finalDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((distance / 1000 / 60) % 60),
          seconds: Math.floor((distance / 1000) % 60)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="calendario" className="calendario-section">
      <div className="calendario-content">
  
        <div className="fecha-text">
          <h2>Gran Final</h2>
          <p className="fecha-display">30 de Junio, 2026</p>
        </div>
      </div>

      <div className="countdown-container">
        <h3>Tiempo Restante</h3>
        <div className="countdown">
          <div className="countdown-item">
            <span className="countdown-value">{timeLeft.days}</span>
            <span className="countdown-label">Días</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-value">{timeLeft.hours}</span>
            <span className="countdown-label">Horas</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-value">{timeLeft.minutes}</span>
            <span className="countdown-label">Minutos</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-value">{timeLeft.seconds}</span>
            <span className="countdown-label">Segundos</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calendary;
