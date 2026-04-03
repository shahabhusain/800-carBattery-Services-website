import Service from '@/app/components/Brands/subPage/Service'
import Hero from '@/app/components/Brands/subPage/Hero'
import { FaSitemap } from 'react-icons/fa'
import Services from '@/app/components/Brands/subPage/Services'
import Faq from '@/app/components/Brands/subPage/Faq'
import Footer from '@/app/components/Footer'
import Trusted from '@/app/components/Hero/Trusted'
import serviceImg1 from '@/public/services/1.webp'
import serviceImg2 from '@/public/services/2.webp'
import serviceImg3 from '@/public/services/3.webp'
import serviceImg4 from '@/public/services/4.webp'
import { useLocale } from 'next-intl'
import React from 'react'
import CarBrands from '@/app/components/Brands/subPage/CarBrands'
// car brands
  import carBrand1 from '@/public/brands/ferrari/1.webp'
   import carBrand2 from '@/public/brands/ferrari/2.webp'
    import carBrand3 from '@/public/brands/ferrari/3.webp'
     import carBrand4 from '@/public/brands/ferrari/4.webp'
      import carBrand5 from '@/public/brands/ferrari/5.webp'
       import carBrand6 from '@/public/brands/ferrari/6.webp'
        import carBrand7 from '@/public/brands/ferrari/7.webp'
         import carBrand8 from '@/public/brands/ferrari/8.webp'
          import carBrand9 from '@/public/brands/ferrari/9.webp'
           import carBrand10 from '@/public/brands/ferrari/10.webp' 
            import carBrand11 from '@/public/brands/ferrari/11.webp'
               import carBrand12 from '@/public/brands/ferrari/12.webp'
                  import carBrand13 from '@/public/brands/ferrari/13.webp'
                     import carBrand14 from '@/public/brands/ferrari/14.webp'
                        import carBrand15 from '@/public/brands/ferrari/15.webp'
                           import carBrand16 from '@/public/brands/ferrari/16.webp'
// battery brands
import varta from "@/public/batteryBrands/varta.png";
import acdelco from "@/public/batteryBrands/ac.png";
import bosh from "@/public/batteryBrands/bosh.png";
import amron from "@/public/batteryBrands/amron.png";
import solite from "@/public/batteryBrands/solit.png";
import volcan from "@/public/batteryBrands/volcan.png";
import Battery from '@/app/components/Brands/subPage/Battery'
import WhyChooseUs from '@/app/components/Brands/subPage/WhyChooseUs'
import serviceImg from "@/public/brands/ferrari/service.webp"
import serviceImg5 from "@/public/brands/ferrari/service1.webp"
import bg from '@/public/brands/ferrari/bg.webp'

