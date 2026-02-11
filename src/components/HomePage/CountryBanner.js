import React from 'react';
import './CountryBanner.css';
import imagen from "../../assets//Fondo.png";
const CountryBanner = () => {
  return (
    <section id="countrybanner" className="countrybanner-section">
      <div className="countrybanner-container">
        <img
          loading="lazy"
          src= {imagen}
          alt="Country Banner"
          className="countrybanner-image"
        />
      </div>
    </section>
    );
  };

export default CountryBanner;
