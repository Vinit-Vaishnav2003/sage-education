import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="container my-3">
        <br />
        <h1 className="home-title animate-fade-in">Hello Pal!</h1>
        <br />
        <h2 className="home-subtitle my-3 animate-fade-in">Hope You are doing Great !</h2>
        <h2 className="home-subtitle my-3 animate-fade-in">We are Sage Educations, we're passionate about guiding students toward their ideal careers.</h2>
        <br />
        <h2 className="home-text animate-fade-in">And yes, we've poured our money just to prove the fact that Sage Educations is indeed a genuine career counselling firm,</h2>
        <h2 className="home-text animate-fade-in">For the past three years, we've been helping students in Mumbai navigate their career paths through our Personalised Career Reports and Counselling Sessions.</h2>
      </div>
    </div>
  );
}

export default Home;
