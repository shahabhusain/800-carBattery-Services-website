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
import serviceImg from "@/public/brands/bmwBrands/service.webp"
import serviceImg5 from "@/public/brands/bmwBrands/service1.webp"
import React from 'react'
import CarBrands from '@/app/components/Brands/subPage/CarBrands'
// car brands
  import carBrand1 from '@/public/brands/bmwBrands/1.webp'
   import carBrand2 from '@/public/brands/bmwBrands/2.webp'
    import carBrand3 from '@/public/brands/bmwBrands/3.webp'
     import carBrand4 from '@/public/brands/bmwBrands/4.webp'
      import carBrand5 from '@/public/brands/bmwBrands/5.webp'
       import carBrand6 from '@/public/brands/bmwBrands/6.webp'
        import carBrand7 from '@/public/brands/bmwBrands/7.webp'
         import carBrand8 from '@/public/brands/bmwBrands/8.webp'
          import carBrand9 from '@/public/brands/bmwBrands/9.webp'
           import carBrand10 from '@/public/brands/bmwBrands/10.webp' 
            import carBrand11 from '@/public/brands/bmwBrands/11.webp'
// battery brands
import varta from "@/public/batteryBrands/varta.png";
import acdelco from "@/public/batteryBrands/ac.png";
import bosh from "@/public/batteryBrands/bosh.png";
import amron from "@/public/batteryBrands/amron.png";
import solite from "@/public/batteryBrands/solit.png";
import volcan from "@/public/batteryBrands/volcan.png";
import Battery from '@/app/components/Brands/subPage/Battery'
import WhyChooseUs from '@/app/components/Brands/subPage/WhyChooseUs'
import herobg from '@/public/brands/bmwBrands/bg.webp'


