import Image from 'next/image'
import React from 'react'
import { useLocale } from 'next-intl'
import serviceImg1 from '@/public/services/1.webp'
import serviceImg2 from '@/public/services/2.webp'
import serviceImg3 from '@/public/services/3.webp'
import serviceImg4 from '@/public/services/4.webp'
import serviceImg5 from '@/public/services/5.webp'
import serviceImg6 from '@/public/services/6.webp'
import serviceImg7 from '@/public/services/7.webp'
import serviceImg8 from '@/public/services/8.webp'
import serviceImg9 from '@/public/services/9.webp'
import serviceImg10 from '@/public/services/10.webp'
import serviceImg11 from '@/public/services/11.webp'
import serviceImg12 from '@/public/services/12.webp'

const BatteryServices = () => {
    const locale = useLocale()
    
    const services = locale === "en" 
        ? [
            {
                img: serviceImg1,
                title: "Car Battery Replacement",
                desc: "Fast, reliable battery replacement delivered to your location in under 30 minutes."
            },
            {
                img: serviceImg2,
                title: "Car Battery Boosting",
                desc: "Quick and stress-free jump-start services wherever you are."
            },
            {
                img: serviceImg3,
                title: "24/7 Roadside Assistance",
                desc: "Immediate roadside support across the UAE, anytime, anywhere."
            },
            {
                img: serviceImg4,
                title: "Car Scanning & Diagnostics",
                desc: "Advanced diagnostics to identify and resolve car issues with precision."
            },
            {
                img: serviceImg5,
                title: "Mechanical Services",
                desc: "Comprehensive mechanical repairs to keep your car running smoothly."
            },
            {
                img: serviceImg6,
                title: "Electrical Services",
                desc: "Expert solutions for all your car's electrical system needs."
            },
            {
                img: serviceImg7,
                title: "ECU Repair",
                desc: "Professional ECU repairs to restore your car's optimal performance."
            },
            {
                img: serviceImg8,
                title: "Flood Car Repair",
                desc: "Specialized flood damage repair to bring your car back to life."
            },
            {
                img: serviceImg9,
                title: "Car Key Programming",
                desc: "Hassle-free car key programming and replacement services."
            },
            {
                img: serviceImg10,
                title: "BCM Repair",
                desc: "Reliable body control module repairs to restore essential car functions."
            },
            {
                img: serviceImg11,
                title: "ADAS Sensor Repair",
                desc: "Precision repair and calibration for advanced driver assistance systems."
            },
            {
                img: serviceImg12,
                title: "Radiator Fan Repair",
                desc: "Quick and efficient radiator fan replacements to prevent overheating."
            },
        ]
        : [
            {
                img: serviceImg1,
                title: "استبدال بطارية السيارة",
                desc: "استبدال بطارية سريع وموثوق يتم توصيله إلى موقعك في أقل من 30 دقيقة."
            },
            {
                img: serviceImg2,
                title: "شحن بطارية السيارة",
                desc: "خدمات تشغيل بطارية سريعة وخالية من التوتر أينما كنت."
            },
            {
                img: serviceImg3,
                title: "مساعدة على الطريق 24/7",
                desc: "دعم فوري على الطريق في جميع أنحاء الإمارات، في أي وقت وفي أي مكان."
            },
            {
                img: serviceImg4,
                title: "فحص وتشخيص السيارة",
                desc: "تشخيص متقدم لتحديد وحل مشاكل السيارة بدقة."
            },
            {
                img: serviceImg5,
                title: "خدمات ميكانيكية",
                desc: "إصلاحات ميكانيكية شاملة للحفاظ على سيارتك تعمل بسلاسة."
            },
            {
                img: serviceImg6,
                title: "خدمات كهربائية",
                desc: "حلول متخصصة لجميع احتياجات النظام الكهربائي لسيارتك."
            },
            {
                img: serviceImg7,
                title: "إصلاح وحدة التحكم الإلكترونية",
                desc: "إصلاحات احترافية لوحدة التحكم الإلكترونية لاستعادة الأداء الأمثل لسيارتك."
            },
            {
                img: serviceImg8,
                title: "إصلاح السيارات المتضررة من الفيضانات",
                desc: "إصلاح متخصص لأضرار الفيضانات لإعادة سيارتك إلى الحياة."
            },
            {
                img: serviceImg9,
                title: "برمجة مفاتيح السيارة",
                desc: "خدمات برمجة واستبدال مفاتيح السيارة بدون متاعب."
            },
            {
                img: serviceImg10,
                title: "إصلاح وحدة التحكم بالجسم",
                desc: "إصلاحات موثوقة لوحدة التحكم بالجسم لاستعادة وظائف السيارة الأساسية."
            },
            {
                img: serviceImg11,
                title: "إصلاح مستشعر ADAS",
                desc: "إصلاح ومعايرة دقيقة لأنظمة مساعدة السائق المتقدمة."
            },
            {
                img: serviceImg12,
                title: "إصلاح مروحة الرادياتير",
                desc: "استبدال سريع وفعال لمروحة الرادياتير لمنع ارتفاع درجة الحرارة."
            },
        ]
    
    const text = locale === "ar"
        ? {
            badge: "الخدمات",
            title1: "خدمات",
            title2: "بطارية السيارة",
            title3: "موثوقة"
        }
        : {
            badge: "SERVICES",
            title1: "Reliable",
            title2: "Car Battery",
            title3: "Services"
        }

    return (
        <div className='w-[85%] mx-auto flex flex-col gap-y-3 py-20' dir={locale === "ar" ? "rtl" : "ltr"}>
            <p className='uppercase text-center text-[16px] font-semibold'>
                {text.badge}
            </p>
            <h1 className='lg:text-[40px] md:text-[35px] sm:text-[30px] text-[25px] font-semibold text-center'>
                {locale === "ar" ? (
                    <>
                        <span className='text-red-700'>{text.title1}</span>
                        <span className='font-normal'> {text.title2} </span>
                        <span className='text-red-700'>{text.title3}</span>
                    </>
                ) : (
                    <>
                        <span className='font-normal'>{text.title1}</span>
                        <span className='text-red-700'> {text.title2} </span>
                        <span className='text-red-700'>{text.title3}</span>
                    </>
                )}
            </h1>
            <div className='grid md:grid-cols-4 grid-cols-1 gap-3 mt-5'>
                {services.map((item, index) => (
                    <div key={index} className='relative'>
                        <Image width={380} height={190} src={item.img} alt='service' />
                        <div className='flex flex-col gap-y-3 p-4 bg-[#f8f8f8]'>
                            <h2 className='text-[24px] font-bold'>{item.title}</h2>
                            <p className='text-[#4E4E4E] text-[16px] font-normal'>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BatteryServices