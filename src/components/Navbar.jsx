import React from 'react';
import './Navbar.css';
import logo from '../image/logo.png'
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-fixed">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#client">Clients</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#product">Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Institute Owner</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
