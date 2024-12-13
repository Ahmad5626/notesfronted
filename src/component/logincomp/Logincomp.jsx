import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Logincomp = () => {

    const [logindata, setLogindata] = useState({
        email: "",
        password: ""
    })

    const loginHandle=(e)=>{setLogindata({...logindata,[e.target.name]:e.target.value})}

    const loginUser = async (e) => {
        e.preventDefault();
        const newdata=logindata
        const response = await fetch("http://localhost:5000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newdata),
        }).then((res) => res.json())
        .then((data) => {
            if(data.success){
                localStorage.setItem("usertoken", data.usertoken)
                localStorage.setItem("userid", data.user._id)
                window.location.href = "/";
                
            }
            console.log(data);
            
        })
    }
    console.log();
    
  return (
    <>
    <div>
      <div class="w-screen min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-800 px-4 sm:px-6 lg:px-8">
    <div class="relative py-3 sm:max-w-xs sm:mx-auto">
        <div class="min-h-96 px-8 py-6 mt-4 text-left bg-white dark:bg-gray-900  rounded-xl shadow-lg">
            <div class="flex flex-col justify-center items-center h-full select-none">
                <div class="flex flex-col items-center justify-center gap-2 mb-8">
                    <a href="https://amethgalarcio.web.app/" target="_blank">
                        <img src="/img/Replogo.png" class="w-20" />
                    </a>
                    <p class="m-0 text-[16px] font-semibold dark:text-white">Login to your Account</p>
                    <span class="m-0 text-xs max-w-[90%] text-center text-[#8B8E98]">Get started with our platform, just start section and enjoy experience.
                    </span>
                </div>
                <div class="w-full flex flex-col gap-2">
                    <label class="font-semibold text-xs text-gray-400 ">Email</label>
                    <input class="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900 text-white" 
                    placeholder="Email"
                    name='email'
                    type='email' 
                    value={ logindata.email }
                    onChange={ loginHandle }

                    />

                </div>
            </div>
            <div class="w-full flex flex-col gap-2">
                <label class="font-semibold text-xs text-gray-400 ">Password</label>
                <input type="password" class="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900 text-white" placeholder="••••••••" 
                    name='password'
                    value={ logindata.password }
                    onChange={ loginHandle }
                />

            </div>
            <div className="mt-5">
                <button class="py-1 px-8 bg-[#ef305c] hover:bg-blue-800 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer select-none"
                onClick={loginUser}
                >Login</button>
            </div>

            <div className="mt-5">
                <button class="py-1 px-8 bg-[#ef305c] hover:bg-blue-800 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer select-none">
                <Link to="/singup">Signup</Link>
                </button>
            </div>
        </div>
    </div>
</div>

    
</div>

    </>
  )
}

export default Logincomp
