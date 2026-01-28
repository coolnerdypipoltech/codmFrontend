import React from 'react';
import './MainHost.css';
import imagen from "../../assets//Fondo.png";
const MainHost = () => {
  return (
    <section id="mainhost" className="mainhost-section">
      <div className="mainhost-container">
        <img
          src= {imagen}
          alt="Main Host"
          className="mainhost-image"
        />
      </div>
    </section>
  );
};

export default MainHost;
