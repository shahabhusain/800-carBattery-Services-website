import Image from 'next/image'
import React from 'react'
import hero from '@/public/hero.jpg'
import { GoArrowRight } from 'react-icons/go'
const Hero = () => {
  return (
    <div className=' text-white'>
        <div className='relative'>
               <Image className=' w-full md:h-screen h-[500px] object-cover' src={hero} alt='image'/>
      <div className=' bg-[#000000BD] absolute top-0 w-full md:h-screen h-[500px]'></div>
       <div className=' absolute md:top-52 top-32 md:left-36 left-6 right-6 md:right-0 md:max-w-[645px] flex flex-col gap-y-6'>
        <p className=' w-fit md:text-[12px] text-[7px] font-medium text-center bg-[#ffffff16] px-3 py-2 rounded-full'>Car Battery Service in Dubai – 24/7 Roadside Assistance</p>
        <h1 className=' lg:text-[53px] md:text-[43px] sm:text-[33px] text-[25px] font-bold text-white md:leading-[4rem]'>Your Roadside Lifeline - Faster Than You <span className=' text-red-500'>Expect!</span></h1>
        <p className=' md:text-[14px] text-[12px] font-normal'>Dead Battery, Computer program , or Breakdown? We’ll Get You Back on the Road!</p>
              <button className=' w-fit bg-red-600 py-3 px-5 uppercase rounded-full text-white flex items-center gap-x-2'>talk to an expErt<span className=' rotate-320'><GoArrowRight size={30} /></span></button>
       </div>
        </div>
    </div>
  )
}

export default Hero
