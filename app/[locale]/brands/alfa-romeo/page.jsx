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
import serviceImg from "@/public/brands/alfa/service.webp"
import serviceImg5 from "@/public/brands/alfa/service1.webp"
import React from 'react'
import CarBrands from '@/app/components/Brands/subPage/CarBrands'
// car brands
  import carBrand1 from '@/public/brands/alfa/1.webp'
   import carBrand2 from '@/public/brands/alfa/2.webp'
    import carBrand3 from '@/public/brands/alfa/3.webp'
     import carBrand4 from '@/public/brands/alfa/4.webp'
      import carBrand5 from '@/public/brands/alfa/5.webp'
       import carBrand6 from '@/public/brands/alfa/6.webp'
// battery brands
import varta from "@/public/batteryBrands/varta.png";
import acdelco from "@/public/batteryBrands/ac.png";
import bosh from "@/public/batteryBrands/bosh.png";
import amron from "@/public/batteryBrands/amron.png";
import solite from "@/public/batteryBrands/solit.png";
import volcan from "@/public/batteryBrands/volcan.png";
import Battery from '@/app/components/Brands/subPage/Battery'
import WhyChooseUs from '@/app/components/Brands/subPage/WhyChooseUs'
import herobg from '@/public/brands/alfa/bg.webp'


