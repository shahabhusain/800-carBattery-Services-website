"use client"
import React, { useEffect, useState } from 'react'
import reviewW from '@/public/Home/reviewW.svg'
import reviewB from '@/public/Home/reviewB.svg'
import Image from 'next/image'
import { FaWhatsapp } from 'react-icons/fa'
import { MdCall } from 'react-icons/md'
const Review = () => {
        const [scrolled, setScrolled] = useState(false)
      useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <div>
               {/* Floating Review Button */}
      <div className='fixed top-52 right-0 z-[9999] transition-all duration-500'>
        {scrolled ? (
          <Image className=' md:w-[70px] w-[30px]' src={reviewB} alt='review white' />
        ) : (
          <Image className=' md:w-[70px] w-[30px]' src={reviewW} alt='review black' />
        )}
      </div>

      <div className=' fixed top-[37rem] md:flex hidden flex-col gap-y-3 right-6 z-[9999]'>
        <div className=' text-2xl animate-bounce bg-green-500 text-white p-3  rounded-full'>
            <FaWhatsapp />
        </div>
         <div className=' text-2xl animate-bounce bg-red-500 text-white p-3  rounded-full'>
            <MdCall />
        </div>
      </div>

      {/* mobile view */}
      <div className=' fixed top-[44rem] w-full flex md:hidden items-center gap-y-3 z-[9999]'>
        <button className=' bg-green-500 text-white py-2 w-full flex justify-center items-center gap-1'>Whatsapp <span><FaWhatsapp /></span></button>
         <button className='bg-red-500 text-white py-2 w-full flex justify-center items-center gap-1'>Call Us <span><MdCall /></span></button>
      </div>
    </div>
  )
}

export default Review
