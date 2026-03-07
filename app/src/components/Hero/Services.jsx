import Image from 'next/image'
import React from 'react'
import { GoArrowRight } from 'react-icons/go'
import service from '@/public/service.jpg'

const Services = () => {
  
  // Service data array for cleaner code
  const services = [
    {
      title: "Battery Replacement",
      description: "We immerse ourselves in your issues and we put our knowledge and expertise at your service",
      image: service // Add image reference
    },
    {
      title: "Battery Boosting",
      description: "We immerse ourselves in your issues and we put our knowledge and expertise at your service",
      image: service
    },
    {
      title: "Roadside Assistance",
      description: "We immerse ourselves in your issues and we put our knowledge and expertise at your service",
      image: service
    },
    {
      title: "Car Scanning",
      description: "We immerse ourselves in your issues and we put our knowledge and expertise at your service",
      image: service
    }
  ];

  return (
    <div className='w-[95%] md:w-[85%] lg:w-[80%] mx-auto mt-12 md:mt-16 lg:mt-20 px-4 sm:px-0'>
      {/* Header Section */}
      <div className='text-left'>
        <h1 className='text-[14px] md:text-[16px] font-bold text-gray-600 uppercase tracking-wider'>
          SERVICES
        </h1>
        
        <div className='flex flex-col md:flex-row items-center justify-between mt-4 md:mt-6 gap-4 md:gap-0'>
          <h1 className='text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold leading-tight  text-left'>
            <span className='font-normal'>Reliable</span>{' '}
            <span className='text-[#C1121F]'>Car Battery</span>{' '}
            <span className='block sm:inline'>Services</span>
          </h1>
          
          <button className='w-full sm:w-fit bg-red-600 py-2.5 sm:py-3 px-4 sm:px-5 uppercase rounded-full text-white flex items-center justify-center gap-x-2 hover:bg-red-700 transition-colors text-sm sm:text-base'>
            view all
            <span className='rotate-320'>
              <GoArrowRight size={24} className='sm:w-[30px] sm:h-[30px]' />
            </span>
          </button>
        </div>
      </div>
      
      {/* Service Items */}
      <div className='flex flex-col gap-y-4 sm:gap-y-6 mt-8 sm:mt-10 lg:mt-12'>
        {services.map((serviceItem, index) => (
          <div 
            key={index}
            className='group transition-all duration-300 ease-in-out flex flex-col lg:flex-row hover:bg-gradient-to-r from-red-500 to-red-400 p-4 sm:p-5 lg:px-6 rounded-xl lg:rounded-2xl items-start lg:items-center gap-4 lg:gap-8 xl:gap-12 relative cursor-pointer border border-gray-100 hover:border-transparent'
          >
            {/* Title */}
            <h2 className='text-[20px] sm:text-[22px] lg:text-[24px] xl:text-[26px] font-semibold group-hover:text-red-50 transition-colors w-full lg:w-auto'>
              {serviceItem.title}
            </h2>
            
            {/* Image Container - Hidden on mobile, visible on larger screens */}
            {serviceItem.image && (
              <div className='hidden lg:block relative w-[100px] xl:w-[150px] h-[100px] xl:h-[150px] overflow-hidden flex-shrink-0'>
                <div className='absolute inset-y-0 left-0 w-0 group-hover:w-full transition-all duration-300 ease-in-out overflow-hidden'>
                  <div className='relative w-[100px] xl:w-[150px] h-[100px] xl:h-[150px]'>
                    <Image 
                      src={serviceItem.image}
                      alt={serviceItem.title}
                      fill
                      className='object-cover rounded-lg'
                      sizes="(max-width: 768px) 100px, 150px"
                    />
                  </div>
                </div>
              </div>
            )}
            
            {/* Description */}
            <p className='text-[13px] sm:text-[14px] font-normal text-[#00000099] group-hover:text-white transition-colors flex-1'>
              {serviceItem.description}
            </p>
            
            {/* Arrow Button */}
            <button className='absolute right-4 sm:right-6 lg:relative text-xl sm:text-2xl group-hover:text-white transition-colors group-hover:translate-x-2 transform duration-300'>
              <GoArrowRight className='rotate-320' />
            </button>
          </div>
        ))}
      </div>


    </div>
  )
}

export default Services;