const AlfaRomeo = () => {
  const locale = useLocale()
  const heroEnglishContent = {
    desc:"Top Car Brands – 24/7 Emergency Support & Anywhere!",
    title:{
      span1:"Alfa Romeo Car Battery & ",
      span2:" Advanced Repair Experts "
    },
    desc1:"Talk To Our Expert at 800BatteryPro For Alfa Romeo Battery Replacement in Dubai or Advance Repair Services. ",
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
    title: "Alfa Romeo Specialists in Dubai – A to Z Car Battery Replacement Solutions",
    services: [
      {
        id: 1,
        description:
          "The Alfa Romeo Logo represents both luxury and Italian prestige, with its peak performance and comfortable ride. Almost every car brand finds it unable to cope with the challenging climate of the UAE, with heat rising to 55°C in summers, both battery services and car programming is high demand. Alfa Romeo batteries are long-lasting and highly durable, but they still it needs certified Alfa Romeo Specialist for treating any car battery replacements or advanced car repairs in Dubai. 800BatteryPro is one of the trusted Alfa Romeo service centres in the UAE, with 100+ technicians and a well-equipped garage. For Alfa Romeo Giulia, Giulietta, Tonale, Giulia QuadriFoglio, Milano, QuadriFoglio, Stelvio, 4c, 8c, we provide both AGM and Enhanced Flooded Battery in most model variants. The AGM Batteries we provide are genuine, long-lasting, and durable, supporting the electrical systems of Alfa Romeo. There is a need for having routine car check-ups once a year or maybe after 10,000 KMs, as it will help you in staying safe on the road and keeping your car in good shape. Do not ignore any unknown mechanical sounds or quirks in your car. Contact 800BatteryPro at +971528475675 for Alfa Romeo Battery replacements, car scanning, engine repairs, electrical repairs or other advanced repair services. Our certified technicians offer on-site services within 15 minutes across the UAE."
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
    title: "Trusted Alfa Romeo Service Center in Dubai & Abu Dhabi",
    services: [
      {
        id: 1,
        description:
          "800BatteryPro has a team of certified Alfa Romeo technicians who know about every technical detail related to its car battery, advanced repair, and maintenance services. Considered the go-to premium service centre in the UAE, we serve our customers with top car care solutions with transparent pricing. Our technicians only use Alfa Romeo genuine and OEM standard parts, which are sourced from branded manufacturers only. We don’t stop there as our car repair services in Dubai extend to 24/7 Roadside assistance and onsite battery boosting within 15 minutes across the Emirates. Fill out the form to book an appointment with one of our Alfa Romeo specialists in Dubai."
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
    desc: "800BatteryPro provides you with 24/7 Audi Customer Support services, not just this we ensure you get all the right details which can resolve your issue asap."
  },
  {
    img: serviceImg2,
    title: "Certified Audi Specialists",
    desc: "We have certified Audi Specialists who are all experienced dealing with every Audi Car battery job with precision and excellence. "
  },
  {
    img: serviceImg3,
    title: "Genuine Audi Parts & Genuine Battery",
    desc: " Our Audi Technicians only recommend and use genuine Audi parts and genuine car battery for every job with 100 percent customer satisfaction."
  },
  {
    img: serviceImg4,
    title: "Battery Under 15 Minutes & No Hidden Charges",
    desc: "We have one of the best 24/7 onsite battery replacement services in Dubai and Abu Dhabi."
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
    desc: "For all Alfa Romeo car battery replacement and advance repairs we offer rapid and premium customer support. "
  },
  {
    icons: <FaSitemap />,
    title: "Certified Alfa Romeo Specialists",
    desc: "800BatteryPro has a team of 50+ certified Alfa Romeo Specialists who are experienced in working on all sorts of car battery and advanced repair services. "
  },
  {
    icons: <FaSitemap />,
    title: "Using Genuine Alfa Romeo Parts",
    desc: "Our technicians only use OEM-approved parts and genuine car batteries for all replacement services. "
  },
  {
   icons: <FaSitemap />,
    title: "Car Battery Under 15 Minutes",
    desc: " if you are stranded anywhere in Dubai and Abu Dhabi we offer instant 24/7 roadside assistance with free battery testing and delivery services on market competitive pricing."
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
            question: "Are Alfa Romeo vehicles expensive to maintain?",
            answer: "Alfa Romeo vehicles are known for their high performance, but they are relatively affordable to maintain compared to other luxury brands. In Dubai, the average car maintenance cost is approximately AED 2,394 per year. However, Alfa Romeo owners typically spend around AED 1,696 annually on maintenance, making it a cost-effective choice for luxury car enthusiasts."
        },
        {
            question: "How often should I change the oil in my Alfa Romeo?",
            answer: "Regular oil changes are essential for maintaining the performance and longevity of your Alfa Romeo. Oil lubricates the engine and removes contaminants that can accumulate over time. At 800BatteryPro, we recommend changing your oil every 7,500 miles or as per the manufacturer’s guidelines. Visit our service centres in Dubai or Abu Dhabi for professional oil change services to keep your Alfa Romeo in peak condition."
        },
        {
            question: "How can I tell if my car battery is weak?",
            answer: "Signs of a weak car battery in your Alfa Romeo includes, Slow engine cranking during startup, Dimming or flickering interior lights, Engine failing to start, Swelling or leaking battery casing.If you notice any of these issues, it’s crucial to have your battery checked immediately. At 800BatteryPro, we offer regular battery testing and replacement services to ensure you’re never stranded due to a dead battery. Contact us for 24/7 roadside assistance at +971 528475675."
        },
        {
            question: "What factors affect the fuel consumption of my Alfa Romeo?",
            answer: "Several factors can influence your Alfa Romeo’s fuel efficiency, including, Vehicle weight and aerodynamics, Tyre type, size, pressure, and condition, Transmission type and gear ratios, Driving habits (e.g., aggressive acceleration, excessive speeds), Vehicle age and condition, Fuel quality, and Weather and road conditionsBy addressing these factors, you can improve fuel efficiency and reduce overall fuel costs."
        },
        {
            question: "How do I fix an overheating car?",
            answer: " If your Alfa Romeo is overheating, it’s essential to address the issue promptly to avoid engine damage. Common causes of overheating includes, low coolant levels, malfunctioning radiator or thermostat, faulty water pump, and flogged radiator hoses. To resolve the issue, refill the coolant, replace faulty components, or flush the cooling system. For professional assistance, visit 800BatteryPro service centres in Dubai or Abu Dhabi."
        },


          {
            question: "How do I know if I need new brakes for my Alfa Romeo?",
            answer: " Signs that your Alfa Romeo may need new brakes includes, Squealing or grinding noises when braking, A soft or spongy brake pedal, Brake warning light on the dashboard. Regular brake inspections are crucial to ensure safety and prevent more severe issues. At 800BatteryPro, our certified technicians provide comprehensive brake services for Alfa Romeo vehicles."
        },


          {
            question: "What are common AC system issues in Alfa Romeo cars?",
            answer: "Common issues with Alfa Romeo AC systems includes,  Low refrigerant levels, leading to ineffective cooling, Faulty compressors causing warm air or AC failure, Clogged air filters reduce airflow, Defective condensers affecting cooling efficiency. Given Dubai’s harsh climate, a functional AC system is essential. If you experience any of these issues, visit 800BatteryPro for expert AC diagnostics and repairs."
        },


          {
            question: "Do you provide car battery replacement for Alfa Romeo?",
            answer: "Yes, 800BatteryPro offers certified car battery replacement services for Alfa Romeo vehicles. We use genuine OEM-standard parts and branded batteries for all Italian car brands, including Ferrari, Lamborghini, Pagani, Fiat, and Maserati. For 24/7 roadside assistance, contact us at +971 528475675."
        },


          {
            question: "Do you use OEM parts for repairing Italian car brands?",
            answer: "Absolutely. At 800BatteryPro, we exclusively use OEM-standard parts for all repairs on Italian car brands, including Alfa Romeo, Lamborghini, Fiat, Ferrari, Pagani, and Maserati. Customers can inspect the parts before installation to ensure quality and authenticity."
        },


          {
            question: "Who are the best Italian car brand experts in Dubai?",
            answer: " 800BatteryPro is recognised as one of the leading service providers for Italian car brands in Dubai and Abu Dhabi. With over 50 certified Italian car specialists and state-of-the-art service centres, we cater to almost every exotic and premium car brand in the UAE."
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
            desc: "Alfa Romeo Car Models We Serve",
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
            desc: "AUDI R8",
            car: carBrand1,
        },
        {
            desc: "AUDI TT",
            car: carBrand2,
        },
        {
            desc: "AUDI Q3",
            car: carBrand3,
        },
        {
            desc: "AUDI SQ5",
            car: carBrand4,
        },
        {
            desc: "AUDI SQ7",
            car: carBrand5,
        },
        {
            desc: "AUDI SQ8",
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

export default AlfaRomeo