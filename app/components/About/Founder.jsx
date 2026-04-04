import React from 'react'
import bg from '@/public/about.svg'
import founder from '@/public/founder.svg'
import Image from 'next/image'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
const Founder = () => {
  return (
    <div className=' relative md:w-[85%] w-[90%] md:mb-20 mb-[900px] mx-auto max-w-[1500px]'>
      <Image className='md:block hidden' src={bg} alt='bg'/>
      <div className=' absolute md:top-36 top-12 w-full flex flex-col md:flex-row items-center justify-around'>
           <div className=' md:w-1/2'>
            <Image className='' src={founder} alt='founder'/>
           </div>
           <div className=' md:w-1/2 flex flex-col gap-2'>
              <h1 className=' text-red-800 text-[40px] font-semibold'>Samin Jan</h1>
              <h2 className=' text-[20px] font-semibold'>Founder & CEO</h2>
              <div className=' flex items-center gap-3'>
                <span className=' bg-[#f8f8f8] p-3 rounded-full'><FaYoutube /></span>
                <span className=' bg-[#f8f8f8] p-3 rounded-full'><FaInstagram /></span>
                <span className=' bg-[#f8f8f8] p-3 rounded-full'><FaTwitter /></span>
              </div>
              <p className=' text-[#00000099] mt-6'>As an artist here to solve such issues, we successfully filed several mandamus cases on behalf of more than 250 artwork and their family members and had approved green cards within several months after filing a complaint.</p>
              <p className=' text-[#00000099] mt-4'>As an artist here to solve such issues, we successfully filed several mandamus cases on behalf of more than 250 artwork and their family members and had approved green cards within several months after filing a complaint.</p>
           </div>
      </div>
    </div>
  )
}

export default Founder
