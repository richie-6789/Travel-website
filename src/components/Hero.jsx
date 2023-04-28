import React from "react";
import beachVid from "../assets/beachVid1.mp4"
import {AiOutlineSearch} from 'react-icons/ai'

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
        <video 
            className="w-full h-full object-cover" 
            src={beachVid} 
            autoPlay
            muted 
            loop 
        />
        <div className="absolute w-full h-full top-0 left-0 bg-gray-900/40"></div>
        <div className="absolute w-full h-full top-0 flex flex-col justify-center text-center p-4 text-stone-200">
            <h1>Discover the World, Leave Your Footprints Behind!</h1>
            <h2 className="py-4 text-emerald-100">A Journey Beyond Borders</h2>
            <form className="flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 my-2 rounded-md text-black bg-gray-100/90">
                <div>
                    <input className="bg-transparent w-[300px] sm:w-[400px] font-[Poppins] focus:outline-none" 
                        type="text" 
                        placeholder="Search Destinations" 
                    />
                </div>
                <div>
                    <button><AiOutlineSearch size={20} className='icon' style={{color: '#FFF'}}/></button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Hero