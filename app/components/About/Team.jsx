import React from 'react'
import teamImage from '@/public/team.png'
import Image from 'next/image'
import { useLocale } from 'next-intl'

const Team = () => {
    const locale = useLocale()
    
    const team = [
        {
            img: teamImage,
            name: locale === "en" ? "John Smith" : "جون سميث",
            role: locale === "en" ? "Senior Mechanic" : "ميكانيكي أول"
        },
        {
            img: teamImage,
            name: locale === "en" ? "Sarah Johnson" : "سارة جونسون",
            role: locale === "en" ? "Diagnostic Specialist" : "أخصائية تشخيص"
        },
        {
            img: teamImage,
            name: locale === "en" ? "Michael Brown" : "مايكل براون",
            role: locale === "en" ? "Electrical Engineer" : "مهندس كهرباء"
        },
        {
            img: teamImage,
            name: locale === "en" ? "David Wilson" : "ديفيد ويلسون",
            role: locale === "en" ? "Service Manager" : "مدير الخدمة"
        },
        {
            img: teamImage,
            name: locale === "en" ? "Emily Davis" : "إيميلي ديفيس",
            role: locale === "en" ? "Customer Relations" : "علاقات العملاء"
        },
        {
            img: teamImage,
            name: locale === "en" ? "Robert Martinez" : "روبرت مارتينيز",
            role: locale === "en" ? "Brake Specialist" : "أخصائي فرامل"
        },
        {
            img: teamImage,
            name: locale === "en" ? "Lisa Anderson" : "ليزا أندرسون",
            role: locale === "en" ? "Quality Control" : "مراقبة الجودة"
        },
        {
            img: teamImage,
            name: locale === "en" ? "James Taylor" : "جيمس تايلور",
            role: locale === "en" ? "Transmission Expert" : "خبير ناقل حركة"
        },
    ]

    return (
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#FDF8F8]">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <p className="uppercase text-red-600 font-semibold tracking-wider mb-2">
                        {locale === "en" ? "Our Team" : "فريقنا"}
                    </p>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                        {locale === "en" ? "Meet Our" : "تعرف على"}{" "}
                        <span className="text-red-600">
                            {locale === "en" ? "Team Members" : "أعضاء الفريق"}
                        </span>
                    </h1>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1">
                    {team.map((item, index) => (
                        <div 
                            key={index} 
                            className="bg-white p-3 rounded-xl  overflow-hidden  "
                        >
                                <Image 
                                    className="w-full h-64 object-cover rounded-2xl " 
                                    src={item.img} 
                                    alt={item.name}
                                />
                            <div className="p-6 text-start">
                                <h2 className="text-[24px] font-bold text-gray-900 mb-2">
                                    {item.name}
                                </h2>
                                <p className="text-[#4E4E4E] font-normal">
                                    {item.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Team