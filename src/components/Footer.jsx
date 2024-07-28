import React from 'react';
import './Footer.css'; // Make sure to create and import this CSS file for styling
import logo from '../image/logo.png'
const Footer = () => {
    return (
        <div className="footer">
            <footer className="footer-container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <img src={logo} alt="RAAAG Logo" className="logo-img" />
                        <h2 className='mygeet'>Sage Education</h2>
                    </div>
                    <div className='footertext'>

                        <div className="footer-contact">
                            <h3>FOLLOW Us</h3>
                            <div className="social-icons">
                                <a style={{ marginLeft: "0px" }} href="https://wa.me/919594133951?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20My%20Geet" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-whatsapp"></i>
                                </a>
                                <a href="https://www.instagram.com/sage/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                            </div>
                            <p><a href="mailto:sage@gmail.com">sageeducation@gmail.com</a></p>
                            <p>xyz : +91 00000000 </p>
                            <p> xxxxxx xxxxx, xxxxx xxxxx, xxxx D, xxx xxxxxx, xxxxxx xxxxx .</p>
                        </div>
                    </div></div>
                <div className="footer-bottom">
                    <p>© All Copyright by Sage Education Pvt Ltd</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
