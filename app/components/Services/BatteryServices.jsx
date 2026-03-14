import Image from 'next/image'
import React from 'react'
import serviceImg1 from '@/public/services/1.webp'
import serviceImg2 from '@/public/services/2.webp'
import serviceImg3 from '@/public/services/3.webp'
import serviceImg4 from '@/public/services/4.webp'
import serviceImg5 from '@/public/services/5.webp'
import serviceImg6 from '@/public/services/6.webp'
import serviceImg7 from '@/public/services/7.webp'
import serviceImg8 from '@/public/services/8.webp'
import serviceImg9 from '@/public/services/9.webp'
import serviceImg10 from '@/public/services/10.webp'
import serviceImg11 from '@/public/services/11.webp'
import serviceImg12 from '@/public/services/12.webp'
const BatteryServices = () => {
    const services = [
      {
        img:serviceImg1,
        title:"Car Battery Replacement",
        desc:"Fast, reliable battery replacement delivered to your location in under 30 minutes. "
      },
        {
        img:serviceImg2,
        title:"Car Battery Boosting",
        desc:"Quick and stress-free jump-start services wherever you are."
      },
        {
        img:serviceImg3,
        title:"24/7 Roadside Assistance",
        desc:"Immediate roadside support across the UAE, anytime, anywhere."
      },
        {
        img:serviceImg4,
        title:"Car Scanning & Diagnostics",
        desc:" Advanced diagnostics to identify and resolve car issues with precision."
      },
        {
        img:serviceImg5,
        title:"Mechanical Services",
        desc:"Comprehensive mechanical repairs to keep your car running smoothly."
      },
        {
        img:serviceImg6,
        title:"Electrical Services",
        desc:" Expert solutions for all your car’s electrical system needs."
      },
        {
        img:serviceImg7,
        title:"ECU Repair",
        desc:" Professional ECU repairs to restore your car’s optimal performance."
      },
        {
        img:serviceImg8,
        title:"Flood Car Repair",
        desc:"Specialized flood damage repair to bring your car back to life."
      },
        {
        img:serviceImg9,
        title:"Car Key Programming",
        desc:" Hassle-free car key programming and replacement services."
      },
        {
        img:serviceImg10,
        title:"BCM Repair",
        desc:"Reliable body control module repairs to restore essential car functions."
      },
        {
        img:serviceImg11,
        title:"ADAS Sensor Repair",
        desc:" Precision repair and calibration for advanced driver assistance systems."
      },
        {
        img:serviceImg12,
        title:"Radiator Fan Repair",
        desc:" Quick and efficient radiator fan replacements to prevent overheating."
      },
    ]
  return (
    <div className=' w-[85%] mx-auto flex flex-col gap-y-3 py-20'>
      <p className=' uppercase text-center text-[16px] font-semibold'>sERVICES</p>
      <h1 className=' lg:text-[40px] md:text-[35px] sm:text-[30px] text-[25px] font-semibold text-center'><span className=' font-normal'>Reliable</span> <span className=' text-red-700'>Car Battery</span> Services</h1>
      <div className=' grid md:grid-cols-4 grid-cols-1 gap-3 mt-5'>
           {
            services.map((item, index) => (
              <div key={index} className=' relative'>
                <Image width={380} height={190} src={item.img} alt='service'/>
                 <div className=' flex flex-col gap-y-3 p-4 bg-[#f8f8f8]'>
                    <h2 className=' text-[24px] font-bold'>{item.title}</h2>
                <p className=' text-[#4E4E4E] text-[16px] font-normal'>{item.desc}</p>
                 </div>
              </div>
            ))
           }
      </div>
    </div>
  )
}

export default BatteryServices
