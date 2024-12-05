import React from 'react'
// import aboutSection from '/img/about-section.png'
import './About.css'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div>
     <div class="responsive-container-block bigContainer">
  <div class="responsive-container-block Container bottomContainer">
    <div class="allText bottomText" data-aos="zoom-in-right">
      <p class="text-blk headingText">
        About
      </p>
      <p class="text-blk subHeadingText">
        We build Detal Notes for Dental Students
      </p>
      <p class="text-blk description">
      DentalNotes REP has been created for Dental Students. The contents and notes on our website a are standard in terms of quality and time. We are adding and updating contents every single day. The best part is everything on our website 
      </p>
      <a>
        <button class="explore">
        <Link to="/notessubject">View Nots</Link>
          
        </button>
      </a>
    </div>
    <div class="videoContainer" data-aos="zoom-in-left">
      <iframe allowfullscreen="allowfullscreen" class="mainVideo" controls="controls" src="https://www.youtube.com/embed/svg%3E?">
      </iframe>
      <img class="dotsImg image-block" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/cw3.svg"/>
    </div>
  </div>
</div>
    </div>
  )
}

export default About
