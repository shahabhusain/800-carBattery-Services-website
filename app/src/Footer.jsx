import Image from 'next/image'
import React from 'react'
import footer from '@/public/footer.jpg'
import { FaInstagram, FaLocationArrow, FaMailBulk, FaPhone, FaTwitter, FaYoutube } from 'react-icons/fa'
import logo from '@/public/logo.svg'
import { GoArrowRight } from 'react-icons/go'

const Footer = () => {
  return (
    <div>
      {/* Location Tabs */}
      <div className='flex flex-col sm:flex-row'>
        <span className='border-[1px] border-[#0000001b] py-3 text-center w-full sm:w-1/2 text-sm sm:text-base'>
          Dubai
        </span>
        <span className='border-[1px] border-[#0000001b] py-3 text-center w-full sm:w-1/2 text-sm sm:text-base'>
          Abu Dhabi
        </span>
      </div>

      {/* Footer Main Section */}
      <div className='w-full relative text-white'>
        {/* Background Image */}
        <Image 
          className='w-full h-[1050px] sm:h-[700px] md:h-[800px] object-cover' 
          src={footer} 
          alt='footer'
          priority
        />
        
        {/* Overlay Gradient */}
        <div className='bg-gradient-to-b from-red-600/90 via-[#00000075] to-[#000000] absolute top-0 w-full h-[600px] sm:h-[700px] md:h-[800px]'></div>
        
        {/* Content Container */}
        <div className='absolute top-16 sm:top-20 md:top-24 lg:top-32 left-0 right-0 px-4 sm:px-6'>
          {/* Top Section */}
          <div className='flex flex-col lg:flex-row items-center justify-between w-full lg:w-[90%] xl:w-[80%] mx-auto gap-6 lg:gap-0'>
            <h1 className='text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] font-semibold max-w-full lg:max-w-[655px] text-center lg:text-left'>
              Your Roadside Lifeline - Faster Than You Expect!
            </h1>
            
            {/* Vertical Divider - Hidden on mobile/tablet */}
            <div className='hidden lg:block w-[1px] h-[100px] md:h-[120px] lg:h-[150px] bg-white'></div>
            
            {/* Social Icons */}
            <div className='flex items-center gap-4 md:gap-5'>
              <FaYoutube size={20} className='md:w-6 md:h-6 hover:text-red-400 transition-colors cursor-pointer' />
              <FaInstagram size={20} className='md:w-6 md:h-6 hover:text-red-400 transition-colors cursor-pointer' />
              <FaTwitter size={20} className='md:w-6 md:h-6 hover:text-red-400 transition-colors cursor-pointer' />
            </div>
          </div>

          {/* Main Footer Content Grid */}
          <div className='flex flex-col lg:flex-row gap-6 md:gap-8 w-full lg:w-[90%] xl:w-[80%] mx-auto mt-12 md:mt-16 lg:mt-24 xl:mt-32'>
            {/* Column 1 - Quick Links */}
            <div className='w-full lg:w-[25%]'>
              <Image 
                className='border-b-[1px] border-b-[#ffffff51] pb-4 w-[120px] md:w-auto' 
                src={logo} 
                alt='logo' 
              />
              <ul className='flex flex-col items-start gap-y-2 md:gap-y-3 mt-4'>
                <h1 className='text-[18px] md:text-[20px] font-medium'>Quick Links</h1>
                <li className='text-[14px] md:text-[16px] font-normal hover:text-red-400 transition-colors cursor-pointer'>
                  Car Brand
                </li>
                <li className='text-[14px] md:text-[16px] font-normal hover:text-red-400 transition-colors cursor-pointer'>
                  Services
                </li>
                <li className='text-[14px] md:text-[16px] font-normal hover:text-red-400 transition-colors cursor-pointer'>
                  About Us
                </li>
                <li className='text-[14px] md:text-[16px] font-normal hover:text-red-400 transition-colors cursor-pointer'>
                  Contact Us
                </li>
                <li className='text-[14px] md:text-[16px] font-normal hover:text-red-400 transition-colors cursor-pointer'>
                  Book an Appointment
                </li>
              </ul>
            </div>

            {/* Column 2 - Reach Us */}
            <div className='w-full lg:w-[35%] flex flex-col gap-y-3 md:gap-y-4'>
              <h2 className='text-[18px] md:text-[20px] font-medium'>Reach Us</h2>
              
              <div className='mt-2 md:mt-5 flex items-center gap-3 bg-[#ffffff1a] py-2 md:py-3 px-3 md:px-5 rounded-md border-[1px] border-[#ffffff45] hover:bg-[#ffffff30] transition-colors'>
                <FaMailBulk className='flex-shrink-0' size={16} />
                <p className='text-[13px] md:text-[14px] truncate'>info@yourwebsite.com</p>
              </div>
              
              <div className='flex items-center gap-3 bg-[#ffffff1a] py-2 md:py-3 px-3 md:px-5 rounded-md border-[1px] border-[#ffffff45] hover:bg-[#ffffff30] transition-colors'>
                <FaPhone className='flex-shrink-0' size={16} />
                <p className='text-[13px] md:text-[14px]'>+971-XXX-XXXX</p>
              </div>
              
              <div className='flex items-center gap-3 bg-[#ffffff1a] py-2 md:py-3 px-3 md:px-5 rounded-md border-[1px] border-[#ffffff45] hover:bg-[#ffffff30] transition-colors'>
                <FaLocationArrow className='flex-shrink-0' size={16} />
                <p className='text-[13px] md:text-[14px]'>Al Quoz Industrial Area 4, Dubai, UAE</p>
              </div>
            </div>

            {/* Column 3 - Newsletter */}
            <div className='w-full lg:w-[40%] bg-[#ffffff1a] flex flex-col gap-y-3 md:gap-y-4 p-4 md:p-5 lg:p-6 rounded-xl lg:rounded-2xl border-[1px] border-[#ffffff45]'>
              <h1 className='text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] font-bold'>
                Stay Ahead of Change
              </h1>
              <p className='text-[13px] md:text-[14px] text-gray-200'>
                Stay connected with us for updates, offers, and service support.
              </p>
              
              <div className='bg-[#ffffff1a] flex items-center justify-between px-3 md:px-5 py-2 md:py-3 rounded-md border-[1px] border-[#ffffff45] mt-2'>
                <input 
                  type="email" 
                  placeholder='Enter your email' 
                  className='w-full focus:outline-none border-none bg-transparent text-[13px] md:text-[14px] placeholder:text-gray-300'
                />
                <button className='rotate-320 bg-[#000] p-2 md:p-3 rounded-full hover:bg-red-600 transition-colors flex-shrink-0'>
                  <GoArrowRight size={20} className='md:w-[30px] md:h-[30px]' />
                </button>
              </div>
              
              <p className='text-[11px] md:text-[12px] text-gray-300 mt-2'>
                We'll never share your email. Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Copyright */}
         
        </div>
         <p className='text-center pt-3 bg-[#000000] py-2 text-[12px] md:text-[14px] w-full'>
            © Copyright by 800BATTERYPRO – All right reserved.
          </p>
      </div>
    </div>
  )
}

export default Footer