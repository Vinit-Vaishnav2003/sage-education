import React from 'react';
import './Client.css';
import img from '../assets/bubble.png'

import book1 from '../assets/books/aspirant.jpg'
import book2 from '../assets/books/adhyapan.jpg'
import book3 from '../assets/books/ace.jpg'
import book4 from '../assets/books/isha.jpg'
import book5 from '../assets/books/isha.jpg'
import book6 from '../assets/books/wisdom.jpg'

const Client = () => {
  const images = [
    { url: book1, alt: 'Aspirants' },
    { url: book2, alt: 'Adhyapan Tutorials' },
    { url: book3, alt: 'ACE' },
    { url: book4, alt: 'Shete\'s Institute' },
    { url: book5, alt: 'Isha' },
    { url: book6, alt: 'Wisdom Tutorials' },
  ];

  return (
    <div className="client">
      <div className="client-container">
        <div className="client-image-gallery">
          {images.map((image, index) => (
            <div className="client-image-card" key={index}>
              <img src={image.url} alt={image.alt} />
              {console.log(image.url)}
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
    </div>
  );
};

export default Client;
