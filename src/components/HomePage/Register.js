import React, { useState, useEffect } from "react";
import "./Register.css";
import fondo from "../../assets/registration/Button_Continuar.webp";
import highlight from "../../assets/desktop/Header/Spray_graffbutton.webp"
import { useNavigate } from "react-router";
const Footer = () => {
  const navigate = useNavigate();
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const footerElement = document.querySelector('#footer');
    
    if (!footerElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsFooterVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(footerElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        onClick={() => navigate('/registro')}
        className="register-container"
        style={{
          opacity: isFooterVisible ? 0 : 1,
          pointerEvents: isFooterVisible ? 'none' : 'auto',
          transition: 'opacity 0.3s ease'
        }}
      >
        <img loading="lazy" src={fondo} alt="img" className="register-image"/>
        <img loading="lazy" src={highlight} alt="" className="register-highlight"/>
        <p className="guild-font register-text">REGISTRO </p>
        <p className="guild-font register-text">AL TORNEO </p>
      </div>

      <div
        onClick={handleBackToTop}
        className="register-container register-backtop"
        style={{
          opacity: isFooterVisible ? 1 : 0,
          pointerEvents: isFooterVisible ? 'auto' : 'none',
          transition: 'opacity 0.3s ease'
        }}
      >
        <img loading="lazy" src={fondo} alt="volver arriba" className="register-image"/>
        <img loading="lazy" src={highlight} alt="" className="register-highlight"/>
        <p className="guild-font register-text">VOLVER</p>
        <p className="guild-font register-text">ARRIBA</p>
      </div>
    </>
  );
};

export default Footer;
