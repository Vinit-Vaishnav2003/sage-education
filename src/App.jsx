import './App.css';
import Navbar from './components/Navbar';
import About from './Pages/About';
import Modal from './components/Modal';
import React, { useState } from 'react';
import Client from './Pages/Client';
import Product from './Pages/ProductProduct';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Navbar />
      <div id="home">
        <About />
      </div>
      {isModalOpen && <Modal onClose={handleCloseModal} />}
      <hr />
      <div id="client">
        <Client />
      </div>
      <div id="product">
        <Product />
      </div>
    </>
  );
}

export default App;
