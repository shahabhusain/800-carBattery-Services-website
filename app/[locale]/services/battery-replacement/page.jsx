import WhyChooseUs from '@/app/components/About/WhyChooseUs'
import Footer from '@/app/components/Footer'
import BatteryBrands from '@/app/components/Hero/BatteryBrands'
import CarBrands from '@/app/components/Hero/CarBrands'
import Trusted from '@/app/components/Hero/Trusted'
import Hero from '@/app/components/Services/Hero'
import ServiceR from '@/app/components/Services/Service'
import React from 'react'

const BatteryReplacements = () => {
  return (
    <div>
      <div className='sticky top-0'>
        <Hero />
      </div>
      <div className='bg-white  rounded-t-4xl relative z-10'>
        <ServiceR />
        <CarBrands />
        <BatteryBrands />
        <WhyChooseUs />
        <Trusted />
         <Footer />
      </div>
    </div>
  )
}

export default BatteryReplacements