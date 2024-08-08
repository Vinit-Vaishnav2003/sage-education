import React from 'react';
import './SecondPage.css';

const SecondPage = () => {
  const scrollToFooter = () => {
    document.getElementById('student').scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFooterr = () => {
    document.getElementById('institute').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="second-page-container">
      <div className="second-page-content">
        <h1 style={{ paddingBottom: "20px" }} className="second-page-central-question">CENTRAL QUESTION!</h1>
        <p>What this sage educations is all about? What does a firm with an astronomer in their logo do?</p>
        <h2 className="second-page-good-question">GOOD QUESTION!, But the answer is more better and Simple!</h2>
        <p>We cater, three categories of students:</p>
        <ul className="second-page-ul">
          <li>8th-9th grade students</li>
          <li>10th grade students</li>
          <li>11th - 12th students</li>
        </ul>
        <p>
          So, if a student is in 10th, then we make Personalised - Psychometric Career Reports for them!!!! 
          <a 
            className="second-page-a" 
            href="https://drive.google.com/uc?export=download&id=1XSim8Lu19S8IqNujhjRLFG83P-mcc2Eu" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            PDF DOWNLOAD
          </a>
        </p>
        <p>
          So, if a student is in 11th-12th, then we make Personalised Career Maps for them!!!!
          <a 
            className="second-page-a" 
            href="https://drive.google.com/uc?export=download&id=1sJe6ULBwLs-J5KY4jBTUyGCCdF3htQiI" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            PDF DOWNLOAD
          </a>
        </p>
        <p>
          So, if a student is in 8th-9th, then we introduce them to the process of introspective thinking and career inquisitiveness!!!!
          <a 
            className="second-page-a" 
            href="https://drive.google.com/uc?export=download&id=1pSA6mMYoyc4WgHUxIAsEg1w6Zi208COU" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            PDF DOWNLOAD
          </a>
        </p>
        <p>At the end, we become the student’s best friend! Besides sharing snaps, we solve their career doubts and make them happy to begin their career journey.</p>
        <p>Let's get more deep into it, tell us who you are:</p>
        <div className="second-page-buttons">
          <button onClick={scrollToFooter}>I AM A STUDENT OR PARENT</button>
          <button onClick={scrollToFooterr}>I AM AN EDUCATIONAL INSTITUTE OWNER</button>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
