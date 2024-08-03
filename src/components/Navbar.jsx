import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../image/logo.png';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'client', 'product', 'institute', 'student', 'footer'];
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

  const handleNavigation = (section) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const navbarCollapse = document.getElementById('navbarSupportedContent');
  if (navbarCollapse && navbarCollapse.classList.contains('show')) {
    navbarCollapse.classList.remove('show');
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-fixed">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className={`nav-link ${activeLink === 'home' ? 'active' : ''}`} onClick={() => handleNavigation('home')}>Home</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeLink === 'client' ? 'active' : ''}`} onClick={() => handleNavigation('client')}>Clients</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeLink === 'product' ? 'active' : ''}`} onClick={() => handleNavigation('product')}>Products</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeLink === 'institute' ? 'active' : ''}`} onClick={() => handleNavigation('institute')}>I'm Institute Owner</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeLink === 'student' ? 'active' : ''}`} onClick={() => handleNavigation('student')}>I'm Student/Parent</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeLink === 'footer' ? 'active' : ''}`} onClick={() => handleNavigation('footer')}>Contact</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} onClick={() => navigate('/about')}>About Us</a>
            </li>
          </ul>
        </div>
        <div className="logo secondary">
          <img src={logo} alt="Logo" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
