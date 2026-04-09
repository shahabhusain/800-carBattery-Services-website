import React from 'react'
import Hero from '../components/Hero/Hero'
import About from '../components/Hero/About'
import Services from '../components/Hero/Services'
import Banners from '../components/Hero/Banners'
import CarBrands from '../components/Hero/CarBrands'
import BatteryBrands from '../components/Hero/BatteryBrands'
import TrendingProducts from '../components/Hero/TrendingProducts'
import RealExperience from '../components/Hero/RealExperience'
import Trusted from '../components/Hero/Trusted'
import Footer from '../components/Footer'
import Review from '../components/Hero/Review'
import HowItWorks from '../components/Hero/HowItWorks'

const Page = () => {
  return (
    <div>

      <div className='sticky top-0'>
        <Hero />
      </div>

      <Review /> {/* move it here */}

      <div className='bg-white pb-12 rounded-t-4xl relative z-10'>
        <About />
        <Services />
        <Banners />
        <CarBrands />
        <BatteryBrands />
        <TrendingProducts />
      </div>

      <RealExperience />

      <div className='bg-white relative'>
        <HowItWorks />
        <Trusted />
        <Footer />
      </div>

    </div>
  )
}

export default Page