const Ferrari = () => {
  const locale = useLocale()
  const heroEnglishContent = {
    desc:"Top Car Brands – 24/7 Emergency Support & Anywhere!",
    title:{
      span1:"Ferrari Car Battery & Advanced ",
      span2:"Repair Experts"
    },
    desc1:"Contact 800BatteryPro for Ferrari Battery Replacement in Dubai or anywhere in the UAE. ",
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
    title: "Ferrari Experts in Dubai - From Car Battery Replacement To Car Scanning",
    services: [
      {
        id: 1,
        description:
          "Ferrari isn’t just a car—it’s a statement of performance and excellence. Ferrari - A car representing prestige and peak performance. Like any other Italian car brand, 800BatteryPro has certified Ferrari technicians for Ferrari battery replacement services in Dubai. Ferrari car batteries are engineered to sustain under high temperatures and provide support during peak performance. For car models like Ferrari SF90 XX Spider, F80, 849 Testarossa, Amalfi, 488 GTB, to the Portofino, Roma, or its SUV Purosangue, we provide both AGM Batteries and Advanced Lithium-Ion Batteries."
      },
      {
        id: 2,
        description:
          "AGM Batteries support both electrical systems for models featuring start-stop technology. AGM Batteries for Ferrari provide high performance, longevity, and resistance to vibrations in dynamic climates. For the hybrid or electric Ferrari Models, we recommend Lithium-Ion Batteries, which have greater energy density and exceptionally long lifetime cycles. To ensure peak performance and a smooth ride in a Ferrari, there is a requirement for regular maintenance and car diagnostics, which is essential for all Italian Car Brands. Our Certified Ferrari Technicians provide under 15-minute onsite battery replacements with full diagnostics and BMS resets. For Emergency Support call at +971528475675."
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
      {
        id: 3,
        description:
          "خدمة المساعدة على الطريق على مدار الساعة للبطاريات الفارغة."
      },
      {
        id: 4,
        description:
          "بطاريات عالية الجودة مع ضمان وأداء طويل الأمد."
      },

    ]
  }

      const serviceEnglishContent1 = {
    subtitle: "SERVICES",
    title: "Trusted Maserati Service Center in Dubai & Abu Dhabi",
    services: [
      {
        id: 1,
        description:
          "800BatteryPro has years of experience in Ferrari repair and maintenance services. Trusted by thousands of Emirates and expats as one of the best Ferrari Service Centers in the UAE. Our certified Ferrari experts use genuine Ferrari parts and check with every car owner before installation, with a 100 percent success rate in almost every car job. Our team is available 24/7 for roadside assistance and onsite car battery replacement across the UAE. You can trust us with any routine servicing or complex repairs in any Ferrari model, from full car scanning and diagnostics, car battery check-ups & replacement, to advanced car programming services. Contact one of our experts to book your next appointment at 800BatteryPro."
      },
     
    ]
  }

  const serviceArabicContent1 = {
    subtitle: "الخدمات",
    title: "خدمات بطاريات السيارات الموثوقة",
    services: [
      {
        id: 1,
        description:
          "خدمة استبدال بطارية السيارة في موقعك مع تركيب سريع."
      },

    ]
  }

  const englishServices = [
  {
    img: serviceImg1,
    title: "Premium 24/7 Customer",
    desc: "800BatteryPro has a dedicated customer support team active 24/7 for all GMC car battery replacement and advanced repair services  in Dubai and Abu Dhabi."
  },
  {
    img: serviceImg2,
    title: "Certified GMC Specialists",
    desc: "Our technicians have 5+ years of experience working on all American Car brands including the GMC (General Motors Truck Company)."
  },
  {
    img: serviceImg3,
    title: "Genuine GMC Parts",
    desc: "Our certified GMC specialists only use genuine battery and OEM-approved spare parts for every car job."
  },
  {
    img: serviceImg4,
    title: "Car Battery Under 15 Minutes",
    desc: "Our 24/7 road side assistance for ensuring you stay safe on the road. We offer free battery testing and free car battery delivery with no hidden charges."
  }
]

const arabicServices = [
  {
    img: serviceImg1,
    title: "استبدال بطارية السيارة",
    desc: "استبدال سريع وموثوق لبطارية السيارة يصل إلى موقعك خلال 30 دقيقة."
  },
  {
    img: serviceImg2,
    title: "تشغيل بطارية السيارة",
    desc: "خدمة تشغيل البطارية بسرعة وسهولة أينما كنت."
  },
  {
    img: serviceImg3,
    title: "المساعدة على الطريق",
    desc: "دعم فوري على الطريق في جميع أنحاء الإمارات في أي وقت."
  },
  {
    img: serviceImg4,
    title: "فحص السيارة",
    desc: "تشخيص متقدم لتحديد مشاكل السيارة وحلها بدقة."
  }
]

   const englishContent = [
  {
    icons: <FaSitemap />,
    title: "Premium Customer Support",
    desc: "For every car repair and battery replacement services for Ferrari we provide compassionate customer support around the clock 24/7."
  },
  {
    icons: <FaSitemap />,
    title: "Certified Ferrari specialists",
    desc: "800BatteryPro has a team of certified Ferrari specialists who have years of experience working on premium models of Ferrari. You can trust us with different issues related to exotic brands."
  },
  {
    icons: <FaSitemap />,
    title: "Genuine Ferrari Parts",
    desc: "Our technicians at 800BatteryPro only use the genuine Ferrari parts which are OEM-approved and recommended by the manufacturer. "
  },
  {
    icons: <FaSitemap />,
    title: "Car Battery Under 15 Minutes",
    desc: "If you are stranded somewhere on the road anywhere in Dubai and Abu Dhabi, call us at +971528475675 for quick roadside assistance services. We offer free car battery and battery testing services to all our customers."
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
            question: "How often should a Ferrari battery be replaced in Dubai?",
            answer: "To maintain peak performance and smoth ride for any of the Ferrari Models, you should do a routine battery check-up, which can be done after 10,000 KM or once a year. In the UAE, due to extreme heat, the car battery suffers, which needs attention. To keep your car optimized, reach out to certified Ferrari experts such as 800BatteryPro at +971528475675."
        },
        {
            question: "Do you replace both auxiliary and main batteries?",
            answer: "Yes, 800BatteryPro's technicians are specialized in replacing both auxiliary and main batteries, such as in Ferrari hybrid models like SF90 and LaFerrari, as we are experts in handling 12V auxiliary battery swaps."
        },
        {
            question: "Will you reset the battery management system?",
            answer: "Yes, our Ferrari technicians can reset both the BMS (Battery Management System) and reprogramming of car battery data into the ECU (Electronic Control Unit)."
        },
        {
            question: "Do you support Ferrari models not sold in the UAE?",
            answer: "Yes, 800BatteryPro ensures all imports and legacy models of Ferrari get genuine car batteries, as we serve every model and variant of the brand."
        },
        {
            question: "Do you use OEM-equivalent batteries?",
            answer: "Yes, 800BatteryPro uses OEM-equivalent batteries, which even exceed the Ferrari Standards, as we only source car batteries from Premium Brands. "
        },

        {
            question: "Can I get my Ferrari battery replaced at home?",
            answer: " Yes, through onsite car Ferrari Battery replacement services, you can get it done, even get battery boosting, car programming and other services right at your doorstep across the UAE."
        },

        {
            question: "Will I lose my car’s settings?",
            answer: " No, our Ferrari experts only use reliable voltage-holding devices for retaining car settings and avoiding memory losses in your car database."
        },

        {
            question: "Do you offer a warranty?",
            answer: "Yes, 800BatteryPro offers 18 months of car battery warranty depending upon the battery brand and type. It may vary from model to model and the type of battery being replaced."
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
      const services = locale === "en" ? englishServices : locale === "ar" ? arabicServices : null
      const serviceContent = locale === "ar" ? serviceArabicContent : serviceEnglishContent
      const serviceContent1 = locale === "ar" ? serviceArabicContent1 : serviceEnglishContent1
      const data = locale === "en" ? englishContent : locale === "ar" ? arabicContent : null
       const faqs = locale === "ar" ? arabicFaqs : englishFaqs

       const text = locale === "ar"
        ? {
            desc: "ماركات السيارات التي نخدمها",
            title1: "متوافق مع جميع",
            title2: "ماركات السيارات الرئيسية",
        }
        : {
            desc: "Ferrari Car Models We Serve",
            title1: "Includes All",
            title2: "Major Models & Variants",
        }

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

                     const brands = [
        {
            desc: "849 Testarossa",
            car: carBrand1,
        },
        {
            desc: "Ferrari Amalfi",
            car: carBrand2,
        },
        {
            desc: "Ferrari Purosangue",
            car: carBrand3,
        },
        {
            desc: "Ferrari 12Cilindri Spider",
            car: carBrand4,
        },
        {
            desc: "Ferrari 12Cilindri",
            car: carBrand5,
        },
        {
            desc: "296 GTS",
            car: carBrand6,
        },
        {
            desc: "296 GTB",
            car: carBrand7,
        },
        {
            desc: "849 Testarossa Spider",
            car: carBrand8,
        },
          {
            desc: "849 Testarossa",
            car: carBrand9,
        },
          {
            desc: "296 Speciale",
            car: carBrand10,
        },
         {
            desc: " 296 Speciale A",
            car: carBrand11,
        },
         {
            desc: "SF90 XX Stradale",
            car: carBrand12,
        },
         {
            desc: " 812 Competizione A ",
            car: carBrand13,
        },
         {
            desc: "812 Competizione",
            car: carBrand14,
        },
         {
            desc: "Daytona SP3",
            car: carBrand15,
        },

         {
            desc: "La Ferrari",
            car: carBrand16,
        },
        
                  ]
              
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
      <div className='sticky top-0 '>  {/* Added z-index */}
        <Hero hero={hero} herobg={bg} />
      </div>
        <div className=' bg-white  rounded-t-4xl relative z-10'>
           <Service serviceContent={serviceContent} serviceImg={serviceImg} />
           <Services services={services}  />
           <CarBrands text={text} brands={brands} />
           <Battery brands={batteryBrands} batteryText={batteryText} />
            <Service serviceContent={serviceContent1} serviceImg={serviceImg5} />
            <WhyChooseUs data={data} />
            <Faq faqs={faqs} />
           <Trusted />
           <Footer />
        </div>
    </div>
  )
}

export default Ferrari