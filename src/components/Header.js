import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Add styling as needed

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/">MyLogo</Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
