import React from 'react';
import './Product.css';

import product3 from '/src/assets/product/CAREER_NAVIGATOR.jpg';
import product2 from '/src/assets/product/CAREER_FINDER.jpg';
import product1 from '/src/assets/product/CAREER_REPORT.jpg';

const Product = () => {
  const images = [
    {
      url: product1,
      alt: 'CAREER NAVIGATOR',
      content: 'PERSONALISED - PSYCHOMETRIC CAREER REPORT 10TH GRADE (MAIN)',
      backContent: [

        'Specially for 8th- th Class Students',
        'Based on RIASEC and Clifton analysis',
        'A preliminary approach to introduce students to career planning',
        'An approach to career introspection as a self-regulatory activity',
        'Basic career group suggestions',
        'Basic strength and personality revelations',
        'A prelude to the main assessment in 10th grade',
        'Early bird career activity'
      ]
    },
    {
      url: product2,
      alt: 'CAREER FINDER',
      content: 'PERSONALISED CAREER MAPS 11-12TH GRADE',
      backContent: [
        'SPECIALLY for 11th-12th Class Students',
        '12-Page Career Report',
        'Based on subjective assessment',
        'Incorporates insights from psychometric assessment',
        'Provides an actionable plan for the student',
        'Focuses on strategic planning for entrance exams',
        'Offers primary, secondary, and backup plans',
        'Includes insights on post-graduation plans',
        'Personalized information about colleges and exam based on student marks',
        'Preparation for studying abroad',
        'Highly personalized assessed data for students'
      ]
    },
    {
      url: product3,
      alt: 'CAREER REPORT',
      content: 'INTROSPECTIVE CAREER NAVIGATOR 8-9TH GRADE',
      backContent: [
        'SPECIALLY for 10th class students',
        '20-Page Career Report',
        'Based on a 5-dimensional psychometric assessment',
        'Incorporates subjective assessment',
        'In accordance with NEP 2020',
        'Student profile based on -',
        '- Occupational theme',
        '- Skills',
        '- Personality',
        '- Interests',
        'Suggestions for streams and subjects',
        'Top 5 career cluster recommendations',
        'Top career major recommendations',
        'Top college and exam recommendation',
        'Concept of primary, secondary, and bac up plans',
        'Strategic career planning',
        'Personal counseling and doubt-solving aassistance'
      ]
    }
  ];

  return (
    <div className="product">
      <div className='product-container'>
        <div className="product-image-gallery">
          {images.map((image, index) => (
            <div className="product-image-card" key={index}>
              <div className="product-image-card-inner">
                <div className="product-image-card-front">
                  <img src={image.url} alt={image.alt} />
                  <p>{image.content}</p>
                </div>
                <div className="product-image-card-back">
                  <ul>
                    {image.backContent.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
