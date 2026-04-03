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
  import carBrand1 from '@/public/brands/che/1.webp'
   import carBrand2 from '@/public/brands/che/2.webp'
    import carBrand3 from '@/public/brands/che/3.webp'
     import carBrand4 from '@/public/brands/che/4.webp'
      import carBrand5 from '@/public/brands/che/5.webp'
       import carBrand6 from '@/public/brands/che/6.webp'
        import carBrand7 from '@/public/brands/che/7.webp'
         import carBrand8 from '@/public/brands/che/8.webp'
         import carBrand9 from '@/public/brands/che/9.webp'
         import carBrand10 from '@/public/brands/che/10.webp'
         import carBrand11 from '@/public/brands/che/11.webp'
         import carBrand12 from '@/public/brands/che/12.webp'
         import carBrand13 from '@/public/brands/che/13.webp'
         import carBrand14 from '@/public/brands/che/14.webp'
         
// battery brands
import varta from "@/public/batteryBrands/varta.png";
import acdelco from "@/public/batteryBrands/ac.png";
import bosh from "@/public/batteryBrands/bosh.png";
import amron from "@/public/batteryBrands/amron.png";
import solite from "@/public/batteryBrands/solit.png";
import volcan from "@/public/batteryBrands/volcan.png";
import Battery from '@/app/components/Brands/subPage/Battery'
import WhyChooseUs from '@/app/components/Brands/subPage/WhyChooseUs'
import serviceImg from "@/public/brands/che/service.webp"
import serviceImg5 from "@/public/brands/che/service1.webp"
import bg from '@/public/brands/che/bg.webp'

