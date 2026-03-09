import React from 'react'
import bmw from '@/public/brands/bmw.png'
import bmwcar from '@/public/brands/bmwcar.png'
import bu from '@/public/brands/bu.png'
import bucar from '@/public/brands/bucar.png'
import la from '@/public/brands/la.png'
import lacar from '@/public/brands/lacar.png'
import bra from '@/public/brands/bra.png'
import bracar from '@/public/brands/bracar.png'

import fr from '@/public/brands/fr.png'
import frcar from '@/public/brands/frcar.png'
import be from '@/public/brands/be.png'
import becar from '@/public/brands/becar.png'
import ma from '@/public/brands/ma.png'
import macar from '@/public/brands/macar.png'
import co from '@/public/brands/co.png'
import cocar from '@/public/brands/cocar.png'
import me from '@/public/brands/me.png'
import mecar from '@/public/brands/mecar.png'
import po from '@/public/brands/po.png'
import pocar from '@/public/brands/pocar.png'
import ch from '@/public/brands/ch.png'
import chcar from '@/public/brands/chcar.png'
import ro from '@/public/brands/ro.png'
import rocar from '@/public/brands/rocar.png'
import Image from 'next/image'
import { GoArrowRight } from 'react-icons/go'
import { useLocale } from 'next-intl'

const CarBrands = () => {
    const brands = [
        {
            logo: bmw,
            desc: "BMW",
            car: bmwcar
        },
        {
            logo: bu,
            desc: "Bugatti",
            car: bucar
        },
        {
            logo: bra,
            desc: "Brabus",
            car: bracar
        },
        {
            logo: la,
            desc: "Lamborghini",
            car: lacar
        },
        {
            logo: fr,
            desc: "Ferrari",
            car: frcar
        },
        {
            logo: be,
            desc: "Bentley",
            car: becar
        },
        {
            logo: ma,
            desc: "Maserati",
            car: macar
        },
            {
            logo: co,
            desc: "Cadillac",
            car: cocar
        },
        {
            logo: me,
            desc: "Mercedes",
            car: mecar
        },
    
        {
            logo: po,
            desc: "Porsche",
            car: pocar
        },
        {
            logo: ch,
            desc: "Chevrolet",
            car: chcar
        },
        {
            logo: ro,
            desc: "Rolls Royce",
            car: rocar
        },
    ]

    const locale =  useLocale()

const text =
  locale === "ar"
    ? {
        desc: "ماركات السيارات التي نخدمها",
        title1: "متوافق مع جميع",
        title2: "ماركات السيارات الرئيسية",
        viewAll: "عرض الكل",
      }
    : {
        desc: "Car Brands We Serve",
        title1: "Compatible With All",
        title2: "Major Vehicle Brands",
        viewAll: "View All",
      };


    return (
        <div className='py-12 md:py-16 lg:py-20 bg-[#FDF8F8]'>
            <div className='w-[95%] md:w-[85%] lg:w-[80%] mx-auto px-4 sm:px-0'>
                {/* Header Section */}
                <div className='text-left'>
                    <h1 className='text-[14px] md:text-[16px] font-bold text-gray-600 uppercase tracking-wider'>
                        {text.desc}
                    </h1>
                    
                    <div className='flex flex-col md:flex-row items-center justify-between mt-4 md:mt-6 gap-6 md:gap-0'>
                        <h1 className='text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-semibold max-w-full md:max-w-[544px] leading-tight text-left'>
                            <span>{text.title1}</span>{' '}
                            <span className='text-[#C1121F]'>{text.title2}</span>{' '}
                        </h1>
                        
                        <button className='w-full sm:w-fit bg-red-600 py-2.5 sm:py-3 px-4 sm:px-5 uppercase rounded-full text-white flex items-center justify-center gap-x-2 hover:bg-red-700 transition-colors text-sm sm:text-base'>
                            {text.viewAll}
                            <span className='rotate-320'>
                                <GoArrowRight size={24} className='sm:w-[30px] sm:h-[30px]' />
                            </span>
                        </button>
                    </div>
                </div>

                {/* Brands Grid */}
                <div className='bg-white rounded-lg md:rounded-xl shadow-sm mt-8 md:mt-10 lg:mt-12'>
                    {/* Mobile: 2 columns, Tablet: 3 columns, Desktop: 4 columns */}
                    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'>
                        {brands.map((item, index) => {
                            // Determine border classes based on grid position
                            const isLastInRow = (index + 1) % 2 === 0 // mobile last in row
                            const isLastInRowSm = (index + 1) % 3 === 0 // tablet last in row
                            const isLastInRowLg = (index + 1) % 4 === 0 // desktop last in row
                            
                            return (
                                <div 
                                    key={index} 
                                    className={`
                                        border-r border-b border-[#0000001e] p-4 sm:p-5 md:p-6
                                        ${(index + 1) <= brands.length - 4 ? 'border-b' : ''}
                                        ${!isLastInRow ? 'sm:border-r' : ''}
                                        ${!isLastInRowSm ? 'lg:border-r' : ''}
                                        ${isLastInRowLg ? 'lg:border-r-0' : ''}
                                        hover:bg-gray-50 transition-colors duration-300
                                    `}
                                >
                                    <div className='flex flex-col items-center justify-center hover:scale-105 transform transition-all duration-500 ease-in-out'>
                                        {/* Logo */}
                                        <div className='relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-2 sm:mb-3'>
                                            <Image 
                                                src={item.logo} 
                                                alt={`${item.desc} logo`}
                                                fill
                                                className='object-contain'
                                                sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, 96px"
                                            />
                                        </div>
                                        
                                        {/* Brand Name */}
                                        <p className='text-sm sm:text-base md:text-lg lg:text-[20px] font-medium text-center'>
                                            {item.desc}
                                        </p>
                                        
                                        {/* Car Image */}
                                        <div className='relative w-full h-16 sm:h-20 md:h-24 lg:h-28 mt-4 sm:mt-5 md:mt-6'>
                                            <Image 
                                                src={item.car} 
                                                alt={`${item.desc} car`}
                                                fill
                                                className='object-contain'
                                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 33vw, 25vw"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Optional: View More Indicator for Mobile */}
                <div className='flex justify-center mt-8 md:hidden'>
                    <button className='text-red-600 font-medium flex items-center gap-2'>
                        View More Brands
                        <GoArrowRight size={20} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CarBrands