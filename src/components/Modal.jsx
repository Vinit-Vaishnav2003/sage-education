import React from 'react';
import './Modal.css'; 
import asto from "../assets/asto.webp"

const Modal = () => {
  return (
    <div className="modal">
      <div className="modal-content">
      <div className="astronut">\
          <img src={asto} alt="Astronaut" className="astronaut" />
        </div>
        <div className="speech-bubble">
          <p>Hellow Pal</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
