import React from "react";
import "./Footer.css";
import facebook from "../../assets/footer/facebookLogo.svg";
import instagram from "../../assets/footer/InstagramLogo.svg";
import twitter from "../../assets/footer/TwitterLogo.svg";
import tiktok from "../../assets/footer/TiktokLogo.svg";
import yt from "../../assets/footer/YtLogo.svg";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        {/* Social Media Icons */}
        <p className="footer-Title">MANTENTE AL DÍA</p>
        <div className="social-media">
          <img src={instagram} className="social-icon" alt="Instagram" />
          <img src={facebook} className="social-icon" alt="Facebook" />
          <img src={tiktok} className="social-icon" alt="TikTok" />
          <img src={yt} className="social-icon" alt="YouTube" />
          <img src={twitter} className="social-icon" alt="Twitter" />
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <button className="footer-link-btn">FAQ</button>
          <button className="footer-link-btn">Términos y condiciones</button>
          <button className="footer-link-btn">Política de privacidad</button>
          
        </div>
        <div style={{minHeight: "32px"}}></div>
        <p className="footer-text">©/TM/®2025 Activision Publishing, Inc.</p>
        <p className="footer-text">©2026 Activision Publishing, INC. ACTIVISION, CALL OF DUTY, y la letra estilizada M son marcas registradas de Activision Publishing, INC. Las demás marcas comerciales y nombres comerciales son propiedad de sus respectivos dueños.</p>
        <div style={{minHeight: "30px"}}></div>
      </div>
    </footer>
  );
};

export default Footer;
