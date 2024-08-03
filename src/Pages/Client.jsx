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
    { url: book1, alt: 'Aspirants', backContent: 'Aspirants College & Academy.Xl - XII SCIENCEJEE, NEET, and MHT CET (Kalyan and Badlapur)' },
    { url: book2, alt: 'Adhyapan Tutorials', backContent: 'Adhyapan TutorialsSchool section,Xl - XII SCIENCE, JEE, NEET, MHT CETXl - XII COMMERCE, CA, CS(Multiple locations in Mumbai)' },
    { url: book3, alt: 'ACE', backContent: 'Ace, The Science AcademyXl - XII SCIENCE, JEE, NEET, MHT CET(Ambernath)' },
    { url: book4, alt: 'Shete\'s Institute', backContent: 'Shete\'s Institute Of AcademicsSchool section,Xl - XII SCIENCE, JEE, NEET, MHT CETXl - XII COMMERCE, CA, CS(Kalyan and Badlapur)' },
    { url: book5, alt: 'Isha', backContent: 'Isha Group TuitionsSchool section(Ulhasnagar)' },
    { url: book6, alt: 'Wisdom Tutorials', backContent: 'Wisdom TutorialsSchool section(Ambernath)' },
  ];

  const squareImages = [
    { url: book7, alt: 'Aspirants', backContent: 'Cambria International, Kalyan' },
    { url: book8, alt: 'Adhyapan Tutorials', backContent: 'Leeway School, Palegaon' },
    { url: book9, alt: 'ACE', backContent: 'Holy Faith English School, Ambernath' },
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
        <h2 style={{ color: "white", textShadow: "2px 2px 2px black" , fontFamily:"'DM Serif Display', serif" }}>Schools We Worked With</h2>
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
          {/* <button onClick={toggleKnowMore} style={{fontWeight:"bold", backgroundColor: 'white', color: 'blue', padding: '10px 20px', border: 'none', borderRadius: '10px', cursor: 'pointer' }}>
            Know More ↓
          </button> */}
        </div>
      </div>
      {isKnowMoreOpen && <KnowMore onClose={toggleKnowMore} />}
    </div>
  );
};

export default Client;
