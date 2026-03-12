"use client";
import React, { useEffect, useState, useRef } from "react";
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
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // Clear any pending timeout
      if (scrollTimeout.current) {
        cancelAnimationFrame(scrollTimeout.current);
      }

      // Use requestAnimationFrame for smooth scroll handling
      scrollTimeout.current = requestAnimationFrame(() => {
        // Add a small buffer to prevent flickering near the threshold
        const scrollY = window.scrollY;
        const threshold = 50;
        
        if (scrollY > threshold && !scrolled) {
          setScrolled(true);
        } else if (scrollY <= threshold && scrolled) {
          setScrolled(false);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Prevent body scroll when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) {
        cancelAnimationFrame(scrollTimeout.current);
      }
      document.body.style.overflow = 'unset';
    };
  }, [scrolled, mobileMenuOpen]);

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

  // Handle dropdown hover for desktop with smooth delay
  let hoverTimeout;
  const handleMouseEnter = (index) => {
    clearTimeout(hoverTimeout);
    setOpenDropdown(index);
  };

  const handleMouseLeave = () => {
    hoverTimeout = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  // Handle mobile dropdown toggle
  const toggleMobileDropdown = (index) => {
    setOpenMobileDropdown(openMobileDropdown === index ? null : index);
  };

  // Render desktop menu
  const renderDesktopMenu = () => (
    <ul className="hidden lg:flex items-center gap-x-6 xl:gap-x-10">
      {links.map((item, index) => (
        <li 
          key={index} 
          className="relative"
          onMouseEnter={() => item.subpages && handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex items-center gap-1 text-[14px] font-[400] cursor-pointer group">
            <Link href={item.path || "#"} className="relative transition-colors duration-300 hover:text-red-600">
              {item.name}
            </Link>
            {item.subpages && (
              <FaChevronDown 
                size={10} 
                className={`transition-all duration-300 ${
                  openDropdown === index ? 'rotate-180 text-red-600' : 'group-hover:text-red-600'
                }`} 
              />
            )}
          </div>
          
          {/* Dropdown menu with smooth animation */}
          {item.subpages && (
            <div 
              className={`absolute top-[10px] left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 z-50 transition-all duration-200 ${
                openDropdown === index 
                  ? 'opacity-100 visible translate-y-0' 
                  : 'opacity-0 invisible -translate-y-2 pointer-events-none'
              }`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {item.subpages.map((subItem, subIndex) => (
                <div key={subIndex} className="relative group/sub">
                  {subItem.subPages ? (
                    <>
                      <div className="px-4 py-2 hover:bg-gray-50 flex items-center justify-between transition-colors duration-150">
                        <Link href={subItem.path} className="text-[16px] text-gray-800 hover:text-red-600 transition-colors">
                          {subItem.name}
                        </Link>
                        <FaChevronDown size={10} className="rotate-[-90deg] text-gray-400 group-hover/sub:text-red-600 transition-colors" />
                      </div>
                      
                      {/* Nested dropdown with smooth animation */}
                      <div className="absolute left-full top-0 w-64 bg-white rounded-lg shadow-xl py-2 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 translate-x-2 group-hover/sub:translate-x-0 pointer-events-none group-hover/sub:pointer-events-auto">
                        {subItem.subPages.map((nestedItem, nestedIndex) => (
                          <Link
                            key={nestedIndex}
                            href={nestedItem.path}
                            className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-50 hover:text-red-600 transition-colors duration-150"
                          >
                            {nestedItem.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={subItem.path}
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-50 hover:text-red-600 transition-colors duration-150"
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

  // Render mobile menu with smooth slide animation
  const renderMobileMenu = () => (
    <>
      {/* Backdrop with fade effect */}
      <div 
        className={`lg:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />
      
      {/* Menu panel with slide animation */}
      <div 
        className={`lg:hidden fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-50 shadow-xl transition-transform duration-300 ease-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4 border-b border-gray-100">
          <button 
            onClick={() => setMobileMenuOpen(false)} 
            className="text-gray-800 hover:text-red-600 transition-colors p-2 hover:bg-gray-100 rounded-full"
            aria-label="Close menu"
          >
            <HiOutlineX size={24} />
          </button>
        </div>
        
        <div className="px-6 py-4 overflow-y-auto h-[calc(100vh-80px)]">
          <ul className="space-y-1">
            {links.map((item, index) => (
              <li key={index} className="border-b border-gray-100 last:border-0">
                {item.subpages ? (
                  <>
                    <button
                      onClick={() => toggleMobileDropdown(index)}
                      className="flex items-center justify-between w-full text-left text-gray-800 font-medium py-4 hover:text-red-600 transition-colors group"
                      aria-expanded={openMobileDropdown === index}
                    >
                      <span>{item.name}</span>
                      <FaChevronDown 
                        className={`transition-all duration-300 ${
                          openMobileDropdown === index ? 'rotate-180 text-red-600' : ''
                        }`} 
                        size={14}
                      />
                    </button>
                    
                    <div 
                      className={`overflow-hidden transition-all duration-300 ${
                        openMobileDropdown === index ? 'max-h-[1000px] mb-4' : 'max-h-0'
                      }`}
                    >
                      <ul className="ml-4 space-y-2 border-l-2 border-gray-100 pl-4">
                        {item.subpages.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            {subItem.subPages ? (
                              <>
                                <div className="font-medium text-gray-700 py-2">{subItem.name}</div>
                                <ul className="ml-4 space-y-2 pb-2">
                                  {subItem.subPages.map((nestedItem, nestedIndex) => (
                                    <li key={nestedIndex}>
                                      <Link
                                        href={nestedItem.path}
                                        className="block text-sm text-gray-600 hover:text-red-600 py-1 transition-colors"
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
                                className="block text-sm text-gray-600 hover:text-red-600 py-2 transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.path}
                    className="block text-gray-800 font-medium py-4 hover:text-red-600 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          
          <button className="w-full mt-8 bg-red-600 text-[14px] font-[400] py-3 px-5 rounded-full text-white flex items-center justify-center gap-x-2 hover:bg-red-700 transition-colors group">
            {locale === "en" ? "Book an appointment" : locale === "ar" ? "حجز موعد" : null}
            <span className="group-hover:translate-x-1 transition-transform duration-200">
              <GoArrowRight size={20} />
            </span>
          </button>
        </div>
      </div>
    </>
  );

  return (
    <header
      className={`fixed z-[100] transition-all duration-700 ease-out w-full
      ${scrolled ? "top-0" : "top-0 lg:top-20"}`}
    >
      <div
        className={`py-3 px-4 mx-auto transition-all duration-700 ease-out will-change-transform
        ${scrolled
            ? "bg-white/95 backdrop-blur-md text-black w-full shadow-lg"
            : "bg-[#ffffff29] backdrop-blur-md text-white w-full lg:w-[90%] xl:w-[80%] rounded-none lg:rounded-full"
        }`}
        style={{
          transform: 'translateZ(0)', // Force hardware acceleration
        }}
      >
        <div className={`flex items-center justify-between transition-all duration-700 ${
          scrolled ? "lg:w-[90%] mx-auto" : ""
        }`}>
          {/* Logo with smooth transition */}
          <Link href="/" className="relative block">
            <div className="relative w-[120px] md:w-auto h-[40px] md:h-[50px]">
              <Image 
                src={logo}
                alt="logo"
                // className={`absolute top-0 left-0 transition-all duration-700 ${
                //   scrolled ? 'opacity-0' : 'opacity-100'
                // }`}
                // priority
                style={{ objectFit: 'contain' }}
              />
              <Image 
                src={logo1}
                alt="logo"
                className={`absolute top-0 left-0 transition-all duration-700 ${
                  scrolled ? 'opacity-100' : 'opacity-0'
                }`}
                // priority
                style={{ objectFit: 'contain' }}
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          {renderDesktopMenu()}

          {/* Desktop Book Button */}
          <button className="hidden lg:flex bg-red-600 text-[12px] xl:text-[14px] font-[400] py-2 xl:py-3 px-3 xl:px-5 rounded-full text-white items-center gap-x-2 whitespace-nowrap hover:bg-red-700 transition-all duration-300 hover:scale-105 active:scale-95 group">
            {locale === "en" ? "Book an appointment" : locale === "ar" ? "حجز موعد" : null}
            <span className="group-hover:translate-x-1 transition-transform duration-200 hidden xl:inline">
              <GoArrowRight size={20} />
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <HiOutlineMenu 
              size={24} 
              className={`transition-colors duration-300 ${
                scrolled ? "text-black" : "text-white"
              }`} 
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {renderMobileMenu()}
    </header>
  );
};

export default Header;