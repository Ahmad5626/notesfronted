import React from 'react'
import './About2.css'
import { Link } from 'react-router-dom'
const About2 = () => {
  return (
    <div>
      <div class="responsive-container-block bigContainer">
  <div class="responsive-container-block Container">
    <div class="imgContainer">
     
      <img class="mainImg" src="/img/about-section.png"/>
    </div>
    <div class="responsive-container-block textSide" data-aos="fade-up"
     data-aos-duration="3000">
      <p class="text-blk heading">
      Your Dream, Our Goal
      </p>
      <p class="text-blk subHeading">
      Trusted by countless BDS students for their daily studies, we provide materials tailored to 3rd-year BDS topics and beyond.
      </p>
      <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
        <div class="cardImgContainer">
          <img class="cardImg" src="/img/checkmark.png"/>
        </div>
        <div class="cardText">
          <p class="text-blk cardHeading">
          Chapter-wise Notes
          </p>
          <p class="text-blk cardSubHeading">
          
          </p>
        </div>
      </div>
      <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
        <div class="cardImgContainer">
          <img class="cardImg" src="/img/checkmark.png"/>
        </div>
        <div class="cardText">
          <p class="text-blk cardHeading">
          PDFs for Easy Access
          </p>
          
        </div>
      </div>
      <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
        <div class="cardImgContainer">
          <img class="cardImg" src="/img/checkmark.png"/>
        </div>
        <div class="cardText">
          <p class="text-blk cardHeading">
          Notes Dictionary for Quick Reference
          </p>
        
        </div>
      </div>

      <div className=' '>
 <a>
        <button class="explore">
        <Link to='/notessubject'>

        view notes
        </Link>
          
        </button>
      </a>
 </div>
     
    </div>
   
    <img class="redDots" data-aos="fade-up"
     data-aos-duration="3000" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/cw3.svg"/>
  </div>
  
</div>
    </div>
  )
}

export default About2
