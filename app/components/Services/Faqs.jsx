'use client'
import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

const Faqs = () => {
    const [openIndex, setOpenIndex] = useState(null)

    const faqs = [
        {
            question: "What services do you offer?",
            answer: "We offer comprehensive car battery services including battery testing, jump-starting, replacement, and roadside assistance. We also provide premium car repair services and 24/7 emergency support across Dubai and Abu Dhabi."
        },
        {
            question: "How long does battery replacement take?",
            answer: "Our professional technicians can typically replace your car battery within 15-30 minutes at your location. We understand your time is valuable, so we ensure quick and efficient service."
        },
        {
            question: "Do you provide 24/7 roadside assistance?",
            answer: "Yes, we offer 24/7 roadside assistance across Dubai and Abu Dhabi. Whether it's day or night, weekend or holiday, our team is always ready to help you with any battery emergency."
        },
        {
            question: "What areas do you cover?",
            answer: "We cover all major areas in Dubai and Abu Dhabi, including but not limited to Downtown Dubai, Dubai Marina, JLT, Business Bay, Al Reem Island, and Yas Island."
        },
        {
            question: "Do you offer warranty on batteries?",
            answer: "Yes, all our batteries come with a comprehensive warranty. The warranty period varies depending on the battery brand and type. Contact us for specific warranty details on different battery models."
        }
    ]

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className='w-[85%] mx-auto py-20'>
            <p className='uppercase text-center text-[16px] font-semibold text-gray-600'>
                Got Questions?
            </p>
            <h1 className='ld:text-[40px] md:text-[35px] sm:text-[30px] text-[25px] font-semibold text-center mb-12'>
                <span className='font-normal'>We’ve got</span>{' '}
                <span className='text-red-700'>quick</span> answers
            </h1>

            <div className=''>
                {faqs.map((faq, index) => (
                    <div 
                        key={index} 
                        className='mb-4 border border-gray-200 rounded-lg overflow-hidden'
                      
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className='w-full flex items-center justify-between p-5 text-left bg-[#F8F8F8] hover:bg-gray-50 transition-colors duration-200'
                        >
                            <span className='font-medium md:text-lg text-[12px]'>{faq.question}</span>
                            <span className='text-red-700'>
                                {openIndex === index ? (
                                    <IoIosArrowUp size={24} />
                                ) : (
                                    <IoIosArrowDown size={24} />
                                )}
                            </span>
                        </button>
                        
                        <div 
                            className={`overflow-hidden transition-all duration-300 ${
                                openIndex === index ? 'max-h-96' : 'max-h-0'
                            }`}
                        >
                            <div className='p-5 bg-gray-50 border-t border-gray-200'>
                                <p className='text-gray-700'>{faq.answer}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Faqs