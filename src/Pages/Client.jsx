import React, { useState } from 'react';
import './Client.css';

import book1 from '../assets/books/aspirant.jpg';
import book2 from '../assets/books/adhyapan.jpg';
import book3 from '../assets/books/ace.jpg';
import book4 from '../assets/books/shete.jpg';
import book5 from '../assets/books/isha.jpg';
import book6 from '../assets/books/wisdom.jpg';
import book7 from '../assets/books/cambria.png';
import book8 from '../assets/books/leeway.jpeg';
import book9 from '../assets/books/holy.png';

import KnowMore from '../components/KnowMore';

const Client = () => {
  const [isKnowMoreOpen, setIsKnowMoreOpen] = useState(false);

  const images = [
    { url: book1, alt: 'Aspirants', backContent: 'Aspirants College & Academy\nXl - XII SCIENCE, JEE, NEET, MHT CET\n(Kalyan and Badlapur)' },
    { url: book2, alt: 'Adhyapan Tutorials', backContent: 'Adhyapan Tutorials\nSchool section,\nXl - XII SCIENCE, JEE, NEET, MHT CET\nXl - XII COMMERCE, CA, CS\n(Multiple locations in Mumbai)' },
    { url: book3, alt: 'ACE', backContent: 'Ace, The Science Academy\nXl - XII SCIENCE, JEE, NEET, MHT CET\n(Ambernath)' },
    { url: book4, alt: 'Shete\'s Institute', backContent: 'Shete\'s Institute Of Academics\nSchool section,\nXl - XII SCIENCE, JEE, NEET, MHT CET\nXl - XII COMMERCE, CA, CS\n(Kalyan and Badlapur)' },
    { url: book5, alt: 'Isha', backContent: 'Isha Group Tuitions\nSchool section\n(Ulhasnagar)' },
    { url: book6, alt: 'Wisdom Tutorials', backContent: 'Wisdom Tutorials\nSchool section\n(Ambernath)' },
  ];

  const squareImages = [
    { url: book7, alt: 'Cambria International', backContent: 'Cambria International\n(Kalyan)' },
    { url: book8, alt: 'Leeway School', backContent: 'Leeway School\n(Palegaon)' },
    { url: book9, alt: 'Holy Faith English School', backContent: 'Holy Faith English School\n(Ambernath)' },
  ];

  const toggleKnowMore = () => {
    setIsKnowMoreOpen(!isKnowMoreOpen);
  };

  return (
    <div className="client">
      <div className="client-container">
        <div className="client-image-gallery">
          {images.map((image, index) => (
            <div className="client-image-card" key={index}>
              <div className="client-image-card-inner">
                <div className="client-image-card-front">
                  <img src={image.url} alt={image.alt} />
                </div>
                <div className="client-image-card-back">
                  <p>{image.backContent}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <hr style={{ color: 'white' }} />
        <h2 style={{ color: "white", textShadow: "2px 2px 2px black"  }}>Schools We Have Worked With</h2>
        <div className="client-square-image-gallery">
          {squareImages.map((image, index) => (
            <div className="client-square-image-card" key={index}>
              <div className="client-square-image-card-inner">
                <div className="client-square-image-card-front">
                  <img src={image.url} alt={image.alt} />
                </div>
                <div className="client-square-image-card-back">
                  <p>{image.backContent}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="client-call-to-action">
          <p>
            WAIT A MINUTE... IF YOU HAVE COME THIS FAR IN THIS WEBSITE, THEN PLEASE GET YOUR PHONE OUT, DIAL THIS 10-DIGIT NUMBER AND CALL US ONCE (MISSED CALL WORKS) OR WHATSAPP US. WE'LL BE MORE THAN HAPPY TO ASSIST YOU.
          </p>
          <p>
            OUR ASTRONAUT WILL TAKE OFF FROM THIS EARTH NOW!
          </p>
        </div>
      </div>
      {isKnowMoreOpen && <KnowMore onClose={toggleKnowMore} />}
    </div>
  );
};

export default Client;
