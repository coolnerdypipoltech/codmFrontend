import React from "react";
import "./Register.css";
import fondo from "../../assets/Fondo.png";
import { useNavigate } from "react-router";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate('/codmFrontend/registro')} style={{backgroundImage: `url(${fondo})`}} className="register-container">
      
    </div>
  );
};

export default Footer;
