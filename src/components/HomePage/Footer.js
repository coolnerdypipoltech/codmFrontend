import React from 'react';
import './Footer.css';
import logo from '../../assets/CNPLogo.png';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        {/* Social Media Icons */}
        <div className="social-media">
          <a href="#" className="social-icon" aria-label="Facebook">
            <img src={logo} alt="Facebook" />
          </a>
          <a href="#" className="social-icon" aria-label="Instagram">
            <img src={logo} alt="Instagram" />
          </a>
          <a href="#" className="social-icon" aria-label="Twitter">
            <img src={logo} alt="Twitter" />
          </a>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p className="copyright">© 2026 cnp.inc</p>
          <div className="footer-links">
            <button className="footer-link-btn">FAQ</button>
            <button className="footer-link-btn">Términos y condiciones</button>
            <button className="footer-link-btn">Política de privacidad</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
