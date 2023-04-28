import React from 'react'
import { 
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaPinterest,
    FaYoutube,
  } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full bg-gray-100 py-12'>
        <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
            <div className='sm:flex lg:mx-4 lg:my-4 text-center justify-between items-center'>
                <h1>EXCURISO.</h1>
                <div className="flex justify-between w-full sm:max-w-[280px] my-10 md:my-3">
                    <FaFacebook className="icon hover:scale-150"/>
                    <FaTwitter className="icon hover:scale-150"/>
                    <FaInstagram className="icon hover:scale-150"/>
                    <FaPinterest className="icon hover:scale-150"/>
                    <FaYoutube className="icon hover:scale-150"/>
                </div>
            </div>
            <div className='flex justify-between'>
                <ul className='lg:text-left lg:flex'>
                    <li className='hover:cursor-pointer hover:text-lg hover:text-green-700 hover:underline'>About</li>
                    <li className='hover:cursor-pointer hover:text-lg hover:text-green-700 hover:underline'>Partnerships</li>
                    <li className='hover:cursor-pointer hover:text-lg hover:text-green-700 hover:underline'>Careers</li>
                    <li className='hover:cursor-pointer hover:text-lg hover:text-green-700 hover:underline'>Newsroom</li>
                    <li className='hover:cursor-pointer hover:text-lg hover:text-green-700 hover:underline'>Advertising</li>
                </ul>
                <ul className='text-right lg:flex'>
                    <li className='hover:cursor-pointer hover:text-lg hover:text-green-700 hover:underline'>Home</li>
                    <li className='hover:cursor-pointer hover:text-lg hover:text-green-700 hover:underline'>Destinations</li>
                    <li className='hover:cursor-pointer hover:text-lg hover:text-green-700 hover:underline'>Travel</li>
                    <li className='hover:cursor-pointer hover:text-lg hover:text-green-700 hover:underline'>View</li>
                    <li className='hover:cursor-pointer hover:text-lg hover:text-green-700 hover:underline'>Book</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer