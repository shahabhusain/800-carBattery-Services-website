"use client"
import React, { useEffect, useState } from "react";
import logo from "@/public/logo.svg";
import logo1 from "@/public/logo1.svg";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const englishLinks = [
    { path: "/brands", name: "Brands" },
    { 
      path: "/services", 
      name: "Services",
      subpages: [
        { path: "/services/battery-replacement/", name: "Battery Replacement" },
        { path: "/services/battery-boosting/", name: "Battery Boosting" },
        { path: "/services/roadside-assistance/", name: "Roadside Assistance" },
        { 
          path: "/services/car-scanning/", 
          name: "Car Scanning and Diagnostics",
          subPages: [
            { name: "ECU Repair", path: "/services/ecu-repair/" },
            { name: "Car 360 Calibration", path: "/services/360-calibration/" },
            { name: "Car ABS Repair", path: "/services/abs-calibration/" },
            { name: "Car BCM Repair Services", path: "/services/bcm-repair/" },
            { name: "TCM Repair Service", path: "/services/tcm-repair/" },
            { name: "Car PCB Repair Service", path: "/services/pcb-repair/" },
            { name: "ADAS Sensor Repair and Recalibration", path: "/services/adas-sensor-calibration/" },
            { name: "Flood Car Repair", path: "/services/flooded-car-repair/" },
            { name: "Car Key Programming", path: "/services/car-key-programming/" },
            { name: "Automotive Tuning", path: "/services/automotive-tuning/" },
          ]
        },
        { 
          path: "/services/mechanical-repair/", 
          name: "Mechanical Repair Services",
          subPages: [
            { name: "Car Engine Repair", path: "/services/car-engine-repair/" },
            { name: "Car Oil Change", path: "/services/oil-change/" },
            { name: "Transmission and Gearbox Repair", path: "/services/transmission-repair/" },
            { name: "Car AC Repair", path: "/services/car-ac-repair/" },
            { name: "Minor Car Service", path: "/services/minor-car-service/" },
            { name: "Car Brake Repair", path: "/services/car-brake-repair/" },
            { name: "Car Suspension Repair", path: "/services/car-suspension-repair/" },
            { name: "Major Car Service", path: "/services/car-major-service/" },
            { name: "Steering Repair", path: "/services/steering-repair/" },
          ]
        },
        { 
          path: "/services/electrical-repair/", 
          name: "Car Electrical Repair",
          subPages: [
            { name: "Radiator Fan Replacement", path: "/services/radiator-fan-replacement/" },
            { name: "Xenon Headlight Adjustment", path: "/services/xenon-headlight-adjustment/" },
            { name: "Wiper Motor Replacement", path: "/services/wiper-motor-replacement/" },
            { name: "Door Window Regulator Replacement", path: "/services/door-window-regulator-replacement/" },
          ]
        },
      ] 
    },
    { path: "/about", name: "Our Company" },
    { path: "/offer", name: "Offers" },
    { path: "/shop", name: "Shop" },
  ];

  const arabicLinks = [
    { path: "/brands", name: "العلامات التجارية" },
    { 
      path: "/services", 
      name: "الخدمات",
      subpages: [
        { path: "/services/battery-replacement/", name: "استبدال البطارية" },
        { path: "/services/battery-boosting/", name: "تشغيل البطارية" },
        { path: "/services/roadside-assistance/", name: "المساعدة على الطريق" },
        { 
          path: "/services/car-scanning/", 
          name: "فحص وتشخيص السيارة",
          subPages: [
            { name: "إصلاح وحدة التحكم ECU", path: "/services/ecu-repair/" },
            { name: "معايرة كاميرات 360 للسيارة", path: "/services/360-calibration/" },
            { name: "إصلاح نظام ABS", path: "/services/abs-calibration/" },
            { name: "إصلاح وحدة BCM للسيارة", path: "/services/bcm-repair/" },
            { name: "إصلاح وحدة TCM", path: "/services/tcm-repair/" },
            { name: "إصلاح لوحة PCB للسيارة", path: "/services/pcb-repair/" },
            { name: "إصلاح ومعايرة حساسات ADAS", path: "/services/adas-sensor-calibration/" },
            { name: "إصلاح السيارات المتضررة من الفيضانات", path: "/services/flooded-car-repair/" },
            { name: "برمجة مفاتيح السيارة", path: "/services/car-key-programming/" },
            { name: "تعديل وبرمجة السيارات", path: "/services/automotive-tuning/" },
          ]
        },
        { 
          path: "/services/mechanical-repair/", 
          name: "خدمات الإصلاح الميكانيكي",
          subPages: [
            { name: "إصلاح محرك السيارة", path: "/services/car-engine-repair/" },
            { name: "تغيير زيت السيارة", path: "/services/oil-change/" },
            { name: "إصلاح ناقل الحركة وعلبة التروس", path: "/services/transmission-repair/" },
            { name: "إصلاح مكيف السيارة", path: "/services/car-ac-repair/" },
            { name: "خدمة سيارة بسيطة", path: "/services/minor-car-service/" },
            { name: "إصلاح فرامل السيارة", path: "/services/car-brake-repair/" },
            { name: "إصلاح نظام التعليق", path: "/services/car-suspension-repair/" },
            { name: "خدمة سيارة شاملة", path: "/services/car-major-service/" },
            { name: "إصلاح نظام التوجيه", path: "/services/steering-repair/" },
          ]
        },
        { 
          path: "/services/electrical-repair/", 
          name: "إصلاح كهرباء السيارة",
          subPages: [
            { name: "استبدال مروحة الرديتر", path: "/services/radiator-fan-replacement/" },
            { name: "تعديل مصابيح الزينون", path: "/services/xenon-headlight-adjustment/" },
            { name: "استبدال محرك المساحات", path: "/services/wiper-motor-replacement/" },
            { name: "استبدال منظم زجاج الباب", path: "/services/door-window-regulator-replacement/" },
          ]
        },
      ] 
    },
    { path: "/about", name: "عن الشركة" },
    { path: "/offer", name: "العروض" },
    { path: "/shop", name: "المتجر" },
  ];

  const locale = useLocale();
  const links = locale === "en" ? englishLinks : locale === "ar" ? arabicLinks : null;

  // Handle dropdown hover for desktop
  const handleMouseEnter = (index) => {
    setOpenDropdown(index);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  // Handle mobile dropdown toggle
  const toggleMobileDropdown = (index) => {
    if (openMobileDropdown === index) {
      setOpenMobileDropdown(null);
    } else {
      setOpenMobileDropdown(index);
    }
  };

  // Render desktop menu
  const renderDesktopMenu = () => (
    <ul className="hidden lg:flex items-center gap-x-6 xl:gap-x-12">
      {links.map((item, index) => (
        <li 
          key={index} 
          className="relative group"
          onMouseEnter={() => item.subpages && handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex items-center gap-1 text-[12px] font-[400] cursor-pointer">
            <Link href={item.path || "#"}>{item.name}</Link>
            {item.subpages && <FaChevronDown size={10} className="transition-transform group-hover:rotate-180" />}
          </div>
          
          {/* Dropdown menu */}
          {item.subpages && openDropdown === index && (
            <div className="absolute top-[10px] left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 z-50">
              {item.subpages.map((subItem, subIndex) => (
                <div key={subIndex} className="relative group/sub">
                  {subItem.subPages ? (
                    <>
                      <div className="px-4 py-2 hover:bg-gray-100 flex items-center justify-between">
                        <Link href={subItem.path} className="text-sm text-gray-800">
                          {subItem.name}
                        </Link>
                        <FaChevronDown size={10} className="rotate-[-90deg]" />
                      </div>
                      
                      {/* Nested dropdown */}
                      <div className="absolute left-full top-0 w-64 bg-white rounded-lg shadow-xl py-2 hidden group-hover/sub:block">
                        {subItem.subPages.map((nestedItem, nestedIndex) => (
                          <Link
                            key={nestedIndex}
                            href={nestedItem.path}
                            className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                          >
                            {nestedItem.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={subItem.path}
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                    >
                      {subItem.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          )}
        </li>
      ))}
    </ul>
  );

  // Render mobile menu
  const renderMobileMenu = () => (
    <div className={`lg:hidden fixed inset-0 bg-white z-50 transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="flex justify-end p-4">
        <button onClick={() => setMobileMenuOpen(false)} className="text-gray-800">
          <HiOutlineX size={30} />
        </button>
      </div>
      
      <div className="px-6 py-4 overflow-y-auto h-full">
        <ul className="space-y-4">
          {links.map((item, index) => (
            <li key={index} className="border-b border-gray-200 pb-3">
              {item.subpages ? (
                <>
                  <button
                    onClick={() => toggleMobileDropdown(index)}
                    className="flex items-center justify-between w-full text-left text-gray-800 font-medium"
                  >
                    <span>{item.name}</span>
                    <FaChevronDown className={`transition-transform ${openMobileDropdown === index ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {openMobileDropdown === index && (
                    <ul className="mt-3 ml-4 space-y-3">
                      {item.subpages.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          {subItem.subPages ? (
                            <>
                              <div className="font-medium text-gray-700 mb-2">{subItem.name}</div>
                              <ul className="ml-4 space-y-2">
                                {subItem.subPages.map((nestedItem, nestedIndex) => (
                                  <li key={nestedIndex}>
                                    <Link
                                      href={nestedItem.path}
                                      className="text-sm text-gray-600 hover:text-red-600"
                                      onClick={() => setMobileMenuOpen(false)}
                                    >
                                      {nestedItem.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </>
                          ) : (
                            <Link
                              href={subItem.path}
                              className="text-sm text-gray-600 hover:text-red-600"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  href={item.path}
                  className="block text-gray-800 font-medium hover:text-red-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
        
        <button className="w-full mt-6 bg-red-600 text-[14px] font-[400] py-3 px-5 uppercase rounded-full text-white flex items-center justify-center gap-x-2">
          {locale === "en" ? "Book an appointment" : locale === "ar" ? "حجز موعد" : null}
          <span className="rotate-[320deg]">
            <GoArrowRight size={25} />
          </span>
        </button>
      </div>
    </div>
  );

  return (
    <div
      className={`fixed z-[100] transition-all duration-300 w-full
      ${scrolled ? "top-0" : "top-0 lg:top-20"}`}
    >
      <div
        className={`py-3 px-4 mx-auto transition-all duration-300
        ${scrolled
            ? "bg-white text-black w-full shadow-lg"
            : "bg-[#ffffff29] backdrop-blur-md text-white w-full lg:w-[90%] xl:w-[80%] rounded-none lg:rounded-full"
        }`}
      >
        <div className={`flex items-center justify-between ${scrolled ? "lg:w-[90%] mx-auto" : ""}`}>
          {/* Logo */}
          <Link href="/">
            {scrolled ? (
              <Image className="w-[100px] md:w-[130px]" src={logo1} alt="logo" />
            ) : (
              <Image src={logo} alt="logo" className="w-[120px] md:w-auto" />
            )}
          </Link>

          {/* Desktop Menu */}
          {renderDesktopMenu()}

          {/* Desktop Book Button */}
          <button className="hidden lg:flex bg-red-600 text-[12px] xl:text-[14px] font-[400] py-2 xl:py-3 px-3 xl:px-5 uppercase rounded-full text-white items-center gap-x-2 whitespace-nowrap">
           {locale === "en" ? "Book an appointment" : locale === "ar" ? "حجز موعد" : null}
            <span className="rotate-[320deg] hidden xl:inline">
              <GoArrowRight size={25} />
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <HiOutlineMenu size={30} className={scrolled ? "text-black" : "text-white"} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {renderMobileMenu()}
    </div>
  );
};

export default Header;