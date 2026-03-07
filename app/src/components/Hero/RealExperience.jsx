import Image from 'next/image'
import React from 'react'
import { GoArrowRight } from 'react-icons/go'
import review from '@/public/review.jpg'

const RealExperience = () => {
  return (
    <div className=' text-white py-20 w-full backdrop-blur-2xl'>
            <div className='md:w-[80%] w-[95%] mx-auto'>
                   <div className='text-left'>
                    <h1 className='text-[14px] md:text-[16px] font-bold text-gray-100 uppercase tracking-wider'>
                       Customer Stories
                    </h1>
                    
                    <div className='flex flex-col md:flex-row items-center justify-between mt-4 md:mt-6 gap-6 md:gap-0'>
                        <h1 className='text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-semibold max-w-full md:max-w-[544px] leading-tight text-left'>
                            <span>Real Experiences.</span>{' '}
                            <span className='text-[#C1121F]'>Real Results.</span>{' '}
                        </h1>
                        
                        <button className='w-full sm:w-fit bg-red-600 py-2.5 sm:py-3 px-4 sm:px-5 uppercase rounded-full text-white flex items-center justify-center gap-x-2 hover:bg-red-700 transition-colors text-sm sm:text-base'>
                            view all
                            <span className='rotate-320'>
                                <GoArrowRight size={24} className='sm:w-[30px] sm:h-[30px]' />
                            </span>
                        </button>
                    </div>
                </div>

                  <div className=' grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 mt-12'>
                   <Image className='h-[528px] w-[299px] object-cover rounded-2xl' src={review} alt='image'/>
                   <Image className='h-[528px] w-[299px] object-cover rounded-2xl' src={review} alt='image'/>
                   <Image className='h-[528px] w-[299px] object-cover rounded-2xl' src={review} alt='image'/>
                   <Image className='h-[528px] w-[299px] object-cover rounded-2xl' src={review} alt='image'/>
                  </div>
            </div>
    </div>
  )
}

export default RealExperience
