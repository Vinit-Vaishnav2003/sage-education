import React from 'react';
import './About.css'; // Import the CSS file
import placeholderImage from '../assets/image.png'; // Import the placeholder image

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <img src={placeholderImage} alt="Astronaut" className="about-image" />
        <div className="about-text">
          <h1>About Us</h1>
          <p>
            We are a youth-driven, career-education firm run by young people with the goal of providing students with
            simple, yet psychologically sound, career-counselling services with credible and legit information about
            careers, colleges, subjects, degrees, industries, and everything else that matters in the process of career
            decision-making.
          </p>
          <p>
            With personal contact when working with 10th graders, we try to solve their every career-related worry. We
            discovered that only 7% of those from financially secure families succeed in obtaining proper career guidance.
            We have guided 1000+ students till now and are seeking to achieve an ultimate goal of reaching and helping
            every tier 2 and tier 3 city student in their journey to pursue their bright career.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
