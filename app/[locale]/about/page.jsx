import AboutContent from '@/app/components/About/AboutContent'
import Founder from '@/app/components/About/Founder'
import Hero from '@/app/components/About/Hero'
import Team from '@/app/components/About/Team'
import WhyChooseUs from '@/app/components/About/WhyChooseUs'
import Footer from '@/app/components/Footer'
import Trusted from '@/app/components/Hero/Trusted'
import Faqs from '@/app/components/Services/Faqs'
import React from 'react'

const About = () => {
  return (
    <div>
      <div className='sticky top-0'>  {/* Removed z-[-1] */}
        <Hero />
      </div>
      <div className='bg-white  rounded-t-4xl relative z-10'>
        <AboutContent />
        <WhyChooseUs />
        <Founder />
        <Team />
        <Faqs />
        <Trusted />
         <Footer />
      </div>
    </div>
  )
}

export default About