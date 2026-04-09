import Image from 'next/image'
import React from 'react'
import car from '@/public/brands/serviceBanners/car.png'
const Car = () => {
  return (
      <div className=' flex items-center justify-center mt-72'>
         <div className=' absolute -top-[26rem] '>
      <Image className='w-[860px] h-[560px]' src={car} alt='car'/>
    </div>
      </div>
  )
}

export default Car