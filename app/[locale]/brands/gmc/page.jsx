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
  import carBrand1 from '@/public/brands/gmc/1.webp'
   import carBrand2 from '@/public/brands/gmc/2.webp'
    import carBrand3 from '@/public/brands/gmc/3.webp'
     import carBrand4 from '@/public/brands/gmc/4.webp'
      import carBrand5 from '@/public/brands/gmc/5.webp'
       import carBrand6 from '@/public/brands/gmc/6.webp'
        import carBrand7 from '@/public/brands/gmc/7.webp'
         import carBrand8 from '@/public/brands/gmc/8.webp'
          import carBrand9 from '@/public/brands/gmc/9.webp'
           import carBrand10 from '@/public/brands/gmc/10.webp' 
            import carBrand11 from '@/public/brands/gmc/11.webp'
// battery brands
import varta from "@/public/batteryBrands/varta.png";
import acdelco from "@/public/batteryBrands/ac.png";
import bosh from "@/public/batteryBrands/bosh.png";
import amron from "@/public/batteryBrands/amron.png";
import solite from "@/public/batteryBrands/solit.png";
import volcan from "@/public/batteryBrands/volcan.png";
import Battery from '@/app/components/Brands/subPage/Battery'
import WhyChooseUs from '@/app/components/Brands/subPage/WhyChooseUs'
import serviceImg from "@/public/brands/gmc/service.webp"
import serviceImg5 from "@/public/brands/gmc/service1.webp"
import bg from '@/public/brands/gmc/bg.webp'

