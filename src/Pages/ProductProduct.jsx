import React from 'react';
import './Product.css';

const Product = () => {
  const products = [
    { url: '/src/assets/product/CAREER_NAVIGATOR.jpg', alt: 'CAREER NAVIGATOR', content: 'PERSONALISED - PSYCHOMETRIC CAREER REPORT 10TH GRADE (MAIN)' },
    { url: '/src/assets/product/CAREER_FINDER.jpg', alt: 'CAREER_FINDER', content: 'PERSONALISED CAREER MAPS 11-12TH GRADE' },
    { url: '/src/assets/product/CAREER_REPORT.jpg', alt: 'CAREER_REPORT', content: 'INTROSPECTIVE CAREER NAVIGATOR 8-9TH GRADE' }
  ];

  return (
    <div className="product">
      <div className='product-container'>
        <div className="product-image-gallery">
          {products.map((product, index) => (
            <div className="product-image-card" key={index}>
              <img src={product.url} alt={product.alt} />
              <p>{product.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;

