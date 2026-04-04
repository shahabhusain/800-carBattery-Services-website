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
import herobg from '@/public/brands/serviceBanners/scan.webp'
import CarBrands from '@/app/components/Hero/CarBrands'


const CarScanning = () => {
  const locale = useLocale()
  const heroEnglishContent = {
    desc:"Top Car Brands – 24/7 Emergency Support & Anywhere!",
    title:{
      span1:"Advanced Car Scanning & ",
      span2:" Diagnostics"
    },
    desc1:"800BatteryPro - Expert in resolving complex vehicle issues instantly with absolute precision and expert care",
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
    title: " Trusted Service Center for all Car Scanning & Diagnostics in Dubai",
    services: [
      {
        id: 1,
        description:
          "Modern cars rely on highly advanced computer systems. When a warning light flashes or performance drops, you need exact answers. 800BatteryPro uses the latest diagnostic technology to read your vehicle's internal data safely and accurately. We find the exact root cause of the problem so you never pay for unnecessary repairs. Our certified technicians specialize in complex electrical fixes and computer system restorations. We provide a complete range of precision diagnostic and repair services to keep your vehicle running flawlessly: Computer & Module Repairs: ECU Repair, Car BCM Repair Services, TCM Repair Service, and Car PCB Repair Service. Safety & Calibration: Car 360 Calibration, Car ABS Repair, and ADAS Sensor Repair and Recalibration. Specialized Care: Automotive Tuning, Flood Car Repair, and Car Key Programming. Stop guessing what is wrong with your vehicle. Trust our experts to protect your engine and restore your advanced systems quickly."
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
    desc: "We use dealership-level scanning tools to read your car's internal data with absolute precision. Our advanced technology connects securely to your vehicle, preventing dangerous electrical spikes or data loss. We map out every fault code instantly, ensuring we fix the actual problem the first time."
  },
  {
    icons: <FaSitemap />,
    title: "Precision Computer and Module Repairs",
    desc: "Swapping parts blindly drains your wallet. Instead, we offer deep-level system restorations. Our team handles complex ECU repair, Car ABS repair, and Car BCM repair services. We also specialize in TCM repair service and Car PCB repair to keep your transmission and main control boards functioning flawlessly."
  },
  {
    icons: <FaSitemap />,
    title: " Certified Diagnostic Technicians",
    desc: "Modern car repairs require advanced technical skill. Our certified experts train heavily on the latest automotive software and electrical systems. Whether you drive a standard daily commuter or a complex exotic vehicle, we apply the exact manufacturer protocols to protect your engine and wiring."
  },
  {
    icons: <FaSitemap />,
    title: "Complete Specialized Calibration",
    desc: "A physical repair is only half the job. We recalibrate your vehicle so it drives perfectly. You get complete Car 360 calibration and ADAS sensor repair and recalibration to keep your safety systems sharp. We even tackle severe flood car repair, car key programming, and custom automotive tuning to maximise your daily driving experience."
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

export default CarScanning