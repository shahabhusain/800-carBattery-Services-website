import Image from 'next/image'
import React from 'react'
import herobg from '@/public/hero.jpg'
import { useLocale } from 'next-intl'

const heroEnglishContent = {
  title: "About Us",
  desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia tempore quibusdam repudiandae voluptate Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia tempore quibusdam repudiandae voluptate Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia tempore quibusdam repudiandae voluptate."
}

const heroArabicContent = {
  title: "خبير",
   desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia tempore quibusdam repudiandae voluptate Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia tempore quibusdam repudiandae voluptate Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia tempore quibusdam repudiandae voluptate."
}

const Hero = () => {
  const locale = useLocale()
  const hero = locale === "en" ? heroEnglishContent : locale === "ar" ? heroArabicContent : null
  
  return (
    <div className='text-white'>
      <div className='relative'>
        <Image 
          className='w-full h-[450px] object-cover' 
          src={herobg} 
          alt='image'
        />
        <div className='bg-[#000000BD] absolute top-0 w-full md:h-screen h-screen'></div>
        
        {/* Centered content container */}
        <div className='absolute md:left-32 md:top-52 top-32 '>
          <div className={`flex flex-col  gap-y-2 px-4`}>
            <h1 className='lg:text-[45px] md:text-[43px] sm:text-[33px] text-[25px] font-bold text-white md:leading-[4rem]'>
              {hero.title}
            </h1>
          <p className=' md:max-w-2xl'>{hero.desc}</p>
          </div>
        </div>
      </div>
  
    </div>
  )
}

export default Hero