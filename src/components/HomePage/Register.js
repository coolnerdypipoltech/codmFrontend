import React, { useState, useEffect } from "react";
import "./Register.css";
import fondo from "../../assets/registration/Button_Continuar.png";
import { useNavigate } from "react-router";
const Footer = () => {
  const navigate = useNavigate();
  const [isFooterVisible, setIsFooterVisible] = useState(false);

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
    <div 
      onClick={() => navigate('/codmFrontend/registro')} 
      className="register-container"
      style={{
        opacity: isFooterVisible ? 0 : 1,
        pointerEvents: isFooterVisible ? 'none' : 'auto',
        transition: 'opacity 0.3s ease'
      }}
    >
      <img src={fondo} alt="img" style={{height: "70px", position: "relative", width: "auto", left: "50px"}}/>
      <p className="guild-font" style={{position: "relative", color: "white", fontSize: "10px", left: "27.5PX", top: "-52.5px" }}>REGISTRO </p>
      <p className="guild-font" style={{position: "relative", color: "white", fontSize: "10px", left: "27.5PX", top: "-52.5px" }}>AL TORNEO </p>
    </div>
  );
};

export default Footer;
