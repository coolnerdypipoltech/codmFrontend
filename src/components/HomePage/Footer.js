import React from "react";
import "./Footer.css";
import facebook from "../../assets/footer/facebookLogo.svg";
import instagram from "../../assets/footer/InstagramLogo.svg";
import twitter from "../../assets/footer/TwitterLogo.svg";
import tiktok from "../../assets/footer/TiktokLogo.svg";
import yt from "../../assets/footer/YtLogo.svg";
import { useNavigate } from "react-router";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer id="footer" className="footer-section">
      <div className="footer-content">
        {/* Social Media Icons */}
        <p className="footer-Title">MANTENTE AL DÍA</p>
        <div className="social-media">
          <img src={instagram} onClick={() => window.open("https://www.instagram.com/callofdutymobilelatam/")} className="social-icon" alt="Instagram" />
          <img src={facebook} onClick={() => window.open("https://www.facebook.com/LATAMCallOfDutyMobile")} className="social-icon" alt="Facebook" />
          <img src={tiktok} onClick={() => window.open("https://www.tiktok.com/@callofdutymobile_latam")} className="social-icon" alt="TikTok" />
          <img src={yt} onClick={() => window.open("https://www.youtube.com/@LATAMCallOfDutyMobile")} className="social-icon" alt="YouTube" />
          <img src={twitter} onClick={() => window.open("https://x.com/CODMobileLATAM")} className="social-icon" alt="Twitter" />
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <button className="footer-link-btn" onClick={() => navigate("/codmFrontend/faqs")}>FAQ</button>
          <button className="footer-link-btn" onClick={() => window.open("https://www.activision.com/legal/privacy-policy")} >Términos y condiciones</button>
          <button className="footer-link-btn" onClick={() => navigate("/codmFrontend/privacy")}>Política de privacidad</button>
          
        </div>
        <div style={{minHeight: "10px"}}></div>
        <p className="footer-text">©2026 Activision Publishing, INC. ACTIVISION, CALL OF DUTY, y la letra estilizada M son marcas registradas de Activision Publishing, INC. Las demás marcas comerciales y nombres comerciales son propiedad de sus respectivos dueños. </p>
       <div style={{minHeight: "30px"}}></div>
      </div>
    </footer>
  );
};

export default Footer;
