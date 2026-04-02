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
import serviceImg from "@/public/brands/mercedes/service.webp"
import serviceImg5 from "@/public/brands/mercedes/service1.webp"
import React from 'react'
import CarBrands from '@/app/components/Brands/subPage/CarBrands'
// car brands
  import carBrand1 from '@/public/brands/mercedes/1.webp'
   import carBrand2 from '@/public/brands/mercedes/2.webp'
    import carBrand3 from '@/public/brands/mercedes/3.webp'
     import carBrand4 from '@/public/brands/mercedes/4.webp'
      import carBrand5 from '@/public/brands/mercedes/5.webp'
       import carBrand6 from '@/public/brands/mercedes/6.webp'
        import carBrand7 from '@/public/brands/mercedes/7.webp'
         import carBrand8 from '@/public/brands/mercedes/8.webp'
          import carBrand9 from '@/public/brands/mercedes/9.webp'
           import carBrand10 from '@/public/brands/mercedes/10.webp' 
            import carBrand11 from '@/public/brands/mercedes/11.webp'
            import carBrand12 from '@/public/brands/mercedes/12.webp'
            import carBrand13 from '@/public/brands/mercedes/13.webp'
            import carBrand14 from '@/public/brands/mercedes/14.webp'
// battery brands
import varta from "@/public/batteryBrands/varta.png";
import acdelco from "@/public/batteryBrands/ac.png";
import bosh from "@/public/batteryBrands/bosh.png";
import amron from "@/public/batteryBrands/amron.png";
import solite from "@/public/batteryBrands/solit.png";
import volcan from "@/public/batteryBrands/volcan.png";
import Battery from '@/app/components/Brands/subPage/Battery'
import WhyChooseUs from '@/app/components/Brands/subPage/WhyChooseUs'
import herobg from '@/public/brands/mercedes/bg.webp'


