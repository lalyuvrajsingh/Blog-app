import React from 'react';
import Contact from '../Contact form/Contact';

const SideBar = () => {
    return (
        <div className='slide-in w-[300px] glass border m-3 mt-[100px] rounded-2xl shadow-xl p-4 border-gray-300 border-opacity-30'>

                <div className='m-5 flex flex-col mb-10'>
                        <h2 className="text-4xl font-bold mb-3">Subscribe to Nikhil's Newsletter</h2>
                        <br />
                        <p className='mb-10 text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, voluptas?</p>
                        <form className="flex flex-col mr-auto max-w-sm ">
                        <input
                            type="email"
                            className="rounded-l-md mb-5 px-4 py-2 rounded-md h-fit shadow-md focus:outline-none focus:ring-2 border border-gray-100 focus:ring-transparent 
                            hover:shadow-xl"
                            placeholder="Enter your email address"
                            required
                        />
                        <button
                            type="submit"
                            className="glass-effect bg-gradient-to-r mb-11 from-black to-gray-500 text-white px-4 py-2 rounded-md shadow-md
                            hover:shadow-xl"
                        >
                            Subscribe
                        </button>
                        </form>

                <div>
                        <h2 className="text-4xl font-bold mb-5 mt-11">Contact Us</h2>
                        <form className='flex flex-col align-middle '>
                        
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
                            className="glass-effect bg-gradient-to-r mb-10 from-black to-gray-500 text-white px-4 py-2 rounded-md shadow-md
                            hover:shadow-x"
                        >
                            Send Message
                        </button>
                        </form>
            </div>


                </div>

        </div>
    );
}

export default SideBar;
