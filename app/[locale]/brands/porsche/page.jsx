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
import serviceImg from "@/public/brands/porsche/service.webp"
import serviceImg5 from "@/public/brands/porsche/service1.webp"
import React from 'react'
import CarBrands from '@/app/components/Brands/subPage/CarBrands'
// car brands
  import carBrand1 from '@/public/brands/porsche/1.webp'
   import carBrand2 from '@/public/brands/porsche/2.webp'
    import carBrand3 from '@/public/brands/porsche/3.webp'
     import carBrand4 from '@/public/brands/porsche/4.webp'
      import carBrand5 from '@/public/brands/porsche/5.webp'
       import carBrand6 from '@/public/brands/porsche/6.webp'
// battery brands
import varta from "@/public/batteryBrands/varta.png";
import acdelco from "@/public/batteryBrands/ac.png";
import bosh from "@/public/batteryBrands/bosh.png";
import amron from "@/public/batteryBrands/amron.png";
import solite from "@/public/batteryBrands/solit.png";
import volcan from "@/public/batteryBrands/volcan.png";
import Battery from '@/app/components/Brands/subPage/Battery'
import WhyChooseUs from '@/app/components/Brands/subPage/WhyChooseUs'
import herobg from '@/public/brands/porsche/bg.webp'


const Porsche = () => {
  const locale = useLocale()
  const heroEnglishContent = {
    desc:"Top Car Brands – 24/7 Emergency Support & Anywhere!",
    title:{
      span1:"Porsche Car Battery Replacement",
      span2:"  & Advanced Repairs"
    },
    desc1:"No need to panic if your porsche battery is dead! 800BatteryPro provide 24/7 Porsche Car Battery Replacement & next-gen repair services in Dubai. ",
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
    title: "Porsche Battery Replacement & Advanced Repair Services",
    services: [
      {
        id: 1,
        description:
          "There is no need to stress if your Porsche Battery is not working, you can call the Best Car Battery Replacement services in Dubai. 800BatteryPro provides Under 15 minutes onsite battery boosting and replacement services. We have a team of certified porsche specialists who only works on genuine battery brands with 18+ warranty and use only OEM standard parts. We have a years of experience in all areas of Porsche battery services. We employ high-performance batteries that can handle the heat of Dubai. 800BatteryPro offers the following are the different types of Porsche Battery:"
      },
      {
        id: 2,
        description:
          "Porsche 911 Series: Our certified Porsche technicians use high-performance batteries that can handle the heat of Dubai."
      },
       {
        id: 3,
        description:
          "Porsche Cayenne: Heavy-duty batteries for the Porsche Cayenne give us long-lasting power for extended travels."
      },

      {
        id: 4,
        description:
          "Porsche Panamera: We employ long-lasting batteries for the Panamera's complex electronics, which are powered by batteries that are made just for them."
      },

      {
        id: 5,
        description:
          "Porsche Taycan: The only batteries our Porsche expert uses in the all-electric Taycan are high-voltage ones."
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
    title: "Porsche Service Centre in Dubai – Premium German Car Battery Replacement ",
    services: [
      {
        id: 1,
        description:
          "800BatteryPro offers the most advanced Porsche battery replacement services that are tailored to the needs of electric systems in fully electric models like the Porsche Taycan. To make sure that batteries work as well as possible and last as long as possible, our German car experts follow tight rules. We provide the following Porsche battery replacement services for electric cars: "
      },
      {
        id: 2,
        description:
          "Our professional technicians safely replace Porsche batteries while following Porsche's rules for handling the high-voltage electric battery pack. After each Porsche battery replacement, we recalibrate the BMS. This is necessary to keep track of how well the battery is working and how it is doing. As part of our Porsche battery replacement service, we adjust the new battery to make it more efficient and provide it a longer range for driving in Dubai. We check that the charging system works with the new Porsche battery to make sure that the battery lasts longer and charges more efficiently. These professional Porsche battery replacement services make sure that both electric and hybrid Porsche models work safely and well, getting your car ready for the tough driving conditions and environment in Dubai."
      },
      {
        id: 3,
        description:
          "You can reserve your slot for your next Battery Checkup with the best Porsche car experts in Dubai. Contact us at +971 528475675 for 24/7 emergency roadside assistance."
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
    title: "Premium 24/7 Customer Support",
    desc: "800BatteryPro is your partner in driving safely on the road, with a dedicated Porsche team available for you 24/7."
  },
  {
    icons: <FaSitemap />,
    title: "Certified Porsche Specialists",
    desc: "We have a team of 50+ certified Porsche specialists who know how to deliver 100% customer satisfaction for every car battery job. "
  },
  {
    icons: <FaSitemap />,
    title: "Using Genuine Porsche Parts",
    desc: " Our technicians use only OEM-approved repair parts and genuine car batteries for every car service we deliver."
  },
  {
    icons: <FaSitemap />,
    title: "Car Battery Under 15 Minutes",
    desc: "If you are stuck somewhere on the road anywhere in the UAE, then you can call us at +971528475675. With free battery testing and free car battery delivery services."
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
            question: "When should I change the brake pads on my Porsche?",
            answer: "We inspect the brake pads at every service to see how much life they have left and suggest changing them when they have 20–15% of their life left. Also, most new automobiles feature sensors that let you know when the brake pad is about to wear out. If your automobile contains brake pad sensors, you should change the pads right away (within 1000Km) when you see the alert on your dashboard. If you wait too long to change your brake pads, you could damage your disk brakes and calipers, which are expensive to fix or replace."
        },
        {
            question: "How long should a Porsche’s battery last?",
            answer: "The battery's life relies on how it is used, how it is installed, and how it is charged. Shorter battery life can happen if you charge it too little or too much. Generally the Porsche battery needs to be replaced after a 10,000 KM or may be once a year."
        },
        {
            question: "When I need to replace my Porsche’s Battery?",
            answer: "If you can't start your Porsche, if the battery warning light is on, or if electrical parts within your Porsche aren't working. To drive safe book a free vehicle inspection today at 800BatteryPro."
        },
        {
            question: "How Quickly 800BatteryPro does Porsche Battery Replacement?",
            answer: "800BatteryPro provides Porsche Battery replacement under 15 minutes anywhere in Dubai and Abu Dhabi. Our services include Free Car battery testing, inspection and diagnostic, if your battery needs to be changed, we only use genuine Porsche battery for replacement. "
        },
        {
            question: "Any German Car Experts in Dubai?",
            answer: "Yes, 800BatteryPro is one of the trusted and has a certified team of German car experts in Dubai. We have a well-equipped service centre with the latest technology used for every German car repair job. We treat every car brand, including Mercedes, BMW, Porsche, and Audi, etc. Call us now for any German car battery replacement services at +971528475675."
        },

        {
            question: "Do we provide German Car Battery Replacement in Abu Dhabi?",
            answer: "Yes, 800BatteryPro has well-equipped service centres in Dubai and Abu Dhabi. We treat every German car battery replacement with genuine and premium car battery replacements. Our customer base is 100 percent satisfied with our auto repair and battery services. If your car battery is dead, call us now at +971528475675 for emergency assistance services. "
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
            desc: "Porsche Car Models We Serve",
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
            desc: "PORRSCHE 718",
            car: carBrand1,
        },
        {
            desc: "PORRSCHE 911",
            car: carBrand2,
        },
        {
            desc: "PORRSCHE TAYCAN",
            car: carBrand3,
        },
        {
            desc: "PORRSCHE PANAMERA",
            car: carBrand4,
        },
        {
            desc: "PORRSCHE MAYCAN",
            car: carBrand5,
        },
        {
            desc: "PORRSCHE CAYENNE",
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
      <div className='sticky top-0 '>
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

export default Porsche