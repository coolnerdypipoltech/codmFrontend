import React, { useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "../components/HomePage/Navbar";
import BarriosLatinos from "../components/HomePage/BarriosLatinos";
import Partners from "../components/HomePage/Partners";
import LosBarrios from "../components/HomePage/LosBarrios";
import Participate from "../components/HomePage/Participate";
import Prize from "../components/HomePage/Prize";
import Calendary from "../components/HomePage/Calendary";
import Location from "../components/HomePage/Location";
import Footer from "../components/HomePage/Footer";
import MainHost from "../components/HomePage/MainHost";
import Register from "../components/HomePage/Register";
import "./HomePage.css";
import BuyTickets from "../components/HomePage/BuyTickets";
import RegisterTournament from "../components/HomePage/RegisterTournament";
import Qualifiers from "../components/HomePage/Qualifiers";
import buttonlayout from "../assets/registration/Button_Continuar.webp";
import backgroundPopUp from "../assets/Home/PopUpMob.webp"
import backgroundPopUDesktop from "../assets/Home/PopUpDesk.webp";
import stickerPopUp from "../assets/Home/Hand_CODM.webp";
import textImage from "../assets/Home/Text_pop_up.webp"
import { useViewport } from "../context/ViewportContext";
///<MainHost />
const HomePage = () => {
  const [showPopUp, setShowPopUp] = useState(true);
  const navigate = useNavigate();
    const { isMobile } = useViewport();
  return (
    <div className="home-page">
      {showPopUp && (
        <div className="popup-overlay" onClick={() => setShowPopUp(false)}>
          <div className={`popup-content`} style={{backgroundImage: `url(${isMobile ? backgroundPopUp : backgroundPopUDesktop})`, backgroundSize: "100% 100%", backgroundPosition: "center", maxWidth: isMobile ? "393px" : "700px", minHeight: "550px", display: "flex", flexDirection: "column", justifyContent: "center", backgroundColor: "transparent"}} onClick={(e) => e.stopPropagation()}>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",

              }}
            ><img src={stickerPopUp} alt="Sticker" style={{ top: "10px", right: "10px", height: isMobile ? "150px" : "200px" }} /></div>
            
            <div
              
              style={{ textAlign: "left", width: "100%", padding: "0 10px",  }}
            >
 </div>
 <img src={textImage} style={{marginBottom: "20px", maxWidth: isMobile ? "100%" : "350px", alignSelf: "center"}} alt="Text" />
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                flexDirection: isMobile ? "column" : "row",
              }}
            >
              <div
                onClick={() => navigate("/registro")}
                style={{ maxHeight: "70px", cursor: "pointer" }}
              >
                <img
                  loading="lazy"
                  src={buttonlayout}
                  style={{ height: "74px", width: "100%", minWidth: isMobile ? "0px" : "270px" }}
                  alt="Cerrar"
                />

                <p
                  className="guild-font"
                  style={{
                    fontSize: isMobile ? "12px" : "13px",
                    color: "#EDCC00",
                    position: "relative",
                    top: "-50px",
                  }}
                >
                  REGÍSTRATE AL TORNEO
                </p>
              </div>
              <div
                onClick={() => setShowPopUp(false)}
                style={{ maxHeight: "70px", cursor: "pointer"  }}
              >
                <img
                  loading="lazy"
                  src={buttonlayout}
                  style={{ height: "74px", width: "100%", minWidth: isMobile ? "0px" : "270px" }}
                  alt="Cerrar"
                />

                <p
                  className="guild-font"
                  style={{
                    fontSize: isMobile ? "12px" : "13px",
                    color: "#EDCC00",
                    position: "relative",
                    top: "-50px",
                  }}
                >
                  CONTINUAR
                </p>
                
              </div>
              
            </div>
            <div style={{ minWidth: "100%", minHeight: "30px"}}></div>
          </div>
        </div>
      )}
      <BarriosLatinos />
      <BuyTickets />
      <LosBarrios />
      <MainHost />

      <Participate />
      <Prize />
      <Qualifiers />
      <RegisterTournament />
      <Calendary />
      <Location />
      <BuyTickets type={"1"} />
      <Register />
    </div>
  );
};

export default HomePage;
