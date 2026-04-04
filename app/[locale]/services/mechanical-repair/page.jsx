import Service from '@/app/components/Brands/subPage/Service'
import Hero from '@/app/components/Brands/subPage/Hero'
import { FaSitemap } from 'react-icons/fa'
import Faq from '@/app/components/Brands/subPage/Faq'
import Footer from '@/app/components/Footer'
import Trusted from '@/app/components/Hero/Trusted'
import { useLocale } from 'next-intl'
import serviceImg from "@/public/services/service.jpg"
import React from 'react'
// battery brands
import varta from "@/public/batteryBrands/varta.png";
import acdelco from "@/public/batteryBrands/ac.png";
import bosh from "@/public/batteryBrands/bosh.png";
import amron from "@/public/batteryBrands/amron.png";
import solite from "@/public/batteryBrands/solit.png";
import volcan from "@/public/batteryBrands/volcan.png";
import Battery from '@/app/components/Brands/subPage/Battery'
import WhyChooseUs from '@/app/components/Brands/subPage/WhyChooseUs'
import herobg from '@/public/brands/serviceBanners/mecha.webp'
import CarBrands from '@/app/components/Hero/CarBrands'


const MechanicalRepair = () => {
  const locale = useLocale()
  const heroEnglishContent = {
    desc:"Top Car Brands – 24/7 Emergency Support & Anywhere!",
    title:{
      span1:"Premium Mechanical Repair  ",
      span2:" Services in Dubai "
    },
    desc1:"With 800BatteryPro Get back on the road safely with precision repairs, advanced tools, and certified technicians.",
    btn:"Call Now",
    btn1:"Book Service Now"
  }
  
  const heroArabicContent = {
    desc: "خدمة بطارية السيارة في دبي – مساعدة على الطريق 24/7",
    title: {
      span1: "800BatteryPro - خدمات بطاريات السيارات في دبي",
      span2: "وأبوظبي!"
    },
    desc1: "تشغيل البطارية واستبدالها - مساعدة على الطريق - إصلاح سيارات متميز",
    btn: "تحدث مع خبير",
     btn1:"Book Service Now"
  };

    const serviceEnglishContent = {
    subtitle: "SERVICES",
    title: " 800BatteryPro A Trusted Car Repair Service Center ",
    services: [
      {
        id: 1,
        description:
          "We have team of certified technicians who are experienced in working different european and American car brands. From minor repair to advance mechanical repairs any where in Dubai you can book an appointment by just giving us call at +971528475675. A sudden car breakdown disrupts your entire schedule. You need a trusted team to handle complex mechanical failures without delay. 800BatteryPro provides complete mechanical repair services to restore your vehicle to peak performance. We eliminate the guesswork and fix the actual problem the first time. Car Engine Repair: From minor oil leaks to major overhauls, we keep your engine performing at its best. Car Oil Change: Fast, thorough oil changes to protect your engine and boost longevity. Transmission and Gearbox Repair: Expert fixes for slipping gears, fluid leaks, and complete gearbox rebuilds. Car AC Repair: Restore cooling efficiency with precise AC diagnostics and repairs. Minor Car Service: Comprehensive routine checks and maintenance for trouble-free driving. Car Brake Repair: Pad replacement, rotor machining, and hydraulic repairs for reliable braking. Car Suspension Repair: Replace shocks, struts, and control arms to smooth out every ride. Major Car Service: In-depth inspections and repairs to maximize your vehicle’s lifespan. Steering Repair: Expert solutions for steering issues, ensuring control and safety at every turn."
      },
    ]
  }

  const serviceArabicContent = {
    subtitle: "الخدمات",
    title: "خدمات بطاريات السيارات الموثوقة",
    services: [
      {
        id: 1,
        description:
          "خدمة استبدال بطارية السيارة في موقعك مع تركيب سريع."
      },
      {
        id: 2,
        description:
          "فحص وتشخيص البطارية للتأكد من أنها تعمل بكفاءة."
      },
      

    ]
  }




   const englishContent = [
  {
    icons: <FaSitemap />,
    title: " Advanced Diagnostic Technology",
    desc: "We use dealership-level scanning tools to read your car's internal data with absolute precision. Our advanced technology connects securely to your vehicle, preventing dangerous electrical spikes or data loss. "
  },
  {
    icons: <FaSitemap />,
    title: "Precision Computer and Module Repairs",
    desc: "Our team handles complex ECU repair, Car ABS repair, and Car BCM repair services. We also specialize in TCM repair service and Car PCB repair to keep your transmission and main control boards functioning flawlessly."
  },
  {
    icons: <FaSitemap />,
    title: " Certified Diagnostic Technicians",
    desc: "Modern car repairs require advanced technical skill. Our certified experts train heavily on the latest automotive software and electrical systems. "
  },
  {
    icons: <FaSitemap />,
    title: "Complete Specialized Calibration",
    desc: "You get complete Car 360 calibration and ADAS sensor repair and recalibration to keep your safety systems sharp. We even tackle severe flood car repair, car key programming, and custom automotive tuning to maximise your daily driving experience."
  }
]

const arabicContent = [
  {
    icons: <FaSitemap />,
    title: "استجابة سريعة",
    desc: "خدمة سريعة لإعادة تشغيل سيارتك والعودة إلى الطريق دون انتظار طويل."
  },
  {
    icons: <FaSitemap />,
    title: "بطاريات عالية الجودة",
    desc: "نوفر بطاريات عالية الأداء وطويلة العمر تناسب مجموعة واسعة من السيارات."
  },
  {
    icons: <FaSitemap />,
    title: "فنيون متخصصون",
    desc: "يضمن خبراؤنا المدربون تركيب البطارية بأمان وكفاءة دون أي متاعب."
  },
  {
    icons: <FaSitemap />,
    title: "رضا العملاء",
    desc: "نركز على تقديم خدمة موثوقة وتجربة سلسة لكل عميل."
  }
]

    const englishFaqs = [
        {
            question: "How accurate are your car scanning and diagnostic services?",
            answer: "We use dealership-level diagnostic tools to read your vehicle's computer systems with absolute precision. This advanced technology allows our certified technicians to pinpoint the exact root cause of any warning light or performance issue. By finding the precise fault, we prevent unnecessary parts replacement and save you money."
        },
        {
            question: "What types of computer and module repairs do you handle?",
            answer: "Our experts manage a wide range of complex electronic fixes to keep your car running smoothly. We provide specialised ECU repair, Car ABS repair, and Car BCM repair services. We also perform TCM repair service and Car PCB repair to ensure your transmission and main control boards work flawlessly."
        },
        {
            question: "Can you fix and recalibrate advanced safety sensors?",
            answer: "Yes, we fully restore and align your vehicle's modern safety features. Our team performs complete Car 360 calibration and ADAS sensor repair and recalibration. This expert alignment ensures your cameras, radar, and lane-assist systems function perfectly to keep you safe on the road."
        },

          {
            question: "Do you offer specialised services for flooded cars or key programming?",
            answer: "We certainly do. Our technicians specialise in severe flood car repair, working carefully to salvage and restore water-damaged electrical systems. We also offer fast car key programming and custom automotive tuning to optimise your daily driving experience."
        },

          {
            question: "Why is advanced diagnostic technology so important for my car?",
            answer: "Modern vehicles rely on highly sensitive computer networks to operate. Using outdated scanners can cause data loss or dangerous electrical spikes. Our advanced diagnostic technology connects securely to your car, allowing us to read error codes safely while protecting your engine management and internal memory systems."
        },

          

           ]



 const arabicFaqs = [
  {
    question: "ما هي الخدمات التي تقدمونها؟",
    answer:
      "نقدم خدمات شاملة لبطاريات السيارات تشمل فحص البطارية، تشغيل السيارة عند توقفها، استبدال البطارية، والمساعدة على الطريق. كما نقدم خدمات إصلاح السيارات المميزة ودعم الطوارئ على مدار الساعة في دبي وأبوظبي."
  },
  {
    question: "كم يستغرق استبدال البطارية؟",
    answer:
      "يمكن لفنيينا المحترفين استبدال بطارية سيارتك عادةً خلال 15 إلى 30 دقيقة في موقعك. نحن ندرك أن وقتك مهم، لذلك نحرص على تقديم خدمة سريعة وفعالة."
  },
  {
    question: "هل توفرون المساعدة على الطريق على مدار الساعة؟",
    answer:
      "نعم، نقدم خدمة المساعدة على الطريق على مدار 24 ساعة في دبي وأبوظبي. سواء كان ذلك في النهار أو الليل أو في عطلة نهاية الأسبوع أو العطلات الرسمية، فريقنا مستعد دائمًا لمساعدتك في أي حالة طارئة تتعلق بالبطارية."
  },
  {
    question: "ما هي المناطق التي تغطونها؟",
    answer:
      "نغطي جميع المناطق الرئيسية في دبي وأبوظبي، بما في ذلك وسط مدينة دبي، دبي مارينا، أبراج بحيرات الجميرا (JLT)، الخليج التجاري، جزيرة الريم، وجزيرة ياس."
  },
  {
    question: "هل تقدمون ضمانًا على البطاريات؟",
    answer:
      "نعم، جميع بطارياتنا تأتي مع ضمان شامل. تختلف مدة الضمان حسب نوع وعلامة البطارية. يرجى التواصل معنا للحصول على تفاصيل الضمان الخاصة بكل نوع من البطاريات."
  }
]




      const hero = locale === "en" ? heroEnglishContent : locale === "ar" ? heroArabicContent : null
      const serviceContent = locale === "ar" ? serviceArabicContent : serviceEnglishContent
      const data = locale === "en" ? englishContent : locale === "ar" ? arabicContent : null
       const faqs = locale === "ar" ? arabicFaqs : englishFaqs


        const batteryText =
  locale === "ar"
    ? {
        title1: "بطاريات",
        title2: "موثوقة",
        title3: "العلامات التجارية",
      }
    : {
        title1: "Reliable",
        title2: "Battery",
        title3: "Brand",
      };

              
                    const batteryBrands = [
                      { image: varta, name: "Varta" },
                      { image: acdelco, name: "AC Delco" },
                      { image: bosh, name: "Bosch" },
                      { image: amron, name: "Amaron" },
                      { image: solite, name: "Solite" },
                      { image: volcan, name: "Volcan" },
                  ];


  return (
    <div>
      <div className='sticky top-0 '>
        <Hero hero={hero} herobg={herobg} />
      </div>
        <div className='bg-white rounded-t-4xl relative z-10'>
           <Service serviceContent={serviceContent} serviceImg={serviceImg} />
           <CarBrands />
           <Battery brands={batteryBrands} batteryText={batteryText} />
            <WhyChooseUs data={data} />
           <Trusted />
           <Faq faqs={faqs} />
           <Footer />
        </div>
    </div>
  )
}

export default MechanicalRepair