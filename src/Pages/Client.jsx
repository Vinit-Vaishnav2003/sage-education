import React from 'react';
import './Client.css';
import img from '../assets/bubble.png'
import book from '../assets/books/ace.jpg'
const Client = () => {
  const images = [
    { url: book, alt: 'Aspirants' },
    { url: '/src/assets/books/adhyapan.jpg', alt: 'Adhyapan Tutorials' },
    { url: '/src/assets/books/ace.jpg', alt: 'ACE' },
    { url: '/src/assets/books/isha.jpg', alt: 'Shete\'s Institute' },
    { url: '/src/assets/books/isha.jpg', alt: 'Isha' },
    { url: '/src/assets/books/wisdom.jpg', alt: 'Wisdom Tutorials' },
  ];

  return (
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
  );
};

export default Client;
