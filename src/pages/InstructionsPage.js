import React, { useEffect } from "react";

import "./InstructionsPage.css";
import image from "../assets/instrucctions/Instrucciones_paso a paso UID.png";
import buttonlayout from "../assets/registration/Button_Continuar.png";
import { useNavigate } from "react-router";
const InstructionsPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="instructions-page">
      <div style={{ width: "100%", minHeight: "100px" }}></div>
      <div className="instructions-content">
        <img
          src={image}
          alt="Instructions Background"
          className="instructions-image"
          style={{ width: "100%", objectFit: "contain" }}
        ></img>
      </div>
      <>
        <div
          onClick={() => navigate("/codmFrontend/registro")}
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
      </>
    </div>
  );
};

export default InstructionsPage;
