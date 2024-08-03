import React from 'react';
import './Footer.css'; // Make sure to create and import this CSS file for styling
import logo from '../image/logo.png'
const Footer = () => {
    return (
        <div className="footer">
            <footer className="footer-container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <img src={logo} alt="Sage Logo" className="logo-img" />
                    </div>
                    <div className='footertext'>

                        <div className="footer-contact">
                            <h3>FOLLOW Us</h3>
                            <div className="social-icons">
                                <a style={{ marginLeft: "0px" }} href="https://wa.me/919594133951?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20My%20Geet" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-whatsapp" style={{color: "#25d366",fontWeight:"600"}}></i>
                                </a>
                                <a href="https://www.instagram.com/sage_educations?igsh=MWNyNGt0djJ2ZHFwdg==" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" style={{color: "brown"}}></i></a>
                            </div>
                            <p><a href="mailto:Sageducations@gmail.com">Sageducations@gmail.com</a></p>
                            <p>+91 78753 63745 <br /> +91 9022843340 </p>
                            <p> 1st Floor, Navre Arcade, Shop No.5, A Wing, <br /> Shiv Mandir Road, near Station, Ambernath, 421501</p>
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
