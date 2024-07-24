import React from 'react'
import './Product.css';

const Product = () => {
    const images =[
        { url: '/src/assets/product/CAREER_NAVIGATOR.jpg', alt: 'CAREER NAVIGATOR' },
        { url: '/src/assets/product/CAREER_FINDER.jpg', alt: 'CAREER_FINDER' },
        { url: '/src/assets/product/CAREER_REPORT.jpg', alt: 'CAREER_REPORT' }
    ];
  return (
    <div>
       <div className="product-image-gallery">
        {images.map((image, index) => (
          <div className="product-image-card" key={index}>
            <img src={image.url} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Product
