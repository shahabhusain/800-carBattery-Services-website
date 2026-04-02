import React from 'react'
import { FaSitemap } from 'react-icons/fa'

const WhyChooseUs = () => {
    const data = [
        {
            icons:<FaSitemap />,
            title:"Fast Response",
            desc:"Quick service to get your vehicle powered and back on the road without long waiting times."
        },
          {
            icons:<FaSitemap />,
            title:"Quality Batteries",
            desc:"We provide high-performance, long-lasting batteries suitable for a wide range of vehicles."
        },
          {
            icons:<FaSitemap />,
            title:"Expert Technicians",
            desc:"Our trained professionals ensure safe, efficient, and hassle-free battery installation."
        },
          {
            icons:<FaSitemap />,
            title:"Customer Satisfaction",
            desc:"We focus on reliable service and a smooth experience for every customer."
        },
    ]
  return (
    <div className=' bg-[#FDF8F8] py-20 mt-20 '>
            <div className=' w-[85%] mx-auto flex flex-col gap-y-4 items-center justify-center'>
      <p className=' text-[16px] font-bold text-center'>Why Choose Us</p>
      <h1 className=' text-[40px] font-semibold text-center max-w-[855px]'>Reliable Car <span className=' text-red-800'>Battery Service </span> 
 You Can Trust</h1>
         <div className=' flex items-center gap-2 justify-between mt-8'>
           {
            data.map((item, index) => (
                <div className=' flex flex-col gap-y-5 items-start bg-white p-12 h-[50ppx] w-[350px]' key={index}>
                    <span className=' text-[25px]'>{item.icons}</span>
                    <h2 className=' text-[24px] font-semibold '>{item.title}</h2>
                    <p className=' text-[16px] font-normal text-[#4E4E4E]'>{item.desc}</p>
                </div>
            ))
           }
         </div>
    </div>
    </div>
  )
}

export default WhyChooseUs