const Mercedes = () => {
  const locale = useLocale()
  const heroEnglishContent = {
    desc:"Top Car Brands – 24/7 Emergency Support & Anywhere!",
    title:{
      span1:" Mercedes Car Battery Replacement  ",
      span2:" & Car Programming"
    },
    desc1:"Don’t stress if your Car Battery Is Dead! 800BatteryPro provides instant Battery Replacement for your Mercedes-Benz in Dubai. We only provide genuine Battery Brands & Top Customer Support.",
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
    title: " Mercedes-Benz Battery Replacement & Advanced Repair Services",
    services: [
      {
        id: 1,
        description:
          "Don’t panic if your Mercedes battery is dead! The best car battery replacement services in Dubai are just a click away. 800BatteryPro is trusted by thousands for its quick response and onsite battery services. We have a team of certified Mercedes specialists in Dubai who knows everything about how to get your car back on the road. With the latest battery boosting equipment and a well-equipped service centre in Dubai and Abu Dhabi, you have us as a trusted partner in all car battery-related services. Whether it’s the legendary Mercedes SLR, a luxury vehicle like the S-Class, a premium SUV like the G-Wagon, or any other custom-built model, our technicians only use AGM and Lithium batteries."
      },
      {
        id: 2,
        description:
          "800BatteryPro provides 24/7 roadside assistance with under 15 minutes of onsite car battery delivery anywhere in Dubai. Our battery testing and delivery are free of cost, while our battery warranty lasts up to 18 months.  For premium Mercedes Battery replacement and car programming, contact us now at +971528475675 or book a free car inspection right now!"
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

      const serviceEnglishContent1 = {
    subtitle: "SERVICES",
    title: "Mercedes Service Centre in Dubai ",
    services: [
      {
        id: 1,
        description:
          "It's important to get the right Mercedes-Benz battery, and at 800BatteryPro, we're here to help you choose the right one for your model. We have a wide range of batteries in stock, giving you numerous choices."
      },
      {
        id: 2,
        description:
          "Mercedes-Benz vehicles feature two batteries: the main battery powers the car's electrical systems, while the auxiliary battery supports functions like lights, radio, and Stop-Start mechanisms. The main AGM battery is located under the hood, while the auxiliary battery is typically in the trunk or rear seat. Understanding their roles is crucial for timely replacement. 800BatteryPro, serving Dubai and Abu Dhabi, specializes in replacing both main and auxiliary Mercedes-Benz batteries. Trust their expertise for seamless battery solutions."
      },
      {
        id: 3,
        description:
          "For Mercedes-Benz, our services catalogue includes 24/7 roadside assistance, Free Battery Boosting, advance car repairs (I.e ECU, TCM, etc.), and all electrical and mechanical repair services delivered with 100 percent customer satisfaction and market competitive pricing. Our technicians only use OEM standard spare parts for Mercedes-Benz, which ensures peak engine performance and luxury."
      },
       {
        id: 4,
        description:
          "You can reserve your slot for your next Battery Checkup with the best Mercedes-Benz car experts in Dubai. Contact us at +971 528475675 for 24/7 emergency roadside assistance."
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
          "خدمة المساعدة على الطريق على مدار الساعة للبطاريات الفارغة."
      },

    ]
  }

  const englishServices = [
  {
    img: serviceImg1,
    title: "Premium 24/7 Customer Support",
    desc: "800BatteryPro provides you with on-time Mercedes-Benz battery services with excellent customer support around the clock."
  },
  {
    img: serviceImg2,
    title: "Certified Mercedes Benz Specialists",
    desc: "We have a team of certified mercedes benz specialists using Genuine Mercedes Parts and branded car batteries for every car service we deliver."
  },
  {
    img: serviceImg3,
    title: "Car Battery Under 15 Minutes",
    desc: "Once we receive your emergency call for car battery services, our team delivers every car battery replacement under 15 minutes."
  },
  {
    img: serviceImg4,
    title: "Market Competitive Pricing & No Hidden Charges",
    desc: "Along with our free battery testing and free battery delivery, our Mercedes car battery services are available on market competitive pricings."
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
    title: "Premium 24/7 Customer",
    desc: "800BatteryPro provides Compassionate 24/7 Customer Support For BMW In Dubai. We offer you with a complete car care solution on pricing."
  },
  {
    icons: <FaSitemap />,
    title: "Certified BMW specialists",
    desc: "We have a team of certified BMW specialists, who have 5+ years of experience working on different BMW models and Car Batteries."
  },
  {
    icons: <FaSitemap />,
    title: "Using Genuine BMW Parts",
    desc: "Our certified BMW specialists only use OEM approved spare parts and Branded BMW batteries for all car jobs. "
  },
  {
    icons: <FaSitemap />,
    title: "Car Battery Under 15 Minutes",
    desc: " 800BatteryPro offers 24/7 roadside assistance with our free battery delivery, our technicians use the latest equipment to work on your replacement."
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
            question: "When should I change the brake pads on my Mercedes?",
            answer: "We inspect the brake pads at every service to see how much life they have left and suggest changing them when they have 20–15% of their life left. Also, most new automobiles feature sensors that let you know when the brake pad is about to wear out. If your automobile contains brake pad sensors, you should change the pads right away (within 1000Km) when you see the alert on your dashboard. If you wait too long to change your brake pads, you could damage your disk brakes and calipers, which are expensive to fix or replace."
        },
        {
            question: "How much does a Mercedes Service cost?",
            answer: "Not all Mercedes models are the same. The cost of service will depend on the model, engine, and drivetrain specifications. To find out how much it will cost to service your automobile, please fill out an inquiry form or call us. Our knowledgeable Service Advisors will be happy to help you and give you an estimate."
        },
        {
            question: "Why is it important to service my Mercedes with manufacturer-recommended oil and Filter, when there are cheaper alternatives available?",
            answer: "Your Mercedes engine is very well designed and has very small tolerances. The makers picked a certain brand and grade of oil that works best with each engine during testing and design. Changing the kind and occasionally even the brand of oil can make the engine run worse and wear it out faster. We use the kind and grade of oil that the manufacturer recommends, even if it costs a little more, because it makes the engine last longer and work better."
        },
        {
            question: "When I brake, my Mercedes vibrates, why?",
            answer: "If your car shakes when you brake, it could be because the brake pads or brake disks are broken. Your suspension, misaligned tires, or uneven tire wear could also be causing the vibration. A specialist should look at your car to find the problem and fix it in the best way. "
        },
        {
            question: "My Mercedes's check engine light is on. What should I do?",
            answer: "If you are driving, you should not drive the automobile or pull over safely. When there is an electronic or mechanical problem with your car's engine, the check engine light comes on. It could be anything small, like dirty injectors, or something big that could hurt your engine. We won't know until a technician connects a diagnostic instrument to your Mercedes and looks at the trouble codes. Please call us right away so we can help you avoid any major issues."
        },

        {
            question: "Any German Car Experts in Dubai?",
            answer: "Yes, 800BatteryPro is one of the trusted and has a certified team of German car experts in Dubai. We have a well-equipped service centre with the latest technology used for every German car repair job. We treat every car brand, including Mercedes, BMW, Porsche, and Audi, etc. Call us now for any German car battery replacement services at +971528475675."
        },

        {
            question: " Do we provide German Car Battery Replacement in Abu Dhabi?",
            answer: "Yes, 800BatteryPro has well-equipped service centres in Dubai and Abu Dhabi. We treat every German car battery replacement with genuine and premium car battery replacements. Our customer base is 100 percent satisfied with our auto repair and battery services. If your car battery is dead, call us now at +971528475675 for emergency assistance services. "
        },

        {
            question: "Which car battery do we use for replacement services?",
            answer: "Our German car specialist only uses premium AGM and Lithium-ion batteries for Mercedes Battery replacements. We only recommend high-quality and long-lasting car batteries, which ensure peak performance and safety for our customers."
        },

        {
            question: "What’s the best way to get your dead battery active?",
            answer: "Don’t get stressed if your car battery is dead. Our German car experts in Dubai and Abu Dhabi use the latest equipment and technology to get your vehicle back on the road. Call us now for instant battery boosting services under 15 minutes. "
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
            desc: "Mercedes Car Models We Serve",
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
            desc: "Mercedes-Maybach EQS SUV",
            car: carBrand1,
        },
        {
            desc: "CLA Sedan",
            car: carBrand2,
        },
        {
            desc: "C-Class Sedan",
            car: carBrand3,
        },
        {
            desc: "E-Class Sedan",
            car: carBrand4,
        },
        {
            desc: "E-Class SedanEQE Sedan",
            car: carBrand5,
        },
        {
            desc: "S-Class Sedan",
            car: carBrand6,
        },
        {
            desc: "E-Class Wagon",
            car: carBrand7,
        },
        {
            desc: "AMG S 63 E PERFORMANCE Sedan",
            car: carBrand8,
        },
          {
            desc: "CLE Coupe",
            car: carBrand9,
        },
          {
            desc: "CLE Coupe",
            car: carBrand10,
        },
         {
            desc: "AMG SL Roadster",
            car: carBrand11,
        },
         {
            desc: "Mercedes-Maybach GLS SUV",
            car: carBrand12,
        },
         {
            desc: "G-Class SUV",
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
        <Hero hero={hero} herobg={herobg} />
      </div>
        <div className='bg-white rounded-t-4xl relative z-10'>
           <Service serviceContent={serviceContent} serviceImg={serviceImg} />
           <Services services={services} />
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

export default Mercedes