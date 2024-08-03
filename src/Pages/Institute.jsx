import React, { useState } from 'react';
import './Institute.css';
import KnowMore from '../components/KnowMore';

const Institute = () => {
  const [isKnowMoreOpen, setIsKnowMoreOpen] = useState(false);

  const toggleKnowMore = () => {
    setIsKnowMoreOpen(!isKnowMoreOpen);
  };

  return (
    <div className="institute-page">
      <div className="institute-content">
        <p>Imagine this: as the institute owner, you create personalized career books, each 20 pages long, for every student, personally crafted for every student, according to their personality, interest and everything of their. These books are psychologically sound yet easy to understand. Students connect with the content, finding answers to their career questions. Through these books, you help students clear up every doubt they have about their future paths. Which stream? Which subjects? Which career? Which entrances? Which degree? EVERYTHING !!! It's a personal touch that ensures students get the guidance they need to make informed decisions about their careers.</p>

        <p>ITS YOU WONDERFULLY AS A INSTITUTE OWNER</p>
        <p>CLEAR ALL CAREER DOUBTS OF STUDENTS THROUGH A BOOK MADE ON THEIR CAREER !! MADE BY YOU !! PERSONALLY CRAFTED !! THAT IS WHAT WE PROVIDE !!!!!</p>

        <div className="buttonn-container">
          <h2>PERSONALISED-PSYCHOMETRIC CAREER REPORT</h2>
          <div className="institute-call-to-action">
            <button onClick={toggleKnowMore} >
              Know More about carrier Report →
            </button>
          </div>

        </div>
        <p>We Provide It On Your Brand, Your Letter-head</p>
        <p>To Quadruple Your Footfalls, Triple Your Admissions, And Double Your Goodwill !!!</p>

        <p>WE HAVE ALREADY HELPED FOLLOWING INSTITUTES AND SCHOOLS IN MUMBAI ... PLEASE HAVE A LOOK !!</p>
      </div>


      {isKnowMoreOpen && <KnowMore onClose={toggleKnowMore} />}
    </div>
  );
};

export default Institute;
