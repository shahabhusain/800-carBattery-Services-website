import Image from 'next/image'
import React from 'react'
import herobg from '@/public/hero.jpg'
import { GoArrowRight } from 'react-icons/go'
import { useLocale } from 'next-intl'
const heroEnglishContent = {
  desc:"Battery Service in Dubai – 24/7 Roadside Assistance",
  title:{
    span1:"800BatteryPro - Car Battery Services in Dubai ",
    span2:"& Abu Dhabi!"
  },
  desc1:"Car Battery Boosting & Replacement - Roadside Assistance - Premium Car Repairs",
  btn:"talk to an expErt"
}

const heroArabicContent = {
  desc: "خدمة بطارية السيارة في دبي – مساعدة على الطريق 24/7",
  title: {
    span1: "800BatteryPro - خدمات بطاريات السيارات في دبي",
    span2: "وأبوظبي!"
  },
  desc1: "تشغيل البطارية واستبدالها - مساعدة على الطريق - إصلاح سيارات متميز",
  btn: "تحدث مع خبير"
};

const Hero = () => {
  const locale = useLocale()
  const hero = locale === "en" ? heroEnglishContent : locale === "ar" ? heroArabicContent : null
  return (
    <div className=' text-white'>
        <div className='relative'>
               <Image className=' w-full md:h-[800px] h-[500px] object-cover' src={herobg} alt='image'/>
      <div className=' bg-[#000000BD] absolute top-0 w-full md:h-screen h-[500px]'></div>
       <div className={`absolute md:top-60 top-32  ${locale === "en" ? "md:left-36 md:right-0 left-6 right-6" : locale === "ar" ? "md:right-36 md:left-0 left-6 right-6" : null}  md:max-w-[645px] flex flex-col gap-y-6`}>
        <p className=' w-fit md:text-[12px] text-[7px] font-medium text-center bg-[#ffffff16] px-3 py-2 rounded-full'>{hero.desc}</p>
        <h1 className=' lg:text-[45px] md:text-[43px] sm:text-[33px] text-[25px] font-bold text-white md:leading-[4rem]'>{hero.title.span1}<span className=' text-red-500'>{hero.title.span2}</span></h1>
        <p className=' md:text-[14px] text-[12px] font-normal'>{hero.desc1}</p>
              <button className=' w-fit bg-red-600 py-3 px-5 uppercase rounded-full text-white flex items-center gap-x-2'>{hero.btn}<span className=' rotate-320'><GoArrowRight size={30} /></span></button>
       </div>
        </div>
    </div>
  )
}

export default Hero
