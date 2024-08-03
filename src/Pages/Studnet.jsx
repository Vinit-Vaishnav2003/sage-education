import React, { useState } from 'react';
import './Student.css';
import astronaut from '../assets/astronust/asto2.png'; // Add your astronaut image here
import KnowMore from '../components/KnowMore';

const Student = () => {
  const [isKnowMoreOpen, setIsKnowMoreOpen] = useState(false);

  const toggleKnowMore = () => {
    setIsKnowMoreOpen(!isKnowMoreOpen);
  };

  return (
    <div className="student-page">
      <div className="student-content">
        <h1 className="student-heading">8TH - 12TH STUDENT OR A PARENT?</h1>
        <p>GET YOUR QUERIES ON PAGE AND NOT STUCK IN MIND</p>
        <p>MAKE A DETAILED CAREER REPORT WHICH PROVIDES YOU PRIMARY SECONDARY BACKUP PLANS AND CLEAR YOUR EVERY CAREER DOUBT</p>

        <div className="student-listt">
          <ul className="student-features-list">
            <li>Introduce the process of introspection and psychometric assessments, including:</li>
            <ul>
              <li>Personality assessment</li>
              <li>Stream-interest alignment</li>
              <li>Skill and aptitude evaluation</li>
              <li>Occupational theme exploration</li>
              <li>Situational questions for practical scenarios</li>
              <li>Subjective assessments to understand preferences</li>
            </ul>
            <li>Create a detailed 20-page personalized psychometric career report covering:</li>
            <ul>
              <li>Final stream recommendation</li>
              <li>Recommended subjects</li>
              <li>Suitable degrees and courses</li>
              <li>Relevant entrance exams</li>
              <li>Recommended colleges and institutions</li>
            </ul>
            <li>Offer doubt-solving career counseling sessions:</li>
            <ul>
              <li>Address every career doubt and concern</li>
              <li>Provide primary, secondary, and backup career plans <span onClick={toggleKnowMore} style={{  color: 'blue', padding: '10px 20px', border: 'none', borderRadius: '10px', cursor: 'pointer' }}>Know More about carrier Report →</span>  </li>
            </ul>
            {/* <button onClick={toggleKnowMore} style={{ fontWeight: "bold", backgroundColor: 'white', color: 'blue', padding: '10px 20px', border: 'none', borderRadius: '10px', cursor: 'pointer' }}>
              Know More ↓
            </button> */}
          </ul>
          <div className="student-astoo">
            <img src={astronaut} alt="Astronaut" className="student-astronaut-image" />
          </div>
        </div>

        <div className="student-call-to-action">
          <p>WAIT A MINUTE... IF YOU HAVE COME THIS FAR ON THIS WEBSITE, THEN PLEASE GET YOUR PHONE OUT DIAL THIS 10-DIGIT NUMBER AND CALL US ONCE (MISSED CALL WORKS) OR WHATSAPP US</p>
          <p>WE'LL BE MORE THAN HAPPY TO ASSIST YOU</p>
          <p>OUR ASTRONAUT WILL TAKE OFF FROM THIS EARTH NOW!</p>
        </div>
      </div>
      {isKnowMoreOpen && <KnowMore onClose={toggleKnowMore} />}
    </div>
  );
};

export default Student;
