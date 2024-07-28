import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Modal from './components/Modal';
import Client from './Pages/Client';
import Product from './Pages/ProductProduct';
import Footer from './components/Footer';
import SecondPage from './Pages/SecondPage';
import Student from './Pages/Studnet';
import Institute from './Pages/Institute';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const scrollToFooter = () => {
    document.getElementById('footer').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar />
      <div id="home" style={{ paddingTop: '70px', marginTop: '-70px' }}>
        <Home />
      </div>
      <div id="home" style={{ paddingTop: '70px', marginTop: '-70px' }}>
        <SecondPage/>
      </div>
      {isModalOpen && <Modal onClose={handleCloseModal} />}
      <div id="client" style={{ paddingTop: '70px', marginTop: '-70px' }}>
        <Client />
      </div>
      <div id="institute" style={{ paddingTop: '70px', marginTop: '-70px' }}>
        <Institute />
      </div>
      <div id="product" style={{ paddingTop: '70px', marginTop: '-70px' }}>
        <Product />
      </div>
      <div id="student" style={{ paddingTop: '70px', marginTop: '-70px' }}>
        <Student />
      </div>

      <div id="footer" >
        <Footer />
      </div>
      
      <button className="contact-us-button" onClick={scrollToFooter}>Contact Us</button>
    </>
  );
}

export default App;
