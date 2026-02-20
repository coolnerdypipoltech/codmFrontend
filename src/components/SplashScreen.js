import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./SplashScreen.css";
import loadingbg from "../assets/loading/Brush_Loading.webp";
import fondoMobil from "../assets/loading/IMG_Background_Cargando.webp"
import { useViewport } from "../context/ViewportContext";
let splashShown = false;

function SplashScreen({ children }) {
  const location = useLocation();
    const { isMobile } = useViewport();


  const isHome =
    location.pathname === "/" ||
    location.pathname === "/codmFrontend" ||
    location.pathname === "/codmFrontend/";

  const [visible, setVisible] = useState(isHome && !splashShown);

  useEffect(() => {
    if (!visible) return;
    splashShown = true;
    const timer = setTimeout(() => {
      setVisible(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, [visible]);

  if (visible) {
    return (
      <div
              style={{ backgroundImage: `url(${fondoMobil})`, backgroundPosition: "center", backgroundSize: "auto 100%" }}
   
        className="splash-screen"
   >
        <div style={{ width: "100%", minHeight: "100px", position: "absolute", bottom: "100px", display: "flex", justifyContent: "center" }}>
            <img src={loadingbg} alt="Loading" style={{position: "absolute", width: "300px", bottom: "-19px", 
          
            }}/>
            <p className="guild-font loading-text" style={{position: "absolute", bottom: "20px", color: "white", fontSize: "20px"}}>Cargando</p>
        </div>
       
      </div>
    );
  }

  return children;
}

export default SplashScreen;