const Chevrolet = () => {
  const locale = useLocale()
  const heroEnglishContent = {
    desc:"Top Car Brands – 24/7 Emergency Support & Anywhere!",
    title:{
      span1:"Chevrolet Car Battery ",
      span2:"Replacement"
    },
    desc1:"No Need to Panic if your Chevrolet Car Battery is Not Working! At 800BatteryPro, we provide quick on-site battery replacement, battery boosting, 24/7 roadside assistance and advance repair services anywhere in Dubai.",
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
    title: "Chevrolet Battery Replacement & Advanced Repair Services",
    services: [
      {
        id: 1,
        description:
          "Chevrolet is one of the best American Car brands with its wide bodies and peak performance powertrains, considered as highly maintenance-demanding vehicles. In the harsh climate of the UAE, Chevrolet faces stressful situations with their car batteries. At 800BatteryPro, we have certified Chevrolet specialists who can do a quick Car Battery Replacement for you under 15 minutes, that too at no cost! Our team of technicians has the best equipment and battery testing technology to work on every car job, delivering 100 percent satisfaction. If you are facing trouble starting your car, flickering lights in the dashboard, or dim headlights, then you should immediately contact our expert at +971528475675. A non-functional battery is the main reason behind a malfunctioning electrical system, which needs to be replaced as soon as possible. Our customer support will assign a Chevrolet specialist to you, helping you get back on the road instantly."
      },

           {
        id: 2,
        description:
          "To make sure you don’t face any car battery-related issues, you should do a routine battery check-up after each 10,000 Km’s or once a year. Our technicians only use OEM-approved spare parts and genuine car batteries for every car job. If you are stranded somewhere on the road, you should get our 24/7 roadside assistance instantly with free Car battery boosting services. We are just a call away at +971528475675. "
      },


           {
        id: 3,
        description:
          "800BatteryPro offers the following are the different types of Chevrolet Battery: For Chevrolet at 800BatteryPro, we recommend and provide different types of Car Batteries depending upon your car model. Starting with the Maintenance-free MF, Enhanced Flooded Battery EFB, traditional Lead Acid Battery, and also Absorbent Glass Mat AGM Chevrolet Batteries."
      },

         {
        id: 4,
        description:
          "Types of Chevrolet Car Batteries We Provide: MF BATTERY FORD: For standard Chevrolet Models we recommend Maintenance-Free Batteries for high power output and low maintenance. EFB BATTERY FORD: There are several Chevrolet Models with a start-stop technology system for which the Enhanced Flooded Battery (EFB) is the best solution used for their next-gen technology and capabilities of providing extended battery life. LEAD ACID BATTERY Chevrolet: For customers who prefer a traditional lead acid battery for Chevrolet. For some of our customers who need a quick car battery solution within a tight budget, we recommend a Lead Acid Battery for Chevrolet. Our certified technicians recommend using the traditional lead-acid batteries, which are both trustworthy and inexpensive. FORD AGM BATTERY: For premium Chevrolet Models our technicians use and recommend the Absorbent Glass Mat (AGM) batteries, which are featured with highly capable, highly durable, and excellent performance. 800BatteryPro provides 24/7 roadside assistance with under 15 minutes of on-site Chevrolet car battery delivery anywhere in Dubai. Our battery testing and delivery are free of cost, while our battery warranty lasts up to 18 months.  For premium Chevrolet Battery replacement and advanced repairs, contact us now at +971528475675 or book a free car inspection appointment right now!"
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
    title: "Chevrolet Service Center in Dubai – Premium American Car Battery Replacement",
    services: [
      {
        id: 1,
        description:
          "800BatteryPro has years of experience delivering 100 percent satisfactory Chevrolet Car Battery Replacement services and advance repair services in the UAE. We have a team of certified Chevrolet experts and a well-equipped service center in Dubai for serving every car job with complete customer satisfaction. Our 24/7 roadside assistance and free car inspections are available for all Chevrolet Standard, hybrid, all-electric, or Premium Models, which generally happen after every 10,000 KMs or once a year. Don’t hesitate to book your next car appointment with us, as our technicians only use OEM-approved spare parts and genuine car batteries, ensuring peak performance for your Chevrolet.You can reserve your slot for your next Battery Check-up with the best Chevrolet car experts in Dubai. Contact us at +971 528475675 for 24/7 emergency roadside assistance."
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
            question: " What type of Battery does my Chevrolet need?",
            answer: "At 800BatteryPro, we have certified Chevrolet technicians who are great at working on all American car brands using only OEM-approved and genuine Car batteries. We recommend using AGM (Absorbent Glass Mat) or EFB (Enhanced Flooded Batteries) for cars with start-stop systems. While for the hybrid or all-electric models, the lithium-ion batteries. For more details related to certified Chevrolet technicians, call us at +971 528475675."
        },
        {
            question: "How long does a Chevrolet battery last?",
            answer: " A genuine Chevrolet Battery may last from 2-5 years, which directly depends upon the mileage of your car, the climate conditions in which you drive the car, and how you drive. Which needs a routine check-up after a specific time, most commonly yearly or after 10,000 KM. You can book a free battery check-up at 800BatteryPro right now!"
        },
        {
            question: "How much does it cost to replace a Chevrolet battery?",
            answer: "Chevrolet battery replacement cost depends on the type and model of your car, while it also depends on the type of Battery too. When it comes to 800BatteryPro, the average prices for a car battery range from AED 500 to AED 1,500 in Dubai and Abu Dhabi, which also includes free installations and system check-ups."
        },
        {
            question: "Do I need to reset my Chevrolet system after battery replacement?",
            answer: "Yes, our Chevrolet specialists ensure that during battery replacement, all systems are reset and recalibrated for proper functionality of the electronic system. The Battery Management System (BMS) is taken care of to avoid further technical issues in your car. As the recalibration of the start-stop systems, infotainment, and other advance system features."
        },


            {
            question: "Can I upgrade to a lithium battery for my Chevrolet?",
            answer: " Yes, it’s possible to upgrade to a premium lithium battery for Chevrolet, with advance features, lighter weight, longevity, and faster charging capabilities. At the same time, our Chevrolet Car Battery specialist ensures the use of OEM-Approved Battery for all car jobs. "
        },


            {
            question: "Do you offer on-site Chevrolet battery replacement in Dubai?",
            answer: "Yes, 800BatteryPro offers on-site Chevrolet battery replacement in Dubai. You can call us for 24/7 roadside assistance or any other car battery solutions anywhere in Dubai and Abu Dhabi."
        },


            {
            question: "Any American Car Experts in Dubai?",
            answer: " Yes, 800BatteryPro is one of the trusted and has a certified team of American car experts in Dubai. We have a well-equipped service center with the latest technology used for every German car repair job. We treat every car brand, including Jeep, GMC, Chevrolet, and Tesla, etc. Call us now for any American car battery replacement services at +971528475675."
        },


            {
            question: "Do we provide American Car Battery Replacement in Abu Dhabi?",
            answer: "Yes, 800BatteryPro has well-equipped service centers in Dubai and Abu Dhabi. We treat every American car battery replacement with genuine and premium car battery replacements. Our customer base is 100 percent satisfied with our auto repair and battery services. If your car battery is dead, call us now at +971528475675 for emergency assistance services. "
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
            desc: "Chevrolet Car Models We Serve",
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
            desc: "Silverado EV",
            car: carBrand1,
        },
        {
            desc: "BrightDrop",
            car: carBrand2,
        },
        {
            desc: "ZR1X",
            car: carBrand3,
        },
        {
            desc: "ZR1",
            car: carBrand4,
        },
        {
            desc: "E-Ray",
            car: carBrand5,
        },
        {
            desc: "Stingray",
            car: carBrand6,
        },
        {
            desc: "Suburban",
            car: carBrand7,
        },
        {
            desc: "Tahoe",
            car: carBrand8,
        },
                {
            desc: "Traverse",
            car: carBrand9,
        },
                {
            desc: "Blazer EV",
            car: carBrand10,
        },
                {
            desc: "Equinox",
            car: carBrand11,
        },
                {
            desc: "Trax",
            car: carBrand12,
        },
                {
            desc: "Silverado HD",
            car: carBrand13,
        },
                {
            desc: "Colarado",
            car: carBrand14,
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

export default Chevrolet