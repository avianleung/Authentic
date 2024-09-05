import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-awards">
          <div className="award-placeholder"></div>
          <div className="award-placeholder"></div>
          <div className="award-placeholder"></div>
          <div className="award-placeholder"></div>
          <div className="award-placeholder"></div>
        </div>
        <div className="footer-branding">
          <h2>Authentic</h2>
          <p>AUTHENTIC WORLDWIDE ALL Rights Reserved.</p>
          <div className="footer-links">
            <a href="/privacy">Privacy Notice</a>
            <div className="footer-social-icons">
              <span className="social-placeholder"></span>
              <span className="social-placeholder"></span>
              <span className="social-placeholder"></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
