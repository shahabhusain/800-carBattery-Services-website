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
  import carBrand1 from '@/public/brands/masa/1.webp'
   import carBrand2 from '@/public/brands/masa/2.webp'
    import carBrand3 from '@/public/brands/masa/3.webp'
     import carBrand4 from '@/public/brands/masa/4.webp'
      import carBrand5 from '@/public/brands/masa/5.webp'
       import carBrand6 from '@/public/brands/masa/6.webp'
        import carBrand7 from '@/public/brands/masa/7.webp'
         import carBrand8 from '@/public/brands/masa/8.webp'
          import carBrand9 from '@/public/brands/masa/9.webp'
           import carBrand10 from '@/public/brands/masa/10.webp'
            import carBrand11 from '@/public/brands/masa/11.webp'
             import carBrand12 from '@/public/brands/masa/12.webp'
              import carBrand13 from '@/public/brands/masa/13.webp' 
// battery brands
import varta from "@/public/batteryBrands/varta.png";
import acdelco from "@/public/batteryBrands/ac.png";
import bosh from "@/public/batteryBrands/bosh.png";
import amron from "@/public/batteryBrands/amron.png";
import solite from "@/public/batteryBrands/solit.png";
import volcan from "@/public/batteryBrands/volcan.png";
import Battery from '@/app/components/Brands/subPage/Battery'
import WhyChooseUs from '@/app/components/Brands/subPage/WhyChooseUs'
import serviceImg from "@/public/brands/masa/service.webp"
import serviceImg5 from "@/public/brands/masa/service1.webp"
import bg from '@/public/brands/masa/bg.webp'

const Maserati = () => {
  const locale = useLocale()
  const heroEnglishContent = {
    desc:"Top Car Brands – 24/7 Emergency Support & Anywhere!",
    title:{
      span1:"Maserati Car Battery & ",
      span2:" Repair Experts"
    },
    desc1:"Don’t Stress if your Maserati Car Battery is Dead! 800BatteryPro provides 24/7 Battery Replacement Services Under 25 Minutes anywhere in Dubai.",
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
    title: "Maserati Car Battery Replacement & Advance Repair",
    services: [
      {
        id: 1,
        description:
          "Maserati Car Battery is designed to perform, endure high temperatures, and operate reliably to ensure top performance and luxury that one can expect from a Maserati. Car models like Grecale, MCPura, Ghible, Levante, and Quattroporte are powered by advance EFB or AGM type of Car Batteries to support the car’s complex electrical system featured with stop-start technology. To ensure a smooth ride and top-tier performance for Maserati’s top Sports and luxury Models, lightweight and high-capacity Car Batteries are recommended and offered by 800BatteryPro. Choosing the right Car Battery For Maserati means choosing reliability, guaranteed starting power and improving the operations of complex On-board systems, which is essential for every Maserati. If you are facing any quirks or electrical issues in your Maserati, contact our experts for a quick Battery Check-up & Replacement across the UAE. "
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
          "800BatteryPro covers a wide spectrum of Maserati repair and maintenance services, including. One of the trusted Maserati Service Centers in Dubai and Abu Dhabi, 800BatteryPro has a well-equipped garage and certified Maserati specialists, completing every car maintenance, diagnostics and repair job with 100 percent customer satisfaction. Our technicians only use genuine Maserati parts, and with years of experience working with European car brands, you can trust us with routine servicing or complex repairs. We have a record number of jobs completed related to car Battery Check-up & Replacement, Full Inspection and Diagnosis, Minor & Major Issues, and other advance car programming services. "
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
    desc: "800BatteryPro provides you with 24/7 customer support for your Maserati car battery and advanced repair services in Dubai and Abu Dhabi. "
  },
  {
    icons: <FaSitemap />,
    title: "Certified Maserati specialists",
    desc: " We have 30+ certified Maserati specialists, who are capable of handling every car programming, car battery replacement, and advance repair jobs delivering every car job with 100 percent customer satisfaction."
  },
  {
    icons: <FaSitemap />,
    title: "Using Genuine Maserati Parts",
    desc: "Our technicians only use OEM-approved spare parts and genuine car batteries, making sure you stay safe on the road.  "
  },
  {
    icons: <FaSitemap />,
    title: "Free Car Battery Delivery & Under 30 Minutes Service",
    desc: "Upon receiving your emergency call our team of technicians provides you with onsite battery replacement and free battery testing services around the clock. "
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
            question: "Best Maserati experts in Dubai?",
            answer: "800BatteryPro is one of the trusted Maserati Experts in Dubai with well-equipped service centers and certified european car technicians. Completing every car repair and diagnostic job with precision and minimum delivery time across UAE. You can contact our Expert at +971528475675 for relaible Maesrati diganotics and car battery replacement services."
        },
        {
            question: "How often should I service my Maserati?",
            answer: "Our certified maesrati technicians recommends a service after 10,000 Kilometers or may one once an year for all Maserati car models. You should also check on the manufacturer’s service schedule as it will help in getting maximum engine performance, luxury ride, and longetitivt. Schedule your next car service with 800BatteryPro at +971528475675. "
        },
        {
            question: " What are the signs that my Maserati needs immediate service?",
            answer: "Immediately contact our Maesrati experts, if you see any of the following signs such as warning lights showing up on dashboard, unusual mechanical sounds, any fluid leaks from the car, or a dip in your car performance. You should never ignore any of these signs as they may lead to far greater issues and risks down the line. For Emergency Assistance contact on our whatsapp."
        },
        {
            question: "Promotions and Discounts on Car Battery Replacement in Abu Dhabi?",
            answer: " Depending upon what your car really needs, Maserati service includes both Standard and Major services. When it comes to standard services for Maserati models our certified technicians offers you car battery replacement, car battery boosting, roadside assistance, oil change, AC filter replacements, brake inspection, tire rotations, hoses, belts, and car fluid checks for optimising vehicle performance. While, major services for Maserati includes more in-depth inspections of the vehicle engine, transmission system, and suspension systems. Call +971528475675 to learn more about their offers."
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
            desc: "GRECALE Mild Hybrid",
            car: carBrand1,
        },
        {
            desc: "GRECALE Modena",
            car: carBrand2,
        },
        {
            desc: "GRECALE Trofeo",
            car: carBrand3,
        },
        {
            desc: "GRECALE Folgore",
            car: carBrand4,
        },
        {
            desc: "GRANTURISMO - Petrol",
            car: carBrand5,
        },
        {
            desc: "GRANTURISMO Trofeo",
            car: carBrand6,
        },
        {
            desc: "GRANTURISMO Folgore",
            car: carBrand7,
        },
        {
            desc: "GRANCABRIO - Petrol",
            car: carBrand8,
        },
          {
            desc: "GRANCABRIO - Trofeo",
            car: carBrand9,
        },
          {
            desc: "GRANCABRIO - Folgore",
            car: carBrand10,
        },
                  {
            desc: "MCPURA Petrol",
            car: carBrand11,
        },
                  {
            desc: "MCPURA CIELO",
            car: carBrand12,
        },
                  {
            desc: "GT2 Stradale",
            car: carBrand13,
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
           {/* <Services services={services}  /> */}
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

export default Maserati