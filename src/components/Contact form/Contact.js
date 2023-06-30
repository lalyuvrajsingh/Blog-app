"use client"
import React from 'react';
import Spline from '@splinetool/react-spline';


const Contact = () => {
    return (
    
        
            <div className="fade-in max-w-6xl p-5 m-5 h-[600px]  mx-auto px-4 sm:px-6 lg:px-8">

                <h2 className="slide-in text-5xl font-bold m-5 mb-10">Get in touch!</h2>
            
            <form className='flex flex-col  justify-center align-middle p-5'>
            
                <input
                type="text"
                id="name"
                className="shadow-lg border  rounded-xl text-black px-4 mb-5  py-2 focus:outline-none focus:ring-2 focus:ring-transparent"
                placeholder="Enter your name"
                required
                />
            
                <input
                type="email"
                id="email"
                className="shadow-lg border rounded-xl px-4 mb-5 text-black py-2 focus:outline-none focus:ring-2 focus:ring-transparent"
                placeholder="Enter your email address"
                required
                />
            
                <textarea
                id="message"
                className="shadow-lg border rounded-xl px-4 py-2 mb-5 text-black focus:outline-none focus:ring-2 focus:ring-transparent"
                placeholder="Enter your message"
                rows="4"
                required
                ></textarea>
            
            <button
                type="submit"
                className="glass-effect bg-gradient-to-r from-black to-gray-500 w-fit text-white px-4 py-2 rounded-md shadow-md
                hover:shadow-xl"
            >
                Send Message
            </button>
            </form>


        </div>
        
    );
}

export default Contact;