const Gmc = () => {
  const locale = useLocale()
  const heroEnglishContent = {
    desc:"Top Car Brands – 24/7 Emergency Support & Anywhere!",
    title:{
      span1:"GMC Car Battery Replacement ",
      span2:"& Advanced Repairs"
    },
    desc1:"Don’t panic if your GMC Car Battery Needs Quick Replacement or any other advance repairs. 800BatteryPro provides 24/7 roadside assistance under 30 minutes. ",
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
    title: "GMC Battery Replacement & Advanced Repair Services",
    services: [
      {
        id: 1,
        description:
          "Suppose you got a non-active battery that causes dim lights, electronic system fluctuations, and other issues. Our certified GMC technicians provide on-site services for all GMC car battery replacements, along with battery boosting and advance repairs. 800BatteryPro only recommends and uses car batteries that use Sila Nanotechnologies, sodium-ion batteries, solid-state batteries, and more. Our team of GMC specialists is experienced in providing 100 percent satisfactory jobs related to every GMC Battery replacement in Dubai and Abu Dhabi, ensuring you drive safely and stress-free. We are one of the trusted GMC service centres in Dubai, as we only use manufacturer-recommended car batteries, which ensures long-term peak performance. If you see any battery-failure issues, no need to stress, call us at +971528475675.  800BatteryPro provides Auxiliary and lithium batteries for GMC Cars in Dubai. "
      },
      {
        id: 2,
        description:
          "800BatteryPro offers the following are the different types of GMC Battery: Our car battery specialist recommends both AGM (Absorbent Glass Mat) or EFB (Enhanced Flooded Batteries) for premium models while, for newer hybrid GMC car’s we only use OEM-approved Lithium Battery for ensuring peak performance and longevity. Here are two different scale of GMC Battery that we offer to our customers: "
      },
      {
        id: 3,
        description:
          "Auxillary Battery GMC: Like for any other American car brand, GMC Auxiliary Battery replacement ensures your seamless functionality for your car’s electronic system. The auxiliary battery supports car infotainment, start-stop system, and also the smart driver-assistance systems. There is a high chance that auxiliary battery functionality may degrade due to extreme heat, leading to malfunctions or warning messages showing up on the dashboard. GMC Battery replacement needs great expertise as removing an old unit needs close attention to detail, and also for installing a genuine, OEM-approved battery. Recalibration of your car system is involved for optimizing performance and better compatibility. A routine battery check-up is compulsory to avoid any stressful times on the road."
      },
      {
        id: 4,
        description:
          "GMC Lithium Battery: Some of the new models now need a different solution, as GMC Lithium Battery Replacement is high in demand due to its superior features, offering long-term peak performance, are lighter in weight and quick in charging. While doing the replacement for the GMC Lithium battery, our technicians ensure to use only OEM-approved batteries and equipment, and also recalibrate the Battery Management System (BMS). If you face any issue with a new model GMC car with advance features, call us at +971528475675."
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
    title: "GMC Service Centre in Dubai  ",
    services: [
      {
        id: 1,
        description:
          "Premium German Car Battery Replacement & Car Repairs - We offer expert GMC battery service to ensure your vehicle performs at its best. Whether you drive a standard model or an Gmc hybrid, maintaining a healthy battery is crucial for smooth and reliable operation. Our skilled technicians are equipped to handle everything from standard battery maintenance to GMC hybrid battery replacement, ensuring optimal performance for your eco-friendly vehicle. 800BatteryPro is one of the trusted GMC service centers in Dubai and Abu Dhabi. If you are driving a GMC premium, standard model or a hybrid version, our American Car experts know how to deliver a 100 percent quality job while using OEM-approved Battery. It’s not just about delivering the premium GMC Battery replacement to standard battery maintenance, as we ensure your safety on the road. We recommend routine car battery checkups using a GMC-approved battery for durability and reliability. We have a well-equipped car workshop in Dubai, providing market-competitive pricing for all our GMC Battery services.You can reserve your slot for your next Battery Checkup with the best GMC car experts in Dubai. Contact us at +971 528475675 or for 24/7 emergency roadside assistance."
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
            question: "What type of Battery does my GMC need?",
            answer: "Like all American Brands, GMC models specify the type of Battery required, which also includes AGM (Absorbent Glass Mat) or EFB (Enhanced Flooded Batteries) for cars with start-stop systems. While for the hybrid or all-electric models, 800BatteryPro recommends the lithium-ion batteries. For more details related to certified GMC technicians, call us at +9282727277"
        },
        {
            question: " How long does a GMC battery last?",
            answer: " An GMC battery typically lasts 3 to 5 years, but this can vary based on driving habits, climate conditions, and regular maintenance. The lifetime of a GMC battery depends on your car mileage, maintenance routine, and the climate conditions you drive in. In the UAE, a GMC Battery typically may last from 3 to 5 years in total, but yearly checkups are still essential for keeping peak performance."
        },
        {
            question: "How much does it cost to replace an GMC battery?",
            answer: "GMC battery replacement cost depends on the type and model of your car, while it also depends on the type of Battery too. When it comes to 800BatteryPro, the average prices for a car battery range from AED 500 to AED 1,500 in Dubai and Abu Dhabi, which also includes installations and system checkups."
        },
        {
            question: "Do I need to reset my GMC system after battery replacement?",
            answer: "Yes, our GMC specialists ensure that during battery replacement, all systems are reset and recalibrated for proper functionality of the electronic system. The Battery Management System (BMS) is taken care of to avoid further technical issues in your car. As the recalibration of the start-stop systems, infotainment, and other advance system features."
        },
        {
            question: "Can I upgrade to a lithium battery for my GMC?",
            answer: "Yes, it’s possible to upgrade to a premium lithium battery for GMC, with advance features, lighter weight, longevity, and faster charging capabilities. At the same time, our GMC Car Battery specialist ensures the use of OEM-Approved Battery for all car jobs. "
        },

        {
            question: "Do you offer on-site GMC battery replacement in Dubai?",
            answer: "Yes, 800BatteryPro offers on-site GMC battery replacement in Dubai. You can call us for 24/7 roadside assistance or any other car battery solutions anywhere in Dubai and Abu Dhabi."
        },

        {
            question: "Any American Car Experts in Dubai?",
            answer: "Yes, 800BatteryPro is one of the trusted and has a certified team of American car experts in Dubai. We have a well-equipped service center with the latest technology used for every German car repair job. We treat every car brand, including Jeep, GMC, Chevrolet, and Tesla, etc. Call us now for any American car battery replacement services at +971528475675."
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
            desc: "GMC Car Models We Serve",
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
            desc: "TERRAIN DENALI",
            car: carBrand1,
        },
        {
            desc: "YUKON DENALI",
            car: carBrand2,
        },
        {
            desc: "YUKON & YUKON XL",
            car: carBrand3,
        },
        {
            desc: "SIERRA 1500 DENALI",
            car: carBrand4,
        },
        {
            desc: "GMC HUMMER EV PICKUP",
            car: carBrand5,
        },
        {
            desc: "GMC HUMMER EV SUV",
            car: carBrand6,
        },
        {
            desc: "SIERRA HD DENALI",
            car: carBrand7,
        },
        {
            desc: "CANYON DENALI",
            car: carBrand8,
        },
          {
            desc: "SIERRA EV",
            car: carBrand9,
        },
          {
            desc: "SIERRA 3500 HD CHASSIS CAB",
            car: carBrand10,
        },
         {
            desc: "GMC SAVANA CARGO",
            car: carBrand11,
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

export default Gmc