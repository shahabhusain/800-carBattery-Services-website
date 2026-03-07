import React from 'react'
import Hero from './src/components/Hero/Hero'
import About from './src/components/Hero/About'  // Fixed import path
import Services from './src/components/Hero/Services'
import Banners from './src/components/Hero/Banners'
import CarBrands from './src/components/Hero/CarBrands'
import BatteryBrands from './src/components/Hero/BatteryBrands'
import TrendingProducts from './src/components/Hero/TrendingProducts'
import RealExperience from './src/components/Hero/RealExperience'
import Trusted from './src/components/Hero/Trusted'

const Page = () => {
  return (
    <div>
      <div className='sticky top-0 z-[-1]'>  {/* Added z-index */}
        <Hero />
      </div>
        <div className=' bg-white pb-12'>
              <About />
        <Services />
        <Banners />
        <CarBrands />
        <BatteryBrands />
        <TrendingProducts />
        </div>
        <RealExperience />
        <div className=' bg-white'>
           <Trusted />
        </div>
    </div>
  )
}

export default Page