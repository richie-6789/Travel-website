import React from 'react';
import Somethinf from '../assets/boat2.jpg'

const Contact = () => {
  return (
    <div className="relative w-full flex flex-col justify-center min-h-screen overflow-hidden ">
        <div className='relative hover:cursor-pointer  '>
            <img className="w-full  h-[800px] object-cover lazyLoad backdrop-sepia" src={Somethinf} alt="" />
            <div className='flex  justify-center items-center absolute top-0 left-0 w-full h-full'>
                <div className=" ">
                <h1 className="font-xl text-center text-gray-800  uppercase ">
                    Contact Us
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                        <label htmlFor='name'>
                        {/* <span className="text-gray-800 font-semibold">Your name</span> */}
                        <input
                            type="text"
                            name="name"
                            className="w-full block my-4 px-2 py-3 mt-2 border border-white bg-sky-100 rounded-xl shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            placeholder="Your Name"
                            required
                        />
                        </label>
                    </div>
                    <div className="mb-2">
                        <label htmlFor='email'>
                        {/* <span className="text-gray-800 font-semibold">Email address</span> */}
                        <input
                            name="email"
                            type="email"
                            className="w-full block my-4 px-2 py-3 mt-2 border border-white bg-sky-100 rounded-xl shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            placeholder="Your Email"
                            required
                        />
                        </label>
                    </div>
                    <div className="mb-2">
                        <label htmlFor='message'>
                        {/* <span class="text-gray-800 font-semibold">Message</span> */}
                        <textarea
                            name="message"
                            className="w-full block my-4 px-2 py-3 mt-2 border border-white bg-sky-100 rounded-xl shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            rows="5"
                            placeholder='Your Message'
                        ></textarea>
                        </label>
                    </div>

                    <div class="mb-6 flex place-content-center">
                        <button
                        type="submit"
                        className="h-14 w-221 px-5 text-indigo-100 bg-teal-800/10 rounded-3xl focus:shadow-outline hover:bg-gray-800">
                        Send Message
                        </button>
                </div>
    
            </form>
        </div>
            </div>
        </div>










    </div>
  );
};

export default Contact;