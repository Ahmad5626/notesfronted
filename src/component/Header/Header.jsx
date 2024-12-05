import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
// import logo from '/img/Replogo.png'
const Header = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing style
      once: true, // Whether animation should only happen once
    });
  }, []);
  return (
    <>
  
 <div>

<header 
class="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-neutral-100 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg"
data-aos="zoom-out"
>
<div class="px-4">
  <div class="flex items-center justify-between">
      <div class="flex shrink-0">
          <a aria-current="page" class="flex items-center" href="/">
              <img class="h-16 w-auto" src="/img/Replogo.png" alt=""/>
              <p class="sr-only">Website Title</p>
          </a>
      </div>
      <div class="hidden md:flex md:items-center md:justify-center md:gap-5">
          <Link to='/notessubject' aria-current="page"
              class="inline-block rounded-lg px-2 py-1 text-lg font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-[#ef305c]"
              href="#">Notes</Link>
          <Link to='/Contact' class="inline-block rounded-lg px-2 py-1 text-lg font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-[#ef305c]"
              href="#">Contact us</Link>
      </div>
      <div class="flex items-center justify-end gap-3">
         

              {localStorage.getItem("usertoken")? <Link to='/login' class="inline-flex items-center justify-center rounded-xl bg-[#ef305c] px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"><button onClick={()=>{localStorage.removeItem("usertoken");window.location.href=("/login")}}>Logout</button></Link>:

              <>
              <Link to='/login' class="inline-flex items-center justify-center rounded-xl bg-[#ef305c] px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"><button>Login</button></Link>

              <Link to='/singup' class="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
              href="/login">Sign in</Link>
              </>
      }
         
      </div>
  </div>
</div>
</header>
</div>
    </>
   
  )
}

export default Header
