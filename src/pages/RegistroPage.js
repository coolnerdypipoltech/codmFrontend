import React, { useEffect } from 'react';
import RegistrationForm from '../components/RegistrationForm';
import './RegistroPage.css';
import backgroundImageMobile from "../assets/registration/Background_Registro.png";
import backgroundImageDesktop from "../assets/desktop/Registro/Background_Registro_web.png";
import graffiti1 from "../assets/registration/TAGS_graffitii_Barras.png"
import graffiti2 from "../assets/registration/TAGS_graffitii_replica.png";
import { useViewport } from "../context/ViewportContext";
const RegistroPage = () => {

  const { isMobile } = useViewport();

  const backgroundImage = isMobile ? backgroundImageMobile : backgroundImageDesktop;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="registro-page">
      <div className="registro-container" style={{backgroundImage: `url(${backgroundImage})`,}} >

        <div style={{position: "absolute", overflow: "clip", zIndex: 1, top: "100px", left: "0px"}}>
          <img loading="lazy" src={graffiti1} alt="Graffiti 1" style={{width: "300px"}} />
        </div>
        <div style={{position: "absolute", overflow: "clip", zIndex: 1, top: "900px", left: "0px"}}>
          <img loading="lazy" src={graffiti2} alt="Graffiti 2" style={{width: "300px"}} />
        </div>
        <div style={{position: "absolute", overflow: "clip", zIndex: 1, top: "300px", width: "100%"}}>
          <img loading="lazy" src={graffiti2} alt="Graffiti 2" style={{width: "300px", overflow: "visible", position: "relative", right: "-64vw"}} />
        </div>
        <div style={{minHeight: "40px"}}></div>
        <div style={{position: "", overflow: "clip", zIndex: 2, top: "45px", minHeight: "100dvh", width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
          <RegistrationForm></RegistrationForm>
        </div>
        <div style={{minHeight: "20px"}}></div>
      </div>
    </div>
  );
};

export default RegistroPage;
