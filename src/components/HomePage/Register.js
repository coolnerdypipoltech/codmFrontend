import React from "react";
import "./Register.css";
import fondo from "../../assets/registration/Button_Continuar.png";
import { useNavigate } from "react-router";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate('/codmFrontend/registro')} className="register-container">
      <img src={fondo} alt="img" style={{height: "70px", position: "relative", width: "auto", left: "50px"}}/>
      <p className="guild-font" style={{position: "relative", color: "white", fontSize: "10px", left: "27.5PX", top: "-52.5px" }}>REGISTRO </p>
      <p className="guild-font" style={{position: "relative", color: "white", fontSize: "10px", left: "27.5PX", top: "-52.5px" }}>AL TORNEO </p>
    </div>
  );
};

export default Footer;
