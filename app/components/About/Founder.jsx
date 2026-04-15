import React from 'react'
import { useLocale } from 'next-intl'
import bg from '@/public/about.svg'
import founder from '@/public/founder.svg'
import Image from 'next/image'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Founder = () => {
    const locale = useLocale()

    const text = locale === "ar"
        ? {
            name: "سامن جان",
            title: "المؤسس والرئيس التنفيذي",
            description1: "بصفته فناناً لحل مثل هذه القضايا، قمنا بنجاح برفع عدة قضايا أمر قضائي نيابة عن أكثر من 250 عمل فني وأفراد عائلاتهم وحصلنا على البطاقات الخضراء المعتمدة في غضون عدة أشهر بعد تقديم الشكوى.",
            description2: "بصفته فناناً لحل مثل هذه القضايا، قمنا بنجاح برفع عدة قضايا أمر قضائي نيابة عن أكثر من 250 عمل فني وأفراد عائلاتهم وحصلنا على البطاقات الخضراء المعتمدة في غضون عدة أشهر بعد تقديم الشكوى."
        }
        : {
            name: "Samin Jan",
            title: "Founder & CEO",
            description1: "As an artist here to solve such issues, we successfully filed several mandamus cases on behalf of more than 250 artwork and their family members and had approved green cards within several months after filing a complaint.",
            description2: "As an artist here to solve such issues, we successfully filed several mandamus cases on behalf of more than 250 artwork and their family members and had approved green cards within several months after filing a complaint."
        }

    return (
        <div className='relative md:w-[85%] w-[90%] md:mb-20 mb-[900px] mx-auto max-w-[1500px]' dir={locale === "ar" ? "rtl" : "ltr"}>
            <Image className='md:block hidden' src={bg} alt='bg' />
            <div className='absolute md:top-36 top-12 w-full flex flex-col md:flex-row items-center justify-around'>
                <div className='md:w-1/2'>
                    <Image className='' src={founder} alt='founder' />
                </div>
                <div className='md:w-1/2 flex flex-col gap-2'>
                    <h1 className='text-red-800 text-[40px] font-semibold'>{text.name}</h1>
                    <h2 className='text-[20px] font-semibold'>{text.title}</h2>
                    <div className='flex items-center gap-3'>
                        <span className='bg-[#f8f8f8] p-3 rounded-full cursor-pointer hover:bg-red-600 hover:text-white transition-colors'>
                            <FaYoutube />
                        </span>
                        <span className='bg-[#f8f8f8] p-3 rounded-full cursor-pointer hover:bg-red-600 hover:text-white transition-colors'>
                            <FaInstagram />
                        </span>
                        <span className='bg-[#f8f8f8] p-3 rounded-full cursor-pointer hover:bg-red-600 hover:text-white transition-colors'>
                            <FaTwitter />
                        </span>
                    </div>
                    <p className='text-[#00000099] mt-6'>{text.description1}</p>
                    <p className='text-[#00000099] mt-4'>{text.description2}</p>
                </div>
            </div>
        </div>
    )
}

export default Founder