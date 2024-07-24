import './App.css';
import Navbar from './components/Navbar';
import About from './Pages/About';
import Modal from './components/Modal';
import React, { useState } from 'react';
import Client from './Pages/Client';

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
    </>
  );
}

export default App;
