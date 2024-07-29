import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../image/logo.png';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'client', 'product', 'institute', 'footer'];
      let currentSection = '';

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
          }
        }
      });

      setActiveLink(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-fixed">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className={`nav-link ${activeLink === 'home' ? 'active' : ''}`} href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeLink === 'about' ? 'active' : ''}`} href="#about">About Us</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeLink === 'client' ? 'active' : ''}`} href="#client">Clients</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeLink === 'product' ? 'active' : ''}`} href="#product">Products</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeLink === 'institute' ? 'active' : ''}`} href="#institute">Institute Owner</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeLink === 'footer' ? 'active' : ''}`} href="#footer">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
