import React from 'react'
import image from '../image/logo.png'
import './About.css'

const About = () => {
  return (
    <div className="about">
      <div className="container about">
        <img src={image} />
        <br />
        <p>We are a youth-driven, career-education firm run by young people with the goal of providing students with
          simple, yet psychologically sound, career-counselling services with credible and legit information about
          careers, colleges, subjects, degrees, industries, and everything else matters in the process of career
          decision-making. With personal contact when working with 10th graders, we try to solve their every
          career-related worry. We discovered that only 7% of those from financially secure families succeed in
          obtaining proper career guidance. We have guided 1000+ students till now and are seeking to achieve an
          ultimate goal of reaching and helping every tier 2 and tier 3 city student in their
          journey to pursue their bright career.</p>

      </div>
    </div>
  )
}

export default About
