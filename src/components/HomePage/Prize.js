import React from 'react';
import './Prize.css';
import imagen2 from "../../assets//Fondo.png";
const Prize = () => {
  return (
    <section id="premio" className="premio-section">
      <h2>Premio</h2>
      <div className="premio-container">
        <img
          src={imagen2}
          alt="Premio"
          className="premio-image"
        />
      </div>
    </section>
  );
};

export default Prize;
