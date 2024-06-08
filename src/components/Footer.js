import React from 'react';
import './Footer.css'; // Add styling as needed

const Footer = () => {
  return (
    <footer>
      <ul>
        <li><a href="/terms-and-conditions">Terms and Conditions</a></li>
        <li><a href="/privacy-policy">Privacy Policy</a></li>
        <li><a href="/cookie-policy">Cookie Policy</a></li>
      </ul>
      <div className="social-media">
        <a href="https://facebook.com">Facebook</a>
        <a href="https://twitter.com">Twitter</a>
        <a href="https://instagram.com">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;
