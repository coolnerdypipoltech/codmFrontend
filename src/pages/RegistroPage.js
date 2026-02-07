import React from 'react';
import RegistrationForm from '../components/RegistrationForm';
import './RegistroPage.css';
import Navbar from '../components/HomePage/Navbar';
import backgroundImage from "../assets/registration/Background_Registro.png";
import graffiti1 from "../assets/registration/TAGS_graffitii_Barras.png"
import graffiti2 from "../assets/registration/TAGS_graffitii_replica.png";
const RegistroPage = () => {
  return (
    <div className="registro-page">
      <Navbar />
      <div className="registro-container" style={{backgroundImage: `url(${backgroundImage})`, minHeight: "138px", backgroundSize: "cover ", objectFit:"contain", overflow: "clip", overflowClipMargin: "content-box"}}>
        <div style={{position: "absolute", zIndex: 0, top: "0px"}}>
          <img src={backgroundImage} style={{ minHeight: "1202px"}} alt="bgimage" />
        </div>
        <div style={{position: "absolute", zIndex: 1, top: "100px", left: "0px"}}>
          <img src={graffiti1} alt="Graffiti 1" style={{width: "300px"}} />
        </div>
        <div style={{position: "absolute", zIndex: 1, top: "900px", left: "0px"}}>
          <img src={graffiti2} alt="Graffiti 2" style={{width: "300px"}} />
        </div>
        <div style={{position: "absolute", zIndex: 1, top: "300px", right: "-10vw"}}>
          <img src={graffiti2} alt="Graffiti 2" style={{width: "300px"}} />
        </div>
        <div style={{position: "absolute", zIndex: 2, top: "10px", minHeight: "100dvh", display: "flex", justifyContent: "center", alignItems: "center"}}>
          <RegistrationForm></RegistrationForm>
        </div>
      </div>
    </div>
  );
};

export default RegistroPage;
