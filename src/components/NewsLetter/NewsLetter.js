"use client"
import React from 'react';
import Spline from '@splinetool/react-spline';


const NewsLetter = () => {
    return (
        <div>
                
                    <div className="max-w-6xl flex  h-[600px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className='m-5 flex flex-col justify-center mr-auto'>
                        <h2 className="text-5xl font-bold mb-10">Subscribe to Nikhil's Newsletter</h2>
                        <br />
                        <Spline 
                    scene="https://prod.spline.design/8UN2PV3CWxYPct4G/scene.splinecode"
                    className='md:hidden flex h-[200px]'
                    />
                        <p className='mb-10 text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, voluptas?</p>
                        <form className="flex justify-center max-w-sm ">
                        <input
                            type="email"
                            className="flex-1 rounded-l-md px-4 py-2 rounded-md h-fit shadow-md focus:outline-none focus:ring-2 border border-gray-100 focus:ring-transparent 
                            hover:shadow-xl"
                            placeholder="Enter your email address"
                            required
                        />
                        <button
                            type="submit"
                            className="glass-effect bg-gradient-to-r from-black to-gray-500 text-white px-4 py-2 rounded-md ml-2 shadow-md
                            hover:shadow-xl"
                        >
                            Subscribe
                        </button>
                        </form>
                    </div>

                        
                    <Spline 
                    scene="https://prod.spline.design/8UN2PV3CWxYPct4G/scene.splinecode"
                    className='hidden md:flex w-3/4'
                    />
                        

                    </div>
                
        </div>
    );
}

export default NewsLetter;
