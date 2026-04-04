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
import serviceImg from "@/public/brands/roll/service.webp"
import serviceImg5 from "@/public/brands/roll/service1.webp"
import React from 'react'
import CarBrands from '@/app/components/Brands/subPage/CarBrands'
// car brands
  import carBrand1 from '@/public/brands/roll/1.webp'
   import carBrand2 from '@/public/brands/roll/2.webp'
    import carBrand3 from '@/public/brands/roll/3.webp'
     import carBrand4 from '@/public/brands/roll/4.webp'
      import carBrand5 from '@/public/brands/roll/5.webp'
       import carBrand6 from '@/public/brands/roll/6.webp'
        import carBrand7 from '@/public/brands/roll/7.webp'
         import carBrand8 from '@/public/brands/roll/8.webp'
          import carBrand9 from '@/public/brands/roll/9.webp'
           import carBrand10 from '@/public/brands/roll/10.webp' 
// battery brands
import varta from "@/public/batteryBrands/varta.png";
import acdelco from "@/public/batteryBrands/ac.png";
import bosh from "@/public/batteryBrands/bosh.png";
import amron from "@/public/batteryBrands/amron.png";
import solite from "@/public/batteryBrands/solit.png";
import volcan from "@/public/batteryBrands/volcan.png";
import Battery from '@/app/components/Brands/subPage/Battery'
import WhyChooseUs from '@/app/components/Brands/subPage/WhyChooseUs'
import herobg from '@/public/brands/roll/bg.webp'


