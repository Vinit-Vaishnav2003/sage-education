import React, { useState } from 'react';
import './Client.css';
import book1 from '../assets/books/aspirant.jpg';
import book2 from '../assets/books/adhyapan.jpg';
import book3 from '../assets/books/ace.jpg';
import book4 from '../assets/books/isha.jpg';
import book5 from '../assets/books/isha.jpg';
import book6 from '../assets/books/wisdom.jpg';
import book7 from '../assets/22734819289.png';

const Client = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const images = [
    { url: book1, alt: 'Aspirants', backContent: 'More details about Aspirants' },
    { url: book2, alt: 'Adhyapan Tutorials', backContent: 'More details about Adhyapan Tutorials' },
    { url: book3, alt: 'ACE', backContent: 'More details about ACE' },
    { url: book4, alt: 'Shete\'s Institute', backContent: 'More details about Shete\'s Institute' },
    { url: book5, alt: 'Isha', backContent: 'More details about Isha' },
    { url: book6, alt: 'Wisdom Tutorials', backContent: 'More details about Wisdom Tutorials' },
  ];

  const squareImages = [
    { url: book7, alt: 'Aspirants', backContent: 'More details about Aspirants' },
    { url: book2, alt: 'Adhyapan Tutorials', backContent: 'More details about Adhyapan Tutorials' },
    { url: book7, alt: 'ACE', backContent: 'More details about ACE' },
  ];

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
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
        <h2 style={{ color: "white", textShadow: "2px 2px 2px black" }}>Schools We Worked With</h2>
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
          <button onClick={handleToggleExpand} style={{fontWeight:"bold", backgroundColor: '#007bff', color: 'voilet', padding: '10px 20px', border: 'none', borderRadius: '10px', cursor: 'pointer' }}>
            Know More ↓
          </button>
          <div className={`more-info ${isExpanded ? 'expanded' : ''}`}>
            <p>
              Here is some more information about our services and how we can help you. Feel free to reach out to us for any queries or further details.
            </p>
            <p>
              Contact us at: 123-456-7890 or email us at info@example.com.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
