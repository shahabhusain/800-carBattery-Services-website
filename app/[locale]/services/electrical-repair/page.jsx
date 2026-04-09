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
import herobg from '@/public/brands/serviceBanners/rsa.webp'
import CarBrands from '@/app/components/Hero/CarBrands'


const ElectricalRepair = () => {
  const locale = useLocale()
  const heroEnglishContent = {
    desc:"Top Car Brands – 24/7 Emergency Support & Anywhere!",
    title:{
      span1:" A-Z Car Electrical Repair  ",
      span2:" Services in Dubai "
    },
    desc1:"800BatteryPro has a team of certfied technicans who offer premium car electrical repair services in Dubai. Get you free car inspection by call us at +971528475675. ",
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
    title: "800BatteryPro Reliable Electrical Car & Battery Services ",
    services: [
      {
        id: 1,
        description:
          "We have 5+ years of experience serving our loyal customer with premium electrical car repairs in Dubai and other Emirates. With a team of 50+ trained car electricians, who are expert in all major American and European Car brands, we deliver every minor and major car job with 100 percent customer satisfaction. 800BatteryPro has a well equipped service center with the latest technology and all the essential equipments to get your car back on road with safety and luxury. If you feel any malfunctioning hardware or electrical part of your car, book a free inspection with us. Never take risk upon your safety, do a routine car checkup each 10,000 KM or per year. No matter if you have a latest or old car, electrical system plays a significant role in keeping your performance at peak. Never compromise on your comfort, call one of our technician to fix your car effciently. We work on different parts of your car electrical system including the radiator fan replacement, xenon headlight adjustment, wiper motor replacement, and door window regulator replacement etc."
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
    title: "Certified Car Technicians",
    desc: "Our team of technicians are all qualified and certified by major car brands. With years of experience in delivering every car job with 100 customer satisfaction and effciency. You can trust 800BatteryPro for your next car job."
  },
  {
    icons: <FaSitemap />,
    title: " Advanced Diagnostic Tools",
    desc: "800BatteryPro has a well equipped car service center in Dubai and Abu Dhabi. With the availibility of latest equippments and technology our team of experts are capable of using next-gen tools to solve every electrical system issue. We do a complete car scanning and diganostics for every American and European car brand."
  },
  {
    icons: <FaSitemap />,
    title: "Fast Turnaround Times",
    desc: "800BatteryPro only delivers excellence with effciency. Our team of technicians ensures your car problem is solved before it leaves our workshop. With strict quality control and check on every car job you can trust us for every minor and major car job."
  },
  {
    icons: <FaSitemap />,
    title: "Premium Vehicle Expertise",
    desc: "Non matter if its exotic, sports track, ultra luxury or any other premium car brand. 800BatteryPro has the right team of technicians who knows how to deliver every car job with 100 percent customer satisfaction and precision. Not only this every car repair job is market competitive in pricing."
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
            question: "How accurate are your electrical repair services?",
            answer: "800BatteryPro has 5+ years of experience with two fully equipped service centres in Dubai and Abu Dhabi. We have served more than 10000+ customers in the UAE. You can trust our expertise and certified car technicians for fixing any of your complex electrical issues. "
        },
        {
            question: "What types of computer and module repairs do you handle?",
            answer: "Our exotic car experts manage a wide range of complex electronic fixes to keep your car running smoothly. 800BatteryPro provide specialized ECU repair, Car ABS repair, and Car BCM repair services. We also perform TCM repair service and Car PCB repair to ensure your transmission and main control boards work flawlessly."
        },
        {
            question: "Can you help if my car is stuck in the sand?",
            answer: "It really depends upon your car brand and model, along with the severity of the electronic system issue you are facing. If its a minor issue it may range on the lower range but if its some thing related to the core electrical system then you might need to set your budget a bit higher for fixing the issue. Fortunately you have 800BatteryPro who provides you with market competitive pricing with OEM-approved spare parts used for fixing every issue in your car. Contact us for more details we will share a custom quote."
        },

          {
            question: "What are the signs of electrical problems in a car?",
            answer: " If you face any of the below signs in your car you should contact 800BatteryPro as soon as possible: If you smell any burning odour in your car or surrounding the bonnet then it needs to checked. You face issue starting your engine at first try. If you see any corrosion on any of the battery terminals Malfunction of the Power Windows or locking system You hear any click sound when Turing on the key."
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

export default ElectricalRepair