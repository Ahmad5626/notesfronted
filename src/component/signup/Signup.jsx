import React, { useState } from 'react'

const Signup = () => {

    const [signupdata, setSignupdata] = useState({
        username: "",
        email: "",
        password: ""
    })


    const signupHandle=(e)=>{
        setSignupdata({
            ...signupdata,
            [e.target.name]: e.target.value})
    }
    
    const createUser = async (e) => {
        e.preventDefault();
        const newdata=signupdata
        const response = await fetch("https://notesbackend-hdqh.onrender.com/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newdata),
        }).then((res) => res.json())
        .then((data) => {
            if(data.success){
                localStorage.setItem("usertoken", data.usertoken)
                window.location.href = "/";
            }
        })
       
    };
    
  return (
    <div>
      <div class="w-screen min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-800 px-4 sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8">
        <div class="bg-white shadow-md rounded-md p-6">

            <img class="mx-auto h-12 w-auto" src="https://www.svgrepo.com/show/499664/user-happy.svg" alt="" />

            <h2 class="my-3 text-center text-3xl font-bold tracking-tight text-gray-900">
                Sign up for an account
            </h2>


            <form class="space-y-6" method="POST">

                <div>
                    <label for="new-password" class="block text-sm font-medium text-gray-700">Username</label>
                    <div class="mt-1">
                        <input name="username" 
                        type="username"
                         required
                         value={signupdata.username}
                         onChange={signupHandle}
                            class="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                    </div>
                </div>

                <div>
                    <label for="password" class="block text-sm font-medium text-gray-700">Email</label>
                    <div class="mt-1">
                        <input name="email" 
                        type="email-address" 
                        autocomplete="email-address" 
                        required
                        value={signupdata.email}
                        onChange={signupHandle}
                            class="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                    </div>
                </div>

                <div>
                    <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                    <div class="mt-1">
                        <input name="password" 
                        type="password" 
                        autocomplete="password" 
                        required
                        value={signupdata.password}
                        onChange={signupHandle}
                            class="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                    </div>
                </div>

              

                <div>
                    <button type="submit"
                    onClick={createUser}

                        class="flex w-full justify-center rounded-md border border-transparent bg-[#ef305c] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2">Register
                        Account
                        </button>
                </div>
            </form>
        </div>
    </div>
</div>
    </div>
  )
}

export default Signup
