import React from 'react'
import Hero from '../../component/Hero/Hero'
import Header from '../../component/Header/Header'
import About from '../../component/About/About'
import Footer from '../../component/Footer/Footer'
import Testimonial from '../../component/Testimonial/Testimonial'
import About2 from '../../component/About2/About2'

const Home = () => {
  return (
    <div>
    <Header/>
      <Hero/>
      <About/>
      <About2/>
      <Testimonial/>
      <Footer/>

    </div>
  )
}

export default Home
