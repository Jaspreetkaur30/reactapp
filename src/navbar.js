import React, { useState } from 'react';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="logo">XivTech</a>
        <button className={`navbar-toggle ${isNavOpen ? 'active' : ''}`} onClick={toggleNav}>
          <span className="navbar-toggle-icon"></span>
        </button>
        <ul className={`navbar-menu ${isNavOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <a href="#" className="navbar-link">Home</a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">About</a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">Services</a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
