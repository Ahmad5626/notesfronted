import React from 'react'
import { Link } from 'react-router-dom'
// import herobg from '/img/hero-banner.jpeg'
const Hero = () => {
  return (
    <>
      <section class="relatve mt-8 ">
  {/* <!-- Container --> */}
  <div class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
    {/* <!-- Heading Div --> */}
    <div class="mx-auto mb-12 w-full max-w-3xl text-center md:mb-16 lg:mb-20" >
      <h1 
      data-aos="flip-down"
      class="mb-4 text-4xl font-semibold md:text-5xl !leading-snug">Learn Dental Like Never Before with <span class="bg-cover bg-center px-4 text-white shadow-[rgb(19,83,254)_6px_6px]" style={{backgroundImage: "url(/img/hero-svg-img.png)"}}>DentalNotes REP</span>.</h1>
      <p class="mx-auto mb-5 max-w-[528px] text-xl text-[#636262] lg:mb-8 ">The Ultimate Destination for BDS Students!
      Get access to detailed, compact, and clinically-relevant notes that simplify your studies and help you excel.</p>
      <p class="mx-auto mb-5 max-w-[528px] text-xl font-semibold text-[#ef305c] underline lg:mb-8 ">Your success starts here! Keep learning and advancing in your dental journey.</p>
      {/* <!-- Button Wrap --> */}
      <div class="flex justify-center">
        <Link to='/notessubject'
        data-aos="fade-up"
         class="mr-5 inline-block rounded-xl bg-black px-8 py-4 text-center font-semibold text-white [box-shadow:rgb(19,_83,_254)_6px_6px] md:mr-6 hover:bg-[#ef305c]">Get Started</Link>
        <Link to='/contact' 
        data-aos="fade-up"
        class="flex max-w-full flex-row items-center justify-center rounded-xl border border-solid border-[#ef305c] px-6 py-3 font-semibold text-[#ef305c] [box-shadow:rgb(19,_83,_254)_6px_6px]">
          <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905a575ec39b6784fc687c_Play.svg" alt="" class="mr-2 inline-block w-6" />
          <p class="text-black hover:text-[#ef305c] ">Contact us</p>
        </Link>
      </div>
    </div>
    {/* <!-- Image Div --> */}
    <div class="relative mx-auto h-[512px]" data-aos="flip-left">
      <img src="/img/hero-banner.jpeg" alt="" class="inline-block h-full w-full rounded-xl object-cover sm:rounded-2xl" />
      <div class="absolute bottom-0 left-4 right-0 top-4 -z-10 h-full w-full rounded-2xl bg-black"></div>
    </div>
  </div>
 
  <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905b9f809b5c8180ce30c5_pattern-1.svg" alt="" class="absolute bottom-0 left-0 right-auto top-auto -z-10 inline-block md:bottom-1/2 md:left-0 md:right-auto md:top-auto" />
  <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905ba1538296b3f50a905e_pattern-2.svg" alt="" class="absolute bottom-auto left-auto right-0 top-0 -z-10 hidden sm:inline-block" />
</section>
    </>
    
  )
}

export default Hero
