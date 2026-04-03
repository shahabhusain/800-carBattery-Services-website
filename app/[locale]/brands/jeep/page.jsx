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
  import carBrand1 from '@/public/brands/jeep/1.webp'
   import carBrand2 from '@/public/brands/jeep/2.webp'
    import carBrand3 from '@/public/brands/jeep/3.webp'
     import carBrand4 from '@/public/brands/jeep/4.webp'
      import carBrand5 from '@/public/brands/jeep/5.webp'
       import carBrand6 from '@/public/brands/jeep/6.webp'
// battery brands
import varta from "@/public/batteryBrands/varta.png";
import acdelco from "@/public/batteryBrands/ac.png";
import bosh from "@/public/batteryBrands/bosh.png";
import amron from "@/public/batteryBrands/amron.png";
import solite from "@/public/batteryBrands/solit.png";
import volcan from "@/public/batteryBrands/volcan.png";
import Battery from '@/app/components/Brands/subPage/Battery'
import WhyChooseUs from '@/app/components/Brands/subPage/WhyChooseUs'
import serviceImg from "@/public/brands/jeep/service.webp"
import serviceImg5 from "@/public/brands/jeep/service1.webp"
import bg from '@/public/brands/jeep/bg.webp'

const Jeep = () => {
  const locale = useLocale()
  const heroEnglishContent = {
    desc:"Top Car Brands – 24/7 Emergency Support & Anywhere!",
    title:{
      span1:"Jeep Car Battery Replacement & ",
      span2:"Advanced Repairs"
    },
    desc1:"Don’t stress if you are stranded with your dead Jeep battery! 800BatteryPro provides premium Car Battery Replacement Under 30 Minutes, With Free Battery Boosting & Advance Repairs in Dubai.",
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
    title: " Jeep Battery Replacement & Advanced Repair Services",
    services: [
      {
        id: 1,
        description:
          "Jeep is one of the major American car brands, with a variety of premium and off-road models. 800BatteryPro has a team of certified Jeep specialist, who only uses OEM-approved batteries and the latest technology to complete every job with 100 percent customer satisfaction. Our Jeep specialists will do an on-site free battery checkup, followed by a car battery replacement using the latest technology and equipment. If you are stuck somewhere with a dead car battery or a malfunctioning electronic system, contact us for immediate roadside assistance at +971528475675. "
      },
      {
        id: 2,
        description:
          "To make sure you don’t face any car battery-related issues, you should do a routine battery checkup after each 10,000 Km’s or once a year. Our technicians only use OEM-approved spare parts and genuine car batteries for every car job. If you are stranded somewhere on the road, you should get our 24/7 roadside assistance instantly with free Car battery boosting services. We are just a call away at +971528475675. "
      },
         {
        id: 3,
        description:
          "800BatteryPro offers the following types of Jeep batteries: Our American car Specialists recommend an AGM (Absorbent Glass Mat) battery for Jeep, because it's much more durable and provides support for the vehicle’s peak performance. "
      },
         {
        id: 4,
        description:
          "Types of Jeep Car Batteries We Provide: Jeep AGM BATTERY: AGM car batteries are trusted by many for their stable power output, even in harsh environments and longevity. However, like any other car battery, AGM also needs a routine checkup after 10,000 KM or once a year."
      },
         {
        id: 5,
        description:
          "800BatteryPro provides 24/7 roadside assistance with under 15 minutes of on-site Jeep car battery delivery anywhere in Dubai. Our battery testing and delivery are free of cost, while our battery warranty lasts up to 18 months.  For premium Jeep Battery replacement and advanced repairs, contact us now at +971528475675 or book a free car inspection appointment right now!"
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
    title: " Jeep Service Center in Dubai – Premium American Car Battery Replacement",
    services: [
      {
        id: 1,
        description:
          "We have well-equipped Jeep car service centers in Dubai and Abu Dhabi, delivering excellence in battery replacement, car programming, electrical, and mechanical repair works. With a team of over 50+ certified Jeep technicians available 24/7 for any emergency roadside assistance and free inspection of your car battery. 800BatteryPro has years of experience serving residents of the Emirates with premium Jeep car batteries and advance repair services. We only use OEM-approved spare parts and genuine Jeep batteries for all our customers. You can reserve your slot for your next Battery Check-up with the best Jeep experts in Dubai. Contact us at +971 528475675 for 24/7 emergency roadside assistance."
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
    title: "Premium 24/7 Customer Support",
    desc: "800BatteryPro provides 24/7 customer support to all its customers for premium car battery and advance repair services."
  },
  {
    icons: <FaSitemap />,
    title: "Certified Jeep Specialists",
    desc: "We have a team of certified technicians who are experienced in working on all American car brands including the Jeep."
  },
  {
    icons: <FaSitemap />,
    title: "Genuine Jeep Parts & OEM-Approved Battery",
    desc: "Our team of technicians only use the OEM-approved spare parts and genuine battery for all its models. "
  },
  {
    icons: <FaSitemap />,
    title: "Car Battery Under 15 Minutes",
    desc: "If you are stuck somewhere due to a dead car battery anywhere in Dubai and Abu Dhabi, then you can call us at +971 528475675."
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
            question: "What type of Battery does my Jeep need?",
            answer: "At 800BatteryPro, we have certified Jeep technicians who only recommends the AGM (Absorbent Glass Mat) car batteries. Because of its durability, high-density, and peak performance support features. You can book your next battery replacement by contacting us at 800BatteryPro right now!"
        },
        {
            question: "How long does a Jeep battery last?",
            answer: " A genuine Jeep Battery may last from 2-5 years, which directly depends upon the mileage of your car, the climate conditions in which you drive the car, and how you drive. Which needs a routine check-up after a specific time, most commonly yearly or after 10,000 KM. You can book a free battery check-up at 800BatteryPro right now!"
        },
        {
            question: "How much does it cost to replace a Jeep battery?",
            answer: "Jeep battery replacement cost depends on the type and model of your car, while it also depends on the type of Battery too. When it comes to 800BatteryPro, the average prices for a car battery range from AED 500 to AED 1,500 in Dubai and Abu Dhabi, which also includes free installations and system check-ups."
        },
        {
            question: "Do I need to reset my Jeep system after battery replacement?",
            answer: " Yes, our Jeep specialists ensure that during battery replacement, all systems are reset and recalibrated for proper functionality of the electronic system. The Battery Management System (BMS) is taken care of to avoid further technical issues in your car. As the recalibration of the start-stop systems, infotainment, and other advance system features."
        },
        {
            question: "Do you offer on-site Jeep battery replacement in Dubai?",
            answer: " Yes, 800BatteryPro offers on-site Jeep battery replacement in Dubai. You can call us for 24/7 roadside assistance or any other car battery solutions anywhere in Dubai and Abu Dhabi."
        },

        {
            question: " Any American Car Experts in Dubai?",
            answer: "Yes, 800BatteryPro is one of the trusted and has a certified team of American car experts in Dubai. We have a well-equipped service center with the latest technology used for every German car repair job. We treat every car brand, including Jeep, GMC, Chevrolet, and Tesla, etc. Call us now for any American car battery replacement services at +971528475675."
        },

        {
            question: "Do we provide American Car Battery Replacement in Abu Dhabi?",
            answer: " Yes, 800BatteryPro has well-equipped service centers in Dubai and Abu Dhabi. We treat every American car battery replacement with genuine and premium car battery replacements. Our customer base is 100 percent satisfied with our auto repair and battery services. If your car battery is dead, call us now at +971528475675 for emergency assistance services. "
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
            desc: "Wagoneer S ",
            car: carBrand1,
        },
        {
            desc: "Jeep® Recon",
            car: carBrand2,
        },
        {
            desc: "Gladiator",
            car: carBrand3,
        },
        {
            desc: "Grand Cherokee",
            car: carBrand4,
        },
        {
            desc: "Wrangler Models",
            car: carBrand5,
        },
        {
            desc: "Compass",
            car: carBrand6,
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

export default Jeep