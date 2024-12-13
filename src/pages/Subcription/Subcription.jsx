import React from 'react'
import Header from '../../component/Header/Header'
import axios from "axios";
const Subcription = () => {

    const handlePayment = async () => {
        try {
            // Backend se order create karna
            const response = await fetch("http://localhost:5000/create-order", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error("Failed to create order");
            }

            const data = await response.json();

            const options = {
                key: "rzp_test_r5JK3GVo92vEPm", // Replace with your Razorpay Key ID
                amount: data.amount,
                currency: data.currency,
                name: "Test",
                description: "Subscription Plan",
                order_id: data.id, // Order ID from backend
                handler:async function  (response) {
                    // Extract Payment ID
                    const paymentId = response.razorpay_payment_id;
                    const orderId = response.razorpay_order_id;
                    const signature = response.razorpay_signature;
                    
                    localStorage.setItem("paymentId", paymentId);

                    console.log("Payment response:", response);
                    const userid=localStorage.getItem("userid")
                    console.log(userid);
                    
                    
                    await fetch("http://localhost:5000/subcribe",({
                        method:"POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ paymentId, orderId, signature }),
                    }))
 
                    alert(`Payment successful! Payment ID: ${paymentId}`);
                },
                prefill: {
                    name: "raza",
                    email: "your-email@example.com",
                    contact: "1234567890",
                },
                theme: {
                    color: "#3399cc",
                },
            };

            const rzp = new window.Razorpay(options);
            rzp.open();
        } catch (error) {
            console.error("Payment error: ", error);
        }
    };
  return (
    <>

    <Header/>
    <div className='mt-32'>
      <div class="p-4 h-screen w-[90%] mx-auto">
    <div
        class="max-w-lg mx-auto rounded-lg overflow-hidden lg:max-w-none lg:flex my-10 shadow-teal border-4 border-[#1353fe]">
        <div class=" px-6 py-8 lg:flex-shrink-1 lg:p-12 bg-[#ef305c]">
            <h3
                class="text-2xl text-left leading-8 font-extrabold text-gray-200 sm:text-3xl sm:leading-9 dark:text-gray-100">
                Subscription
            </h3>
            <p class="mt-6 text-left font-ttnorms leading-8 text-white text-lg ">The Team
                subscription grants your
                entire
                As a subscriber to our website, you'll have access to a wide range of exclusive benefits and perks.
            </p>
            <div class="mt-8">
                <div class="flex items-center">
                    <h4
                        class="flex-shrink-0 pr-4 font-bold bg-white text-sm leading-5 tracking-wider uppercase text-[white]  dark:bg-transparent">
                        What's included
                    </h4>
                    <div class="flex-1 border-t-2 border-gray-200 dark:border-gray-700"></div>
                </div>
                <ul class="pl-0 mt-8 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5 space-y-5 lg:space-y-0">
                    <li class="flex items-start lg:col-span-1">
                        <div class="flex-shrink-0"><svg class="h-5 w-5 text-[black] "
                                fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd">
                                </path>
                            </svg>
                        </div>
                        <p class="ml-3 text-lg leading-5 text-gray-700 font-ttnorms text-left dark:text-gray-300">
                            Access to premium content and exclusive articles
                        </p>
                    </li>
                    <li class="flex items-start lg:col-span-1">
                        <div class="flex-shrink-0"><svg class="h-5 w-5 text-[black] "
                                fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd">
                                </path>
                            </svg>
                        </div>
                        <p class="ml-3 text-lg leading-5 text-gray-700 font-ttnorms text-left dark:text-gray-300">
                            Free Shipping on select products
                        </p>
                    </li>
                    <li class="flex items-start lg:col-span-1">
                        <div class="flex-shrink-0"><svg class="h-5 w-5 text-[black] "
                                fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd">
                                </path>
                            </svg>
                        </div>
                        <p class="ml-3 text-lg leading-5 text-gray-700 font-ttnorms text-left dark:text-gray-300">
                            Early access to upcoming events and promotions
                        </p>
                    </li>
                    <li class="flex items-start lg:col-span-1">
                        <div class="flex-shrink-0"><svg class="h-5 w-5 text-[black] "
                                fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd">
                                </path>
                            </svg>
                        </div>
                        <p class="ml-3 text-lg leading-5 text-gray-700 font-ttnorms text-left dark:text-gray-300">
                            Dedicated customer support
                        </p>
                    </li>
                </ul>
            </div>
        </div>
        <div
            class="py-8 px-6 text-center  lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12 bg-[#ef305c]">
            <p
                class="text-xl leading-6 font-medium text-gray-100 lg:max-w-xs lg:mx-auto mb-0 lg:mb-6 dark:text-gray-100">
                A single
                payment for your entire team
            </p>
            <div
                class="my-10 lg:my-6 flex items-baseline justify-center text-5xl leading-none font-extrabold text-gray-200 dark:text-gray-100">
                <span class="font-brown">₹ 499</span><span class="text-xl leading-7 font-medium text-gray-100 font-ttnorms">/One Time</span>
            </div>
            <div class="lg:mt-6">
                <div class="rounded-md shadow">
                    <a href="#"
                        class="flex items-center justify-center px-5 py-3 leading-6 font-medium rounded-md focus:outline-none focus:ring transition duration-200 ease-in-out shadow-teal border-2  bg-[#1353fe] hover:bg-black hover:shadow-teal-hover text-[black] hover:text-white text-lg relative z-20  dark:text-white " onClick={handlePayment}>
                        Pay Now
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>

    </>
  )
}

export default Subcription
