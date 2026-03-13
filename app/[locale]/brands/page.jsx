import Hero from '@/app/components/Brands/Hero'
import Service from '@/app/components/Brands/Service'
import Footer from '@/app/components/Footer'
import BatteryBrands from '@/app/components/Hero/BatteryBrands'
import CarBrands from '@/app/components/Hero/CarBrands'
import Trusted from '@/app/components/Hero/Trusted'
import Faqs from '@/app/components/Services/Faqs'
import React from 'react'


const Brands = () => {
  return (
    <div>
      <div className='sticky top-0 '>  {/* Added z-index */}
        <Hero />
      </div>
        <div className=' bg-white  rounded-t-4xl relative z-10'>
           <CarBrands />
           <Service />
           <BatteryBrands />
           <Faqs />
           <Trusted />
           <Footer />
        </div>
    </div>
  )
}

export default Brands