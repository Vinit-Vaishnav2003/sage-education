import './App.css'
import Navbar from './components/Navbar'
import About from './Pages/About'
import Modal from './components/Modal'
import React, { useState } from 'react';
function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Navbar/>
      <About/>
      {isModalOpen && <Modal onClose={handleCloseModal} />}
    </>
  )
}

export default App
