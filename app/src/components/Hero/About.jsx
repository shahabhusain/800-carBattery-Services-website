import Image from 'next/image'
import React from 'react'
import about from '@/public/about.png'
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { GoArrowRight } from 'react-icons/go';
const About = () => {
  return (
    <div className='bg-[#FDF8F8] rounded-t-4xl py-20'>
      <div className=' flex flex-col-reverse md:flex-row items-center justify-between gap-12 w-[90%] mx-auto'>
           <Image className=' md:w-1/2' src={about} alt='about' />
      <div className=' md:w-1/2 flex flex-col gap-y-6'>
       <p className=' uppercase md:text-[16px] text-[12px] font-bold'>About Us</p>
       <h2 className=' uppercase lg:text-[46px] md:text-[36px] text-[25px]  font-semibold'><span className=' text-red-500'>800</span> battery pro</h2>
       <p className=' md:text-[16px] text-[12px] font-normal text-[#00000099]'>800BATTERYPRO delivers fast, reliable car battery replacement wherever you are. Whether at home, work, or roadside, our expert team provides high-quality batteries with quick on-site installation to get you back on the road without delay.</p>
       <div className=' flex flex-col gap-y-3'>
        <button className=' bg-white  p-4 md:text-[16px] text-[12px]  rounded-br-full text-[#4E4E4E] rounded-tr-full flex items-center gap-3 '><span className=' bg-[#F8F8F8] p-3 rounded-tr-full rounded-br-full '><RiArrowRightDoubleLine /></span> Fast on-site battery replacement</button>
        <button className=' bg-white  p-4 md:text-[16px] text-[12px]  rounded-br-full text-[#4E4E4E] rounded-tr-full flex items-center gap-3 '><span className=' bg-[#F8F8F8] p-3 rounded-tr-full rounded-br-full '><RiArrowRightDoubleLine /></span> Premium, long-lasting batteries</button>
         <button className=' bg-white p-4 md:text-[16px] text-[12px]  rounded-br-full text-[#4E4E4E] rounded-tr-full flex items-center gap-3 '><span className=' bg-[#F8F8F8] p-3 rounded-tr-full rounded-br-full '><RiArrowRightDoubleLine /></span> Professional and hassle-free installation</button>
       </div>
         <button className=' w-fit bg-red-600 py-3 px-5 uppercase rounded-full text-white flex items-center gap-x-2'>Learn More<span className=' rotate-320'><GoArrowRight size={30} /></span></button>
      </div>
      </div>
    </div>
  )
}

export default About
