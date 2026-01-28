import React from 'react';
import './Location.css';

const Location = () => {
  return (
    <section id="locacion" className="locacion-section">
      <h2>Locación</h2>
      <div className="locacion-container">
        <div className="locacion-info">
          <h3>Lugar de Encuentro</h3>
          <p className="venue-name">Centro de Convenciones Principal</p>
          <p className="venue-address">Calle Principal 123, Ciudad Principal</p>
          <p className="venue-details">Teléfono: +1 (555) 123-4567</p>
        </div>
        <div className="map-container">
          <iframe
            width="100%"
            height="400"
            title="Mapa de la locación del evento"
            frameBorder="0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.0000000000005!2d-74.00000000000000!3d40.71000000000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI2JzI0LjAiTiA3NMKwMDAnMDAwLjAiVw!5e0!3m2!1ses!2smx!4v1000000000000"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Location;
