import React from 'react';
import './Product.css';

import product1 from '/src/assets/product/CAREER_NAVIGATOR.jpg';
import product2 from '/src/assets/product/CAREER_FINDER.jpg';
import product3 from '/src/assets/product/CAREER_REPORT.jpg';

const Product = () => {
  const images = [
    { url: product1, alt: 'CAREER NAVIGATOR', content: 'PERSONALISED - PSYCHOMETRIC CAREER REPORT 10TH GRADE (MAIN)', backContent: 'More details about CAREER NAVIGATOR' },
    { url: product2, alt: 'CAREER FINDER', content: 'PERSONALISED CAREER MAPS 11-12TH GRADE', backContent: 'More details about CAREER FINDER' },
    { url: product3, alt: 'CAREER REPORT', content: 'INTROSPECTIVE CAREER NAVIGATOR 8-9TH GRADE', backContent: 'More details about CAREER REPORT' }
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
                  <p>{image.backContent}</p>
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
