import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Add styling as needed

const Footer = () => {
  return (
    <footer>
      <div className="social-media">
        <a href="https://facebook.com">Facebook</a>
        <a href="https://twitter.com">Twitter</a>
        <a href="https://instagram.com">Instagram</a>
      </div>

      <div className="footer-links">
        <Link to="/terms">Terms and Conditions</Link>
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/cookie">Cookie Policy</Link>
      </div>

    </footer>
  );
};

export default Footer;
