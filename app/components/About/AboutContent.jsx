import Image from 'next/image'
import React from 'react'
import about from '@/public/about.png'
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { GoArrowRight } from 'react-icons/go';
import { useLocale } from 'next-intl';
import { IoAtCircleOutline } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
const englishContent = {
  title: "About Us",
  heading: "800 battery pro",
  description: "800BATTERYPRO delivers fast, reliable car battery replacement wherever you are. Whether at home, work, or roadside, our expert team provides high-quality batteries with quick on-site installation to get you back on the road without delay.",
  features: [
    "Fast on-site battery replacement",
    "Premium, long-lasting batteries",
    "Professional and hassle-free installation"
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

const AboutContent = () => {
  const locale = useLocale()
  const content = locale === "en" ? englishContent : locale === "ar" ? arabicContent : englishContent
  
  const isRTL = locale === 'ar'
   const data = {
       mission:[
        "Exceptional Customer","Exceptional Customer","Exceptional Customer","Exceptional Customer"
       ],
        vision:[
        "Exceptional Customer","Exceptional Customer","Exceptional Customer","Exceptional Customer"
       ],
   }
  return (
    <div className='bg-[#fff] rounded-t-4xl py-20' dir={isRTL ? 'rtl' : 'ltr'}>
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
                className='bg-[#f8f8f8] p-4 md:text-[16px] text-[12px] rounded-br-full text-[#4E4E4E] rounded-tr-full flex items-center gap-3'
              >
                <span className='bg-[#ffffff] p-3 rounded-tr-full rounded-br-full'>
                  <RiArrowRightDoubleLine className={isRTL ? 'rotate-180' : ''} />
                </span>
                {feature}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className=' flex items-center gap-12 justify-between w-[90%] mx-auto mt-12'>
       <div className=' w-1/2 flex flex-col gap-y-3 bg-[#F8F8F8] p-8 rounded-2xl'>
         <h1 className=' text-[32px] font-bold flex items-center justify-between'>Our Mission <span className=' p-4 rounded-full bg-white'><IoAtCircleOutline /></span></h1>
         <p className=' text-[14px] font-normal text-[#4E4E4E]'>Our mission is to deliver reliable, efficient, and professional automotive services that keep vehicles safe, road-ready, and customers confident at every stage.</p>
          <div className=' grid grid-cols-2 gap-2 mt-3'>
             {data.mission.map(item => <p className=' bg-white p-4 flex items-center gap-2'><MdOutlineKeyboardDoubleArrowRight />{item}</p>)}
          </div>
       </div>
        <div className=' w-1/2 flex flex-col gap-y-3 bg-[#F8F8F8] p-8 rounded-2xl'>
           <h1 className=' text-[32px] font-bold flex items-center justify-between'>Our Vision <span className=' p-4 rounded-full bg-white'><FaEye /></span></h1>
         <p className=' text-[14px] font-normal text-[#4E4E4E]'>Our mission is to deliver reliable, efficient, and professional automotive services that keep vehicles safe, road-ready, and customers confident at every stage.</p>
         <div className=' grid grid-cols-2 gap-2 mt-3'>
                 {data.vision.map(item => <p className=' bg-white p-4 flex items-center gap-2'><MdOutlineKeyboardDoubleArrowRight />{item}</p>)}
         </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent