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
import About from './Pages/About';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const scrollToFooter = () => {
    document.getElementById('footer').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div id="home" style={{ paddingTop: '70px', marginTop: '-70px' }}>
                <Home />
              </div>
              <div id="secondPage" style={{ paddingTop: '70px', marginTop: '-70px' }}>
                <SecondPage />
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
              <div id="footer">
                <Footer />
              </div>
              <button className="contact-us-button" onClick={scrollToFooter}> <i class="fa-solid fa-phone"></i>‎ ‎ Contact Us</button>
            </>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
