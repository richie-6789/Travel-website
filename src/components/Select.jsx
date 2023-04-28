import React from 'react'

import BoraBora from '../assets/borabora123.jpg';
import BoraBora2 from '../assets/borabora2.jpg';
import Maldives2 from '../assets/maldives2.jpg';
import boat6 from '../assets/boat6.jpg';
import boat2 from '../assets/boat2.jpg';
import some2 from '../assets/some2.jpg';
import SelectsCard from './SelectsCard';

const Select = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16'>
      <div className='text-center'><h1>Most Visited Locations</h1></div>
      <div className='py-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>

        <SelectsCard bg={BoraBora} text='Bora Bora' />
        <SelectsCard bg={BoraBora2} text='Maldives' />
        <SelectsCard bg={boat2} text='Antigua' />
        <SelectsCard bg={Maldives2} text='Cozumel' />
        <SelectsCard bg={some2} text='Jamaica' />
        <SelectsCard bg={boat6} text='Key West' />

    </div>
    </div>
    
  )
}

export default Select