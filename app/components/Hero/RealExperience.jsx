"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import { GoArrowRight } from 'react-icons/go'
import { FaPlay } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import review from '@/public/review.jpg'
import { useLocale } from 'next-intl'
import story from '@/public/story.png'

const RealExperience = () => {
    const locale = useLocale()
    const [selectedVideo, setSelectedVideo] = useState(null)
    
    const englishExperience = [
        { 
           id: 1,
           bgImg: review,
           userImg: story,
           name: "800 battery pro",
           desc: "We immerse ourselves in your issues and we put our knowledge and",
           videoId: "dQw4w9WgXcQ" // YouTube video ID
        },
        {
           id: 2,
           bgImg: review,
           userImg: story,
           name: "800 battery pro",
           desc: "We immerse ourselves in your issues and we put our knowledge and",
           videoId: "dQw4w9WgXcQ"
        },
        {
           id: 3,
           bgImg: review,
           userImg: story,
           name: "800 battery pro",
           desc: "We immerse ourselves in your issues and we put our knowledge and",
           videoId: "dQw4w9WgXcQ"
        },
        {
           id: 4,
           bgImg: review,
           userImg: story,
           name: "800 battery pro",
           desc: "We immerse ourselves in your issues and we put our knowledge and",
           videoId: "dQw4w9WgXcQ"
        },
    ]
    
    const arabicExperience = [
        { 
           id: 1,
           bgImg: review,
           userImg: story,
           name: "800 بطارية برو",
           desc: "ننغمس في مشاكلك ونضع معرفتنا وخبرتنا",
           videoId: "dQw4w9WgXcQ"
        },
        {
           id: 2,
           bgImg: review,
           userImg: story,
           name: "800 بطارية برو",
           desc: "ننغمس في مشاكلك ونضع معرفتنا وخبرتنا",
           videoId: "dQw4w9WgXcQ"
        },
        {
           id: 3,
           bgImg: review,
           userImg: story,
           name: "800 بطارية برو",
           desc: "ننغمس في مشاكلك ونضع معرفتنا وخبرتنا",
           videoId: "dQw4w9WgXcQ"
        },
        {
           id: 4,
           bgImg: review,
           userImg: story,
           name: "800 بطارية برو",
           desc: "ننغمس في مشاكلك ونضع معرفتنا وخبرتنا",
           videoId: "dQw4w9WgXcQ"
        },
    ]
    
    const experience = locale === "en" ? englishExperience : arabicExperience

    const text = locale === "ar"
        ? {
            desc: "قصص العملاء",
            title1: "تجارب حقيقية.",
            title2: "نتائج حقيقية.",
            viewAll: "عرض الكل",
          }
        : {
            desc: "Customer Stories",
            title1: "Real Experiences.",
            title2: "Real Results.",
            viewAll: "View All",
          };

    // Close modal function
    const closeModal = () => {
        setSelectedVideo(null)
    }

    // Open modal function
    const openVideo = (videoId) => {
        setSelectedVideo(videoId)
    }

    return (
        <>
            <div className='text-white py-20 w-full backdrop-blur-2xl'>
                <div className='md:w-[80%] w-[95%] mx-auto'>
                    <div className='text-left' dir={locale === "ar" ? "rtl" : "ltr"}>
                        <h1 className='text-[14px] md:text-[16px] font-bold text-gray-100 uppercase tracking-wider'>
                            {text.desc}
                        </h1>
                        
                        <div className='flex flex-col md:flex-row items-center justify-between mt-4 md:mt-6 gap-6 md:gap-0'>
                            <h1 className='text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-semibold max-w-full md:max-w-[544px] leading-tight'>
                                <span>{text.title1}</span>{' '}
                                <span className='text-[#C1121F]'>{text.title2}</span>{' '}
                            </h1>
                            
                            <button className='w-full sm:w-fit bg-red-600 py-2.5 sm:py-3 px-4 sm:px-5 uppercase rounded-full text-white flex items-center justify-center gap-x-2 hover:bg-red-700 transition-colors text-sm sm:text-base group'>
                                {text.viewAll}
                                <span className={`transition-transform duration-300 group-hover:translate-x-2 ${locale === "ar" ? "rotate-180" : ""}`}>
                                    <GoArrowRight size={24} className='sm:w-[30px] sm:h-[30px]' />
                                </span>
                            </button>
                        </div>
                    </div>

                    <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 mt-12'>
                        {experience.map((item) => (
                            <div 
                                key={item.id} 
                                className='group relative cursor-pointer overflow-hidden rounded-2xl'
                                onClick={() => openVideo(item.videoId)}
                            >
                                {/* Background Image */}
                                <Image 
                                    className='h-[528px] md:w-[299px] w-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110' 
                                    src={item.bgImg}  
                                    alt='review'
                                    width={299}
                                    height={528}
                                />
                                
                                {/* Dark Overlay - Hidden on hover */}
                                <div className='bg-black/50 absolute inset-0 rounded-2xl group-hover:bg-black/30 transition-all duration-500'></div>
                                
                                {/* Content - Hidden on hover */}
                                <div className='absolute flex flex-col gap-y-4 top-12 left-5 right-5 group-hover:opacity-0 transition-opacity duration-500'>
                                    <div className='flex items-center gap-4'>
                                        <div className='relative w-10 h-10 rounded-full overflow-hidden'>
                                            <Image 
                                                src={item.userImg} 
                                                alt='user'
                                                fill
                                                className='object-cover'
                                            />
                                        </div>
                                        <p className='font-semibold'>{item.name}</p>
                                    </div>
                                    <p className='text-sm text-gray-200'>{item.desc}</p>
                                </div>
                                
                                {/* Play Button - Appears on hover */}
                                <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100'>
                                    <div className='bg-red-600 rounded-full p-5 shadow-lg hover:bg-red-700 transition-colors transform hover:scale-110'>
                                        <FaPlay size={30} className='text-white ml-1' />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Video Modal */}
            {selectedVideo && (
                <div 
                    className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm'
                    onClick={closeModal}
                >
                    <div 
                        className='relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden'
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button 
                            onClick={closeModal}
                            className='absolute -top-12 right-0 text-white hover:text-red-600 transition-colors z-10'
                        >
                            <IoClose size={36} />
                        </button>
                        
                        {/* YouTube Iframe */}
                        <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className='w-full h-full'
                        ></iframe>
                    </div>
                </div>
            )}
        </>
    )
}

export default RealExperience