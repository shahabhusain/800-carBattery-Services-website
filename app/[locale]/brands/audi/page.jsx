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
import serviceImg from "@/public/brands/audi/service.webp"
import serviceImg5 from "@/public/brands/audi/service1.webp"
import React from 'react'
import CarBrands from '@/app/components/Brands/subPage/CarBrands'
// car brands
  import carBrand1 from '@/public/brands/audi/1.webp'
   import carBrand2 from '@/public/brands/audi/2.webp'
    import carBrand3 from '@/public/brands/audi/3.webp'
     import carBrand4 from '@/public/brands/audi/4.webp'
      import carBrand5 from '@/public/brands/audi/5.webp'
       import carBrand6 from '@/public/brands/audi/6.webp'
       import carBrand7 from '@/public/brands/audi/7.webp'
   import carBrand8 from '@/public/brands/audi/8.webp'
    import carBrand9 from '@/public/brands/audi/9.webp'
     import carBrand10 from '@/public/brands/audi/10.webp'
      import carBrand11 from '@/public/brands/audi/11.webp'
// battery brands
import varta from "@/public/batteryBrands/varta.png";
import acdelco from "@/public/batteryBrands/ac.png";
import bosh from "@/public/batteryBrands/bosh.png";
import amron from "@/public/batteryBrands/amron.png";
import solite from "@/public/batteryBrands/solit.png";
import volcan from "@/public/batteryBrands/volcan.png";
import Battery from '@/app/components/Brands/subPage/Battery'
import WhyChooseUs from '@/app/components/Brands/subPage/WhyChooseUs'
import herobg from '@/public/brands/audi/bg.webp'


const Audi = () => {
  const locale = useLocale()
  const heroEnglishContent = {
    desc:"Top Car Brands – 24/7 Emergency Support & Anywhere!",
    title:{
      span1:"Audi Car Battery Replacement ",
      span2:"  & Advanced Repairs"
    },
    desc1:"You don’t need to panic if your Audi car battery is dead! 800BatteryPro provides you with 24/7 roadside assistance, under 30 minutes and certified battery replacement. ",
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
    title: "Audi Battery Replacement & Advanced Repair Services",
    services: [
      {
        id: 1,
        description:
          "Audi batteries require routine maintenance and under 15 minutes of on-site battery replacement services. We have a team of certified Audi specialist who only works on genuine battery brands with 18+ month warranty. Not only do we ensure the use of OEM standard spare parts through certified procedures and next-gen equipment. Our technicians only recommend branded car batteries, which ensure peak performance and are capable of handling the heat of Dubai."
      },
      {
        id: 2,
        description:
          "800BatteryPro only recommends genuine AGM for Audi vehicles, usually, which require AGM (Absorbent Glass Mat) batteries, which are capable of handling the complex electrical system of Audi even in the extreme heat of the UAE."
      },

         {
        id: 3,
        description:
          "800BatteryPro offers the following are the different types of Audi Battery: AGM Battery Audi: Audi owners who care about performance should get AGM (Absorbent Glass Mat) batteries. These batteries have high CCA and deep cycle features because of the new battery design. EFB (Enhanced Flooded Battery): The EFB (Enhanced Flooded Battery) is also a great choice for Audis with start-stop technology. Many Audi models can use EFB batteries because they are both cost-effective and high-performance. 800BatteryPro provides 24/7 roadside assistance with under 15 minutes of on-site Audi car battery delivery anywhere in Dubai. Our battery testing and delivery are free of cost, while our battery warranty lasts up to 18 months.  For premium Audi Battery replacement and advanced repairs, contact us now at +971528475675 or book a free car inspection appointment right now!"
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
    title: "Audi Service Centre in Dubai – Premium German Car Battery",
    services: [
      {
        id: 1,
        description:
          "800BatteryPro is one of the trusted and reliable Audi Service centres in Dubai and Abu Dhabi. With 50+ certified Audi Specialists, our technicians are committed to excellence in providing genuine battery replacement services as well as advance repair solutions. Rest assured that you are getting a high-quality product that will keep your Audi running at its best, whether you choose an AGM or an EFB battery. We have 5+ years of experience in delivering every Audi car job with 100 percent customer satisfaction. Rest assured that you will get the premium services. We provide high-quality AGM and EFB batteries that are made to work best in Audi cars. Our technicians only use branded batteries that last long and work well, so our customers may feel safe when they drive. "
      },
      {
        id: 2,
        description:
          "You can reserve your slot for your next Battery Checkup with the best Audi car experts in Dubai. Contact us at +971 528475675 for 24/7 emergency roadside assistance."
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
    title: "Premium 24/7 Customer Support",
    desc: "800BatteryPro provides you with 24/7 Audi Customer Support services, not just this we ensure you get all the right details which can resolve your issue asap."
  },
  {
    icons: <FaSitemap />,
    title: "Certified Audi Specialists",
    desc: "We have certified Audi Specialists who are all experienced dealing with every Audi Car battery job with precision and excellence. "
  },
  {
    icons: <FaSitemap />,
    title: "Genuine Audi Parts & Genuine Battery",
    desc: " Our Audi Technicians only recommend and use genuine Audi parts and genuine car battery for every job with 100 percent customer satisfaction."
  },
  {
   icons: <FaSitemap />,
    title: "Battery Under 15 Minutes & No Hidden Charges",
    desc: "We have one of the best 24/7 onsite battery replacement services in Dubai and Abu Dhabi."
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
            question: "Which one is the best Car Battery For Audi?",
            answer: "It depends on the year and type of your Audi, and what the optimum battery is. For newer Audis, AGM batteries from companies like Varta and Bosch are highly recommended because they work well with Audi's sophisticated features and are quite reliable."
        },
        {
            question: "What is the cost of an Audi Car Battery in Dubai? ",
            answer: "The price of an Audi car battery in Dubai varies on the model and kind of battery. However, if you want to get a battery at a price that is comparable with the market and has no hidden fees, you may call 800BatteryPro at +971528475675. We have the greatest prices on Audi batteries. The AGM/EFB type, which is suitable for newer Audis, usually costs between AED 600 and 1,500."
        },
        {
            question: " How Long does an Audi Car Battery Last in Dubai?",
            answer: "Audi batteries usually last between three and five years, although the exact amount of time they last can depend on the weather and how you drive. AGM batteries usually live longer than regular batteries. You should always have a routine checkup once a year or every 10,000 km to drive safely. When it's really hot, clean the battery terminals often and look for rust. Check your battery often to make sure it's still holding a charge, especially in the scorching summers in the UAE. People really like AGM batteries because they can handle adverse weather."
        },
        {
            question: "Any German Car Experts in Dubai?",
            answer: "Yes, 800BatteryPro is one of the trusted and has a certified team of German car experts in Dubai. We have a well-equipped service centre with the latest technology used for every German car repair job. We treat every car brand, including Mercedes, BMW, Porsche, and Audi, etc. Call us now for any German car battery replacement services at +971528475675. "
        },
        {
            question: " Do we provide German Car Battery Replacement in Abu Dhabi?",
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
            desc: "Audi Car Models We Serve",
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


         {
            desc: "AUDI S8",
            car: carBrand7,
        },

         {
            desc: "AUDI A6",
            car: carBrand8,
        },
         {
            desc: "AUDI S5",
            car: carBrand9,
        },
         {
            desc: "AUDI RS e-TRON GT",
            car: carBrand10,
        },
         {
            desc: "AUDI S3",
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

export default Audi