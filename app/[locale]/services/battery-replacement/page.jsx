import Service from '@/app/components/Brands/subPage/Service'
import Hero from '@/app/components/Brands/subPage/Hero'
import { FaSitemap } from 'react-icons/fa'
import Faq from '@/app/components/Brands/subPage/Faq'
import Footer from '@/app/components/Footer'
import Trusted from '@/app/components/Hero/Trusted'
import { useLocale } from 'next-intl'
import serviceImg from "@/public/services/service.jpg"
import React from 'react'
// battery brands
import varta from "@/public/batteryBrands/varta.png";
import acdelco from "@/public/batteryBrands/ac.png";
import bosh from "@/public/batteryBrands/bosh.png";
import amron from "@/public/batteryBrands/amron.png";
import solite from "@/public/batteryBrands/solit.png";
import volcan from "@/public/batteryBrands/volcan.png";
import Battery from '@/app/components/Brands/subPage/Battery'
import WhyChooseUs from '@/app/components/Brands/subPage/WhyChooseUs'
import herobg from '@/public/brands/serviceBanners/Breplacement.webp'
import CarBrands from '@/app/components/Hero/CarBrands'
import HowItWorks from '@/app/components/Hero/HowItWorks'


const BatteryReplacement = () => {
  const locale = useLocale()
  const heroEnglishContent = {
    desc:"Top Car Brands – 24/7 Emergency Support & Anywhere!",
    title:{
      span1:" Car Battery Replacement  ",
      span2:" Services in Dubai "
    },
    desc1:"Call 800BatteryPro at +971528475675 For Under 30 Minutes Car Battery Replacement Services In Dubai & Abu Dhabi. ",
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
    title: "Free Car Battery Delivery With Under 30 Minute Replacement in Dubai",
    services: [
      {
        id: 1,
        description:
          "Don’t let a dead battery derail your day. 800BatteryPro provides 24/7 rapid-response roadside assistance across Dubai and Abu Dhabi, bringing expert care directly to your location. Our certified technicians arrive fast to deliver free onsite Car testing, free delivery, and secure installation using only genuine, OEM-approved batteries. Get back on the road safely with the UAE’s most trusted experts, backed by a 100% customer satisfaction guarantee. With 5+ years of experience, we diagnose and resolve battery issues quickly and accurately. Thousands of satisfied customers trust our commitment to honesty and transparency. Rely on 800BatteryPro for prompt, dependable service—every time you need it."
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




   const englishContent = [
  {
    icons: <FaSitemap />,
    title: "Under 30-Minute Emergency",
    desc: "Get back on the road fast when a dead battery interrupts your schedule. 800BatteryPro dispatches a rapid-response unit immediately to your location in the UAE, arriving within 30 minutes fully equipped to test and replace your battery right on the spot."
  },
  {
    icons: <FaSitemap />,
    title: "24/7 On-Demand Battery Replacement ",
    desc: "Skip the tow truck and let us bring the auto shop directly to you. Our dedicated technicians deliver premium car battery replacement services to your home, office, or roadside location across Dubai and Abu Dhabi, completely on your schedule."
  },
  {
    icons: <FaSitemap />,
    title: "Certified Specialists for Premium Car Brands",
    desc: "Trust your vehicle to certified experts who understand the exact specifications of American, European, and Asian vehicles. We install only genuine, manufacturer-approved car batteries at highly competitive prices, ensuring maximum reliability while protecting your vehicle's warranty."
  },
  {
    icons: <FaSitemap />,
    title: "Advanced Auto Repair and Diagnostic Solutions",
    desc: "Secure comprehensive care for your vehicle well beyond a simple battery swap. Our state-of-the-art service centers in Dubai and Abu Dhabi handle complex electrical diagnostics, precision car programming, ECU, BMS, and complete mechanical repairs under one roof."
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
            question: "How long does a car battery last in Dubai?",
            answer: "Your car battery's lifetime depends upon the climate of the region, your car mileage, and how you drive. When it comes to driving in the UAE's extreme summer, your car battery may last between 2 and 3 years, while a quick battery checkup is required each year or after 10,000 KMs."
        },
        {
            question: " Can you come to my location to replace my car battery?",
            answer: "Yes, 800BatteryPro provides onsite 24/7 battery replacement in Dubai and Abu Dhabi. We offer free car battery delivering and testing services, along with 100 percent customer satisfaction for every battery job. You can call one of our technicians at +971528475675. "
        },
        {
            question: "How much does a car battery replacement cost in Dubai?",
            answer: "It depends upon your car brand and model; however, a typical car battery may cost you around AED 250 to AED 600. 800BatteryPro provides free car battery delivering and testing services. In addition, we only use branded car batteries such as Amaron, ACDelco, Varta, Bosch, and Exide. Call us for a quick battery checkup right now!"
        },

          {
            question: "How do I know if my car battery needs replacing?",
            answer: "If you notice any of the following signs of a weak battery, dim headlights, warning or Dashboard Lights Flickering, the car is not starting, and malfunctioning electronic system. Avoid such issues by booking a free car battery checkup with 800BatteryPro!"
        },

          {
            question: " What car battery brands do you sell?",
            answer: "800BatteryPro only stocks Amaron, ACDelco, Varta, Bosch, Exide, and Hankook-branded batteries. For premium cars, we also use AGM and Lithium Ion batteries for different models of BMW, Mercedes-Benz, Land Rover, Porsche, Bugatti, and others. Car batteries we deliver come with 18 months of extended warranty."
        },

            {
            question: "How much does a car battery cost in the UAE?",
            answer: "A car battery price literally depends upon your car brand and model you drive, but the range of the battery price starts from AED 250, which also depends upon the type of battery, too, if it's an AGM Battery, lead Acid Battery or a Lithium Ion Battery. "
        },

                {
            question: "Do you offer jumpstart service if my battery is flat?",
            answer: "Yes, 800BatteryPro provides you with under 30 minutes of onsite free battery boosting services anywhere in Dubai and Abu Dhabi. If your car does not start immediately or you face trouble using your dashboard options, then you should contact us at +971528475675 for immediate 24/7 roadside assistance. Our Battery replacement services start from AED 150."
        },

               {
            question: "What is an AGM battery, and does my car need one?",
            answer: "AGM stands for Absorbent Glass Mat — it's a reliable and premium battery type recommended for the latest generation of car models who has the start-stop technology. Some of the latest European cars (BMW 3/5 Series, Mercedes C/E Class, Audi A4/A6) use AGM batteries. If you install a standard flooded battery in an AGM car, it can damage the electrical system of the vehicle. Our technicians always use genuine car batteries recommended by the car manufacturers."
        },

            {
            question: "Can a bad alternator drain my new battery?",
            answer: "Yes, one of the most typical reasons a fresh battery dies quickly is a broken alternator. While you drive, the alternator charges your battery. If it doesn't work right, even a brand-new battery will die. With every battery replacement, we check your alternator and charging system to make sure they all work together."
        },


                    {
            question: "Do you replace batteries for hybrid or electric cars?",
            answer: "We change out the 12V auxiliary batteries in hybrid cars, including the Toyota Camry Hybrid, Lexus hybrid models, and others. This needs special tools and training for high-voltage traction batteries in electric vehicles. Please get in touch with us to find out whether we can help with your unique hybrid model."
        },


                    {
            question: "How do I know what size battery my car needs?",
            answer: "The size of the battery group that each car needs varies on the type, model, and engine. You can find this information in the owner's manual or on the label of your existing battery. Or give us a call with the specs of your car, and we'll tell you exactly what battery fits and how much it costs."
        },


                    {
            question: "Do you dispose of the old battery?",
            answer: "Yes, we will take your old car battery away and recycle it the right way for free. You should never toss away car batteries since they contain lead and acid. We get rid of things in a way that follows UAE environmental rules."
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
      const serviceContent = locale === "ar" ? serviceArabicContent : serviceEnglishContent
      const data = locale === "en" ? englishContent : locale === "ar" ? arabicContent : null
       const faqs = locale === "ar" ? arabicFaqs : englishFaqs


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
           <HowItWorks />
           <Service serviceContent={serviceContent} serviceImg={serviceImg} />
           <CarBrands />
           <Battery brands={batteryBrands} batteryText={batteryText} />
            <WhyChooseUs data={data} />
           <Trusted />
           <Faq faqs={faqs} />
           <Footer />
        </div>
    </div>
  )
}

export default BatteryReplacement