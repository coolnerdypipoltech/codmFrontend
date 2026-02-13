import React from "react";
import "./Footer.css";
import facebook from "../../assets/footer/Icon_Facebook.svg";
import instagram from "../../assets/footer/Icon_instagram.svg";
import twitter from "../../assets/footer/Icon_X.svg";
import tiktok from "../../assets/footer/Icon_Tiktok.svg";
import yt from "../../assets/footer/Icon_Youtube.svg";
import { useNavigate } from "react-router";

import { useViewport } from "../../context/ViewportContext";

const Footer = () => {
  const navigate = useNavigate();
  const { isMobile } = useViewport();




  return (
    <footer id="footer" className="footer-section">
      <div className="footer-content" style={{marginTop: isMobile ? "40px" : "40px", marginBottom: isMobile ? "10px" : "40px"}}>
        {/* Social Media Icons */}
        <p className="footer-Title">MANTENTE AL DÍA</p>
        <div className="social-media">
          <img loading="lazy" src={instagram} onClick={() => window.open("https://www.instagram.com/callofdutymobilelatam/")} className="social-icon" alt="Instagram" />
          <img loading="lazy" src={facebook} onClick={() => window.open("https://www.facebook.com/LATAMCallOfDutyMobile")} className="social-icon" alt="Facebook" />
          <img loading="lazy" src={tiktok} onClick={() => window.open("https://www.tiktok.com/@callofdutymobile_latam")} className="social-icon" alt="TikTok" />
          <img loading="lazy" src={yt} onClick={() => window.open("https://www.youtube.com/@LATAMCallOfDutyMobile")} className="social-icon" alt="YouTube" />
          <img loading="lazy" src={twitter} onClick={() => window.open("https://x.com/CODMobileLATAM")} className="social-icon" alt="Twitter" />
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <button className="footer-link-btn" onClick={() => navigate("/faqs")}>Preguntas frecuentes</button>
          <button className="footer-link-btn" onClick={() => navigate("/terms")} >Términos y condiciones</button>
          <button className="footer-link-btn" onClick={() => navigate("/privacy")}>Política de privacidad</button>
          
        </div>
        <div style={{minHeight: "10px"}}></div>
        <p className="footer-text">©/TM/®2026 Activision Publishing, Inc. </p>
       <div style={{minHeight: isMobile ? "30px" : "0px"}}></div>
      </div>
    </footer>
  );
};

export default Footer;
