import React, { useEffect } from 'react';
import './KnowMore.css';
import asto1 from '../assets/astronust/asto1.png'

const KnowMore = ({ onClose }) => {
  useEffect(() => {
    document.body.classList.add('modal-open');
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, []);

  return (
    <div className="knowmore-modal-overlay">
      <div className="knowmore-modal-content">
        <div className="knowmore-modal-header">
          <button className="knowmore-close-button" onClick={onClose}>X</button>
        </div>
        <div className="knowmore-modal-body">
          <p className="knowmore-section-title">5 Dimensional Psychometric Assessment including Subjection Analysis</p>
          <ul className='llist'>
            <li>Personality assessment</li>
            <li>Stream-interest alignment</li>
            <li>Skill and aptitude evaluation</li>
            <li>Occupational theme exploration</li>
            <li>Situational questions for practical scenarios</li>
            <li>Subjective assessments to understand preferences</li>
          </ul>
          <p className="knowmore-description">The analysis is a 2-phased process where data is first analyzed by our data science-driven 663+ integration-based algorithm and then further examined through a 3-level in-depth human analysis.</p>
          <p className="knowmore-section-title">Create a detailed 20-page personalized psychometric career report covering:</p>
          <ul>
            <li>Final stream recommendation OR subject recommendation based on NEP 202</li>
            <li>Recommended subjects according to the eligibility</li>
            <li>Suitable degrees and courses</li>
            <li>Relevant entrance exams</li>
            <li>Recommended colleges and institutions</li>
          </ul>
          <p className="knowmore-highlight">Based on a detailed study of 14 career theories, psychologically sound yet simple, a report with which students can relate, NOT THAT BORING PSYCHOMETRIC REPORT</p>
          <p className="knowmore-section-title">Offer doubt-solving career counseling sessions:</p>
          <ul>
            <li>Address every career doubt and concern</li>
            <li>Provide primary, secondary, and backup career plans</li>
            <li>Admission assistance</li>
          </ul>
          <p className="knowmore-final-note">EVERYTHING IN ONE CAREER REPORT TO BE PROVIDED BY YOUR INSTITUTION TO THE STUDENT</p>
        </div>
        
      </div>
      <div className="knowmore-astronauts">
          <img  src={asto1} alt="Cute Astronaut 1" />
        </div>
    </div>
  );
};

export default KnowMore;
