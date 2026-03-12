"use client"
import React from "react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

const LanguageSwitcher = ({scrolled}) => {
  const locale = useLocale();
  const router = useRouter();

  const toggleLanguage = () => {
    const newLocale = locale === "en" ? "ar" : "en";
    
    // Get the current path
    const currentPath = window.location.pathname;
    
    // Replace the locale in the path
    // This assumes your URLs are structured like /en/... or /ar/...
    const newPath = currentPath.replace(`/${locale}`, `/${newLocale}`);
    
    // Navigate to the new path
    router.push(newPath);
  };

  return (
    <div className="text-white">
      <button
        onClick={toggleLanguage}
        className={`${scrolled ? "bg-[#000000a9] py-3 px-5" : "bg-[#FFFFFF1A]  px-4 py-2 "} text-[12px] rounded-full hover:bg-[#FFFFFF30] transition-colors flex items-center gap-2`}
      >
        {locale === "en" ? (
          <>
 
                <span>العربية</span>
            <span>🇸🇦</span>
          </>
        ) : (
          <>
                           <span>English</span>
            <span>🇬🇧</span>
          </>
        )}
      </button>
    </div>
  );
};

export default LanguageSwitcher;