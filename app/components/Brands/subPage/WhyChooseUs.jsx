
import React from 'react'
const WhyChooseUs = ({data}) => {
   
  return (
    <div className=' bg-[#FDF8F8] py-20 mt-20 '>
            <div className=' w-[85%] mx-auto flex flex-col gap-y-4 items-center justify-center'>
      <p className=' text-[16px] font-bold text-center'>Why Choose Us</p>
      <h1 className=' text-[40px] font-semibold text-center max-w-[855px]'>Reliable Car <span className=' text-red-800'>Battery Service </span> 
 You Can Trust</h1>
         <div className=' flex flex-col md:flex-row items-center gap-2 justify-between mt-8'>
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
