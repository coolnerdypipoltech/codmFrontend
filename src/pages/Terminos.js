import React, { useEffect } from "react";

import "./PrivacyPage.css";
import image from "../assets/registration/Background_Registro.png";
import buttonlayout from "../assets/registration/Button_Continuar.png";
import brushNavMenu from "../assets/navMenu/IMG_BRUSH.png";
import { useNavigate } from "react-router";
const PrivacyPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="instructions-page"
      style={{ backgroundImage: `url(${image})`, padding: "20px" }}
    >
      <div style={{ width: "100%", minHeight: "100px" }}></div>

      <div style={{ height: "100%", display: "flex", justifyContent: "center" , flexDirection:"column", alignItems: "center"}}>
        <img
          loading="lazy"
          src={brushNavMenu}
          style={{
            overflow: "visible",
            objectFit: "cover",
            width: "100%",
            opacity: 1,
            
            maxWidth: "400px",
          }}
          alt="Close"
        />
        <p className="privacy-policy-text" style={{ color: "white" }}>
          POLÍTICA DE PRIVACIDAD
        </p>
      </div>

          <p className="privacy-policy-bodyText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<p className="privacy-policy-bodyText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <>
        <div
          onClick={() => navigate("/")}
          style={{
            maxHeight: "70px",
            display: "flex",
            justifyContent: "center",
          }}
          className="buttonLayoutInstructions"
        >
          <div>
            <img loading="lazy" src={buttonlayout} style={{ height: "64px" }} alt="Cerrar" />

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

export default PrivacyPage;
