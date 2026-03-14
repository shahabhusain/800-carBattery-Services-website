import Image from 'next/image'
import React from 'react'
import about from '@/public/about.png'
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { GoArrowRight } from 'react-icons/go';
import { useLocale } from 'next-intl';

const englishContent = {
  title: "About Us",
  heading: "battery pro",
  description: "Welcome to 800BatteryPro—your go-to choice for rapid, reliable car battery services in Dubai and Abu Dhabi. Need the best car battery prices or 24/7 roadside assistance in Dubai? Don’t waste time searching for a battery shop near me—our mobile team and fully stocked store make battery emergencies simple and stress-free. Choose 800BatteryPro for superior speed and customer-first solutions.",
  features: [
    "Premium Car Brand Battery Services",
    "Get Serviced With 24/7 Roadside Assistance",
    "Trusted By Car Owners in Dubai & Abu Dhabi"
  ],
  cta: "Learn More"
};

const arabicContent = {
  title: "من نحن",
  heading: "800 بطارية برو",
  description: "تقدم 800 بطارية برو خدمة استبدال بطاريات السيارات السريعة والموثوقة أينما كنت. سواء في المنزل أو العمل أو على الطريق، يوفر فريقنا الخبير بطاريات عالية الجودة مع تركيب سريع في الموقع لإعادتك إلى الطريق دون تأخير.",
  features: [
    "استبدال بطارية سريع في الموقع",
    "بطاريات ممتازة وطويلة الأمد",
    "تركيب احترافي وخالي من المتاعب"
  ],
  cta: "اقرأ المزيد"
};

const About = () => {
  const locale = useLocale()
  const content = locale === "en" ? englishContent : locale === "ar" ? arabicContent : englishContent
  
  const isRTL = locale === 'ar'

  return (
    <div className='bg-[#FDF8F8] rounded-t-4xl py-20' dir={isRTL ? 'rtl' : 'ltr'}>
      <div className='flex flex-col-reverse md:flex-row items-center justify-between gap-12 w-[90%] mx-auto'>
        <Image className='md:w-1/2' src={about} alt='about' />
        <div className='md:w-1/2 flex flex-col gap-y-6'>
          <p className='uppercase md:text-[16px] text-[12px] font-bold'>
            {content.title}
          </p>
          <h1 className='uppercase lg:text-[40px] md:text-[36px] text-[25px] font-semibold'>
            <span className='text-red-500'>800</span> {content.heading}
          </h1>
          <p className='md:text-[16px] text-[12px] font-normal text-[#00000099]'>
            {content.description}
          </p>
          <div className='flex flex-col gap-y-3'>
            {content.features.map((feature, index) => (
              <button 
                key={index} 
                className='bg-white p-4 md:text-[16px] text-[12px] rounded-br-full text-[#4E4E4E] rounded-tr-full flex items-center gap-3'
              >
                <span className='bg-[#F8F8F8] p-3 rounded-tr-full rounded-br-full'>
                  <RiArrowRightDoubleLine className={isRTL ? 'rotate-180' : ''} />
                </span>
                {feature}
              </button>
            ))}
          </div>
          <button className='w-fit bg-red-600 py-3 px-5 uppercase rounded-full text-white flex items-center gap-x-2'>
            {content.cta}
            <span className={isRTL ? 'rotate-180' : ''}>
              <GoArrowRight size={30} />
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default About