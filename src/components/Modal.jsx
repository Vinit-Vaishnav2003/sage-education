import React, { useState } from 'react';
import './Modal.css';
import asto from "../assets/asto.webp";

const Modal = ({ onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const messages = [
    "Hello Pal! Hope you are doing great! We are Sage Educations, we're passionate about guiding students toward their ideal careers.",
    "And yes, we've poured our money just to prove the fact that Sage Educations is indeed a genuine career counselling firm.",
    "Join us and let's achieve your dreams together!"
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + messages.length) % messages.length);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="astronaut">
          <img src={asto} alt="Astronaut" className="astronaut" />
        </div>
        <div className="speech-bubble">
          <p>{messages[currentIndex]}</p>
        </div>
      </div>
      <div className="modal-buttons">
        <button className="modal-button" onClick={handlePrevious}>Previous</button>
        <button className="modal-button" onClick={handleNext}>Next</button>
        <button className="modal-button skip-buttons" onClick={onClose}>Skip</button>
      </div>
    </div>
  );
};

export default Modal;
