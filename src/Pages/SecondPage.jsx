import React from 'react';
import './SecondPage.css';

const SecondPage = () => {

  const scrollToFooter = () => {
    document.getElementById('footer').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="second-page">
      <div className="content">
        <h1 className="central-question">CENTRAL QUESTION!</h1>
        <p>What this sage educations is all about? What does a firm with an astronomer in their logo do?</p>
        <h2 className="good-question">GOOD QUESTION!, But the answer is more better and Simple!</h2>
        <p>We cater, three categories of students:</p>
        <ul>
          <li>8th-9th grade students</li>
          <li>10th grade students</li>
          <li>11th - 12th students</li>
        </ul>
        <p>So, if student is in 10th, then we make Personalised - Psychometric Career Reports for them !!!! <a href="#">PDF DOWNLOAD</a></p>
        <p>So, if student is in 11th-12th, then we make Personalised Career Maps for them !!!! <a href="#">PDF DOWNLOAD</a></p>
        <p>So, if student is in 8th-9th, then we introduce them to the process of introspective thinking and career inquisitiveness !!!! <a href="#">PDF DOWNLOAD</a></p>
        <p>At the end, we become the student’s best friend! Besides sharing snaps, we solve their career doubts and make them happy to begin their career journey</p>
        <p>Lets get more deep into it, tell us who are you</p>
        <div className="buttons">
          <button onClick={scrollToFooter}>I AM A STUDENT OR PARENT</button>
          <button onClick={scrollToFooter}>I AM AN EDUCATIONAL INSTITUTE OWNER</button>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
