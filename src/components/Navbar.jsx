import {React, useState} from "react";
import {AiOutlineClose} from 'react-icons/ai';
import {HiOutlineMenuAlt4} from 'react-icons/hi';
import {FaFacebook, FaInstagram, FaPinterest, FaYoutube, FaTwitter} from 'react-icons/fa'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [logo, setLogo] = useState(false)
    const handleNav = () => {
        setNav(!nav)
        setLogo(!logo)
    }
    return (
    
    <div className="flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white">
        <div className="mx-4">
            <h1 onClick={handleNav} className={logo ? "hidden" : "block"}>EXCURISO.</h1>
        </div>
        <ul className="hidden md:flex px-6">
            <li className="hover:underline hover:cursor-pointer hover:text-teal-400">Home</li>
            <li className="hover:underline hover:cursor-pointer hover:text-teal-400">Destinations</li>
            <li className="hover:underline hover:cursor-pointer hover:text-teal-400">Travels</li>
            <li className="hover:underline hover:cursor-pointer hover:text-teal-400">View</li>
            <li className="hover:underline hover:cursor-pointer hover:text-teal-400">Book</li>
        </ul>

        <div onClick={handleNav} className="md:hidden z-10">
            {nav ? <AiOutlineClose className="text-black" size={20}/> : <HiOutlineMenuAlt4 size={20} />}
        </div>


        {/* Mobile menu dropdown */}
        <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
            <ul>
                <h1>EXCURISO.</h1>
                <li className="border-b hover:underline hover:cursor-pointer">Home</li>
                <li className="border-b hover:underline hover:cursor-pointer">Destinations</li>
                <li className="border-b hover:underline hover:cursor-pointer">Travels</li>
                <li className="border-b hover:underline hover:cursor-pointer">View</li>
                <li className="border-b hover:underline hover:cursor-pointer">Book</li>
                <div className="flex flex-col">
                    <button className="my-5">Search</button>
                    <button>Account</button>
                </div>
                <hr class="my-4 mx-auto w-60 h-1 bg-gray-100 rounded border-0 md:my-10 dark:bg-gray-700" />
                <div className="flex justify-center space-x-8 my-6 ">
                    <FaFacebook className="icon"/>
                    <FaTwitter className="icon"/>
                    <FaInstagram className="icon"/>
                    <FaPinterest className="icon"/>
                    <FaYoutube className="icon"/>
                </div>
            </ul>
        </div>
    </div>
    
  )
}

export default Navbar