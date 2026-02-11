import React, { useEffect } from "react";

import "./FAQsPage.css";
import image from "../assets/Preguntas frecuentes.png";
import background from "../assets/faqs/background_Losbarrios.png";
import buttonlayout from "../assets/registration/Button_Continuar.png";
import { useNavigate } from "react-router";
import FAQsItem from "../components/FAQsItem";
const FAQsPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{backgroundImage: `url(${background})` , backgroundSize: "cover", backgroundPosition: "center", minHeight: "100vh", display: "flex", flexDirection: "column"}}>
      <div style={{ width: "100%", minHeight: "100px" }}></div>
      
      <div style={{minHeight: "30px"}}></div>

      <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
        <img src={image} alt="title" style={{width: "80%", maxWidth: "500px"}}></img>
      </div>
    
      <div style={{width:"80%" , display: "flex", flexDirection: "column", alignContent: "center", justifyContent: "center", marginLeft: "10%", marginTop: "10%", gap: "16px", overflowY: "scroll", overflowX: "clip"}}>
        <FAQsItem title={"Qué es barrios latinos"} text={"Barrios Latinos es una comunidad que busca conectar y apoyar a los latinos en diferentes áreas."}></FAQsItem>
        <FAQsItem title={"Qué es barrios latinos"} text={"Barrios Latinos es una comunidad que busca conectar y apoyar a los latinos en diferentes áreas."}></FAQsItem>
        <FAQsItem title={"Qué es barrios latinos"} text={"Barrios Latinos es una comunidad que busca conectar y apoyar a los latinos en diferentes áreas."}></FAQsItem>
        <FAQsItem title={"Qué es barrios latinos"} text={"Barrios Latinos es una comunidad que busca conectar y apoyar a los latinos en diferentes áreas."}></FAQsItem>
              <FAQsItem title={"Qué es barrios latinos"} text={"Barrios Latinos es una comunidad que busca conectar y apoyar a los latinos en diferentes áreas."}></FAQsItem>
        <FAQsItem title={"Qué es barrios latinos"} text={"Barrios Latinos es una comunidad que busca conectar y apoyar a los latinos en diferentes áreas."}></FAQsItem>
        <FAQsItem title={"Qué es barrios latinos"} text={"Barrios Latinos es una comunidad que busca conectar y apoyar a los latinos en diferentes áreas."}></FAQsItem>
                <FAQsItem title={"Qué es barrios latinos"} text={"Barrios Latinos es una comunidad que busca conectar y apoyar a los latinos en diferentes áreas."}></FAQsItem>
        <FAQsItem title={"Qué es barrios latinos"} text={"Barrios Latinos es una comunidad que busca conectar y apoyar a los latinos en diferentes áreas."}></FAQsItem>
        <FAQsItem title={"Qué es barrios latinos"} text={"Barrios Latinos es una comunidad que busca conectar y apoyar a los latinos en diferentes áreas."}></FAQsItem>
        
      </div>

      <div style={{paddingTop: "20px"}}>
        <div
          onClick={() => navigate("/codmFrontend/")}
          style={{ maxHeight: "70px", display: "flex", justifyContent: "center" }}
          className="buttonLayoutInstructions"
        >
          <div>
          <img src={buttonlayout} style={{ height: "64px" }} alt="Cerrar" />

          <p
            className="guild-font"
            style={{
              fontSize: "12px",
              color: "#EDCC00",
              position: "relative",
              top: "-43px",
              right: "-33px",
            }}
          >
            REGRESAR
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQsPage;