const Bmw = () => {
  const locale = useLocale()
  const heroEnglishContent = {
    desc:"Top Car Brands – 24/7 Emergency Support & Anywhere!",
    title:{
      span1:" BMW Car Battery Replacement   ",
      span2:"& Advanced Repairs"
    },
    desc1:"Don’t panic if your Car Battery Is Dead! 800Battery Offers The Under 15 Minute On-site Battery Replacement for your BMW in Dubai? Branded car battery with best customer services.",
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
    title: " BMW Battery Replacement & Auto Repair Services",
    services: [
      {
        id: 1,
        description:
          "Just had your BMW battery die? Don’t panic, as you now have 800BatteryPro as a trusted partner for reliable BMW Battery Replacement in Dubai. We have a team of certified technicians who are experienced in all BMW models and a well-equipped garage, too. Our technicians only use genuine battery brands for your BMW, whether it’s a sport, sedan, SUV, coupe, or any other model. We are regarded as one of the trusted BMW service centres in the UAE, with 100 percent customer satisfaction."
      },
      {
        id: 2,
        description:
          "We provide 24/7 roadside assistance and emergency BMW battery replacement services directly at your office, home, or anywhere in Dubai and Abu Dhabi."
      },
      {
        id: 3,
        description:
          "Our team of experts will offer free battery testing and use the latest tech, along with ensuring a genuine battery brand is used, which typically happens under 15 Minutes. Our Battery replacement service includes free battery health testing, expert installation, and up to 18 months of warranty. "
      },
      {
        id: 4,
        description:
          "We only use genuine car batteries suited for your vehicle. For BMW Battery replacements, car scanning, engine repairs, electrical repairs or other advanced repair services, you can call us at our toll-free number at +971528475675 or book a free appointment right now!"
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
    title: "BMW Service Centre in Dubai ",
    services: [
      {
        id: 1,
        description:
          "Genuine Car Battery Replacement & Advances Car Repairs - BMW are powerful German machine with next-gen powertrains which requires branded battery capable of handling quick acceleration, complex electrical systems, and smart tech features. 800BatteryPro recommends AGM and lithium batteries, which are great in their capacity and trusted for reliable functionality. Our certified BMW experts in Dubai only use the premium AGM Batteries to ensure high performance in the harsh summer season of the UAE."
      },
      {
        id: 2,
        description:
          "We serve more than just BMW Car Battery replacement, as we have a car service center ideally located in Dubai and Abu Dhabi. Our services catalogue includes 24/7 roadside assistance, Free Battery Boosting, advance car repairs (I.e ECU, TCM, etc.), and all electrical and mechanical repair services delivered with 100 percent customer satisfaction and market competitive pricing. Our technicians only use OEM standard spare parts for BMW, which ensures peak engine performance and luxury."
      },
      {
        id: 3,
        description:
          "You can reserve your slot for your next Battery Checkup with the best BMW experts in Dubai. Contact us at +971 528475675 for 24/7 emergency roadside assistance."
      }
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

    ]
  }

  const englishServices = [
  {
    img: serviceImg1,
    title: "Car Battery Replacement",
    desc: "Fast, reliable battery replacement delivered to your location in 30 minutes."
  },
  {
    img: serviceImg2,
    title: "Car Battery Boosting",
    desc: "Quick and stress-free jump-start services wherever you are."
  },
  {
    img: serviceImg3,
    title: "Roadside Assistance",
    desc: "Immediate roadside support across the UAE, anytime, anywhere."
  },
  {
    img: serviceImg4,
    title: "Car Scanning",
    desc: "Advanced diagnostics to identify and resolve car issues with precision."
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
            question: "How long does a BMW battery replacement take?",
            answer: "800BatteryPro guarantees on-site battery replacement under 15 Minutes once our certified BMW technicians arrive at your location. We offer free battery testing and boosting services 24/7 through our specialised roadside assistance services. If you are car battery is dead or something wrong with its electrical system, just call as at +971 528475675 for immediate assistance."
        },
        {
            question: "How do I know if my BMW battery needs replacing?",
            answer: " If you notice signs such as slow engine cranking, warning lights blinking, Headlights getting dimmed or even if it’s your car not starting. Then 800Battery recommends its free battery testing before any replacement happens."
        },
        {
            question: "Do you offer battery replacement in Dubai?",
            answer: "800BatteryPro offers 24/7 battery replacement services in Dubai and Abu Dhabi. We have a team of certified BMW technicians using latest technology and genuine car battery serving residents of UAE with under 15 minutes roadside assistance."
        },
        {
            question: "How much does a BMW battery replacement cost in Dubai?",
            answer: "BMW Battery replacement cost varies depending upon the car model and battery type, however when it comes to 800BatteryPro we offer free battery testing and 24/7 roadside assistance which can be availed by contacting us at +971 528475675 or WhatsApp One of our experts."
        },
        {
            question: "What warranty comes with a battery replacement?",
            answer: "Yes, 800BatteryPro only recommends genuine Battery Brands, as our battery replacement services comes up with 18 months warranty. While, our battery boosting is completely free of cost you can avail our services by calling us at +971 528475675."
        },

        {
            question: "Is BMW battery replacement in Dubai available 24/7?",
            answer: "Yes, 800BatteryPro has 24/7 roadside assistance available for BMW battery replacement in Dubai. We have our team of certified BMW specialist in Dubai, who uses latest technology and genuine battery brands only for every battery job."
        },

        {
            question: " Why is it important to service my BMW with manufacturer recommended Oil and Filter, when there are cheaper alternative available?",
            answer: "Your BMW engine is very well built and has very little tolerances. The makers choose a certain brand and grade of oil that works well with each engine while they were testing and designing the engine. Changing the kind and occasionally even the brand of oil can make the engine run worse and wear it out faster. We use the kind and grade of oil that the manufacturer recommends, even if it costs a little more, because it makes the engine last longer and work better."
        },

        {
            question: "What do I do when the low engine oil light turns on?",
            answer: " You can see if any oil has spilled where the automobile is parked. If oil has leaked, the engine oil lamp is probably on because of a leak. You might also have a small leak that doesn't make a big puddle but can lower the oil level over time. If not, the problem can be that the engine in your BMW is burning oil because it is too worn out. Using the right oil grade for your car is vital to avoid this."
        },

        {
            question: "My BMW is shaking, is it safe to drive?",
            answer: "No is the short answer. Maybe is the long response. There could be a simple explanation why your automobile is shaking, like worn-out spark plugs, or it could be something more serious. Don't ignore the engine noise; get it checked out as soon as you can."
        },


         {
            question: "What does “transmission fault” signify on your car’s dashboard?",
            answer: "It usually signifies that the transmission has a problem inside. It could be because of dirty gearbox fluid, a problem with the valve body, the torque converter, the internal mechanical parts, or a broken output speed sensor."
        },

         {
            question: "What to do if my BMW is overheating?",
            answer: "If your BMW is overheating, turn off the engine as soon as it is safe to do so. The engine can get damaged beyond repair if it gets too hot, which can happen very fast. If you're driving, you should pull over as soon as it's safe to do so and call a tow truck to take your car to the shop for an inspection. If the engine becomes too hot, even traveling a few meters can break it beyond repair."
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
            desc: "BMW Car Models We Serve",
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
            desc: "BMW M1",
            car: carBrand1,
        },
        {
            desc: "BMW M2",
            car: carBrand2,
        },
        {
            desc: "BMW M3",
            car: carBrand3,
        },
        {
            desc: "BMW M4",
            car: carBrand4,
        },
        {
            desc: "BMW M5",
            car: carBrand5,
        },
        {
            desc: "BMW M6",
            car: carBrand6,
        },
        {
            desc: "BMW M7",
            car: carBrand7,
        },
        {
            desc: "BMW X7",
            car: carBrand9,
        },
          {
            desc: "BMW Z4",
            car: carBrand10,
        },
          {
            desc: "BMW M8",
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
        <Hero hero={hero} herobg={herobg} />
      </div>
        <div className=' bg-white  rounded-t-4xl relative z-10'>
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

export default Bmw