const RollsRoyce = () => {
  const locale = useLocale()
  const heroEnglishContent = {
    desc:"Top Car Brands – 24/7 Emergency Support & Anywhere!",
    title:{
      span1:"Rolls Royce Car Battery Replacement ",
      span2:" & Advanced Repairs"
    },
    desc1:"Get premium Car battery replacement & reliable advance repairs for your Rolls Royce From 800BatteryPro.",
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
    title: "Rolls Royce Battery Replacement & Advanced Repair Services",
    services: [
      {
        id: 1,
        description:
          "A British presitige and one of the top-tier luxury cars in the World, Rolls Royce. With 500+ horsepower your Rolls Royce needs trusted car battery replacement and certified technician services, that too on market competitive pricing. 800BatteryPro is one of the best Rolls Royce Center in Dubai and Abu Dhabi. With 50+ certified Rolls Royce specialist we take pride in delivering every car job with 100 percent customer satisfaction.If you are stuck somewhere on the road with a non-functional electronic system, a dead car battery, or any other car repair issue, call us at +971528475675 for immediate 24/7 roadside assistance. Our technicans only use OEM-approved spare parts and geunine batteries for Rolls Royce. We offer free battery testing and free of cost battery delivery anywhere in Dubai and Abu Dhabi. "
      },
      {
        id: 2,
        description:
          "800BatteryPro offers the following are the different types of Chevrolet Battery:For Rolls Royce at 800BatteryPro, we recommend and provide different types of Car Batteries depending upon your car model. Primarily we offer the Enhanced Flooded Battery (EFB) and also Absorbent Glass Mat (AGM) for all Rolls Royce Models such as Phantom, Ghost, Wraith, Dawn, and Cullinan. "
      },

       {
        id: 3,
        description:
          "Types of Rolls Royce Car Batteries We Provide: EFB BATTERY For Rolls Royce: There are several Rolls Royce Models with a start-stop technology system for which the Enhanced Flooded Battery (EFB) is the best solution used for their next-gen technology and capabilities of providing extended battery life. AGM BATTERY For Rolls Royce: For premium Rolls Royce Models our technicians use and recommend the Absorbent Glass Mat (AGM) batteries, which are featured with highly capable, highly durable, and excellent performance. "
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
    title: "Rolls Royce Service Center in Dubai – German Car Experts",
    services: [
      {
        id: 1,
        description:
          "800BatteryPro has years of experience delivering 100 percent satisfactory Rolls Royce Car Battery Replacement services and advance repair services in the UAE. We have a team of certified Rolls Royce experts and a well-equipped service center in Dubai for serving every car job with complete customer satisfaction. Our 24/7 roadside assistance and free car inspections are available for all Chevrolet Standard, hybrid, all-electric, or Premium Models, which generally happen after every 10,000 KMs or once a year. Don’t hesitate to book your next car appointment with us, as our technicians only use OEM-approved spare parts and genuine car batteries, ensuring peak performance for your Rolls Royce."
      },
      {
        id: 2,
        description:
          "You can reserve your slot for your next Battery Check-up with the best Rolls Royce car experts in Dubai. Contact us at +971 528475675 for 24/7 emergency roadside assistance."
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
    desc: "We offer compassionate and 24/7 customer support to all our Rolls Royce customers in the UAE. Don’t hesiate to contact in regards to your car."
  },
  {
    icons: <FaSitemap />,
    title: "Certified Rolls Royce Specialists",
    desc: " 800BatteryPro has a team of 50+ Rolls Royce experts in Dubai and Abu Dhabi. "
  },
  {
    icons: <FaSitemap />,
    title: "Genuine Battery & OEM-Approved Parts",
    desc: "Our technicans here at 800BatteryPro only use genuine Rolls Royce Battery and OEM-approved spare parts for all car jobs. "
  },
  {
    icons: <FaSitemap />,
    title: "Car Battery Under 15 Minutes",
    desc: " If you are stranded somewhere with a dead Rolls Royce battery then you can contact us at +971 528475675. For instant roadside assistance Under 30 Minutes."
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
            question: "How do I know if my Rolls Royce battery needs to be replaced?",
            answer: "If you spot the following common signs, it means your Rolls Royce battery needs to be replaced asap, if the start-stop system is not working properly,if the dashboard Lights Flickering or Dim Lights, if you are getting warning messages like “Battery Malfunction”, or if any electrical and Infotainment system is not working well."
        },
        {
            question: "What type of Battery does my Rolls Royce need?",
            answer: "At 800BatteryPro, we have certified Rolls Royce technicians who are great at working on all American car brands using only OEM-approved and genuine Car batteries. We recommend using AGM (Absorbent Glass Mat) or EFB (Enhanced Flooded Batteries) for cars with start-stop systems. While for the hybrid or all-electric models, the lithium-ion batteries. For more details related to certified Rolls Royce technicians, call us at +971 528475675."
        },
        {
            question: "How long does a Rolls Royce battery last?",
            answer: "A genuine Rolls Royce Battery may last from 2-3 years, which directly depends upon the mileage of your car, the climate conditions in which you drive the car, and how you drive. Which needs a routine check-up after a specific time, most commonly yearly or after 10,000 KM. You can book a free battery check-up at 800BatteryPro right now!"
        },
        {
            question: "How much does it cost to replace a Rolls Royce battery?",
            answer: "Rolls Royce battery replacement cost depends on the type and model of your car, while it also depends on the type of Battery too. When it comes to 800BatteryPro, the average prices for a car battery range from AED 500 to AED 1,500 in Dubai and Abu Dhabi, which also includes free installations and system check-ups."
        },
        {
            question: "What happens if I delay replacing my Rolls Royce battery?",
            answer: " If you don’t replace your Rolls Royce battery on time, it may lead to the following issues, a complete car battery failure, signs of strain on the alternator, electronic Systems malfunctioning, and high Road risk and getting stranded on the roadside in the extreme heat of the UAE."
        },

        {
            question: "Do I need to reset my Rolls Royce system after battery replacement?",
            answer: "Yes, our Rolls Royce specialists ensure that during battery replacement, all systems are reset and recalibrated for proper functionality of the electronic system. The Battery Management System (BMS) is taken care of to avoid further technical issues in your car. As the recalibration of the start-stop systems, infotainment, and other advance system features."
        },

        {
            question: "Can I upgrade to a lithium battery for my Rolls Royce?",
            answer: "Yes, it’s possible to upgrade to a premium lithium battery for Rolls Royce, with advance features, lighter weight, longevity, and faster charging capabilities. At the same time, our Rolls Royce Car Battery specialist ensures the use of OEM-Approved Battery for all car jobs. "
        },

        {
            question: "Do you offer on-site Rolls Royce battery replacement in Dubai?",
            answer: "Yes, 800BatteryPro offers on-site Rolls Royce battery replacement in Dubai. You can call us for 24/7 roadside assistance or any other car battery solutions anywhere in Dubai and Abu Dhabi."
        },

        {
            question: "Any British Car Experts in Dubai?",
            answer: "Yes, 800BatteryPro is one of the trusted and has a certified team of British car experts in Dubai. We have a well-equipped service center with the latest technology used for every German car repair job. We treat every car brand, including Aston Martin, Rolls Royce, and Bentley, etc. Call us now for any British car battery replacement services at +971528475675."
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
            desc: "Rolls Royece Car Models We Serve",
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
            desc: "ROLLS ROYCE PHANTOM",
            car: carBrand1,
        },
        {
            desc: "ROLLS ROYCE PHANTOM EXTENDED",
            car: carBrand2,
        },
        {
            desc: "ROLLS ROYCE SPECTRE",
            car: carBrand3,
        },
        {
            desc: "ROLLS ROYCE GHOST",
            car: carBrand4,
        },
        {
            desc: "ROLLS ROYCE GHOST EXTENDED",
            car: carBrand5,
        },
        {
            desc: "ROLLS ROYCE CULLINAN",
            car: carBrand6,
        },
        {
            desc: "ROLLS ROYCE BLACK BADGE",
            car: carBrand7,
        },
        {
            desc: "ROLLS ROYCE BOAT TAIL",
            car: carBrand8,
        },
          {
            desc: "ROLLS ROYCE WRAITH ",
            car: carBrand9,
        },
          {
            desc: "ROLLS ROYCE SWEPTAIL",
            car: carBrand10,
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
           {/* <Services services={services} /> */}
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

export default RollsRoyce