import Footer from '@/app/components/Footer'
import About from '@/app/components/Hero/About'
import BatteryBrands from '@/app/components/Hero/BatteryBrands'
import CarBrands from '@/app/components/Hero/CarBrands'
import Trusted from '@/app/components/Hero/Trusted'
import BatteryServices from '@/app/components/Services/BatteryServices'
import Faqs from '@/app/components/Services/Faqs'
import Hero from '@/app/components/Services/Hero'
import React from 'react'

const Services = () => {
  return (
    <div>
      <div className='sticky top-0'>  {/* Removed z-[-1] */}
        <Hero />
      </div>
      <div className='bg-white  rounded-t-4xl relative z-10'>
        <BatteryServices />
        <CarBrands />
        <BatteryBrands />
        <Faqs />
        <Trusted />
         <Footer />
      </div>
    </div>
  )
}

export default Services