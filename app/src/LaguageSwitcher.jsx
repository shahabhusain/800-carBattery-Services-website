"use client"
import React, { useState } from "react";

const LanguageSwitcher = () => {
  const [selectLanguage, setSelectLanguage] = useState("en");

  const toggleLanguage = () => {
    setSelectLanguage(selectLanguage === "en" ? "ar" : "en");
  };

  return (
    <div className="text-white">
      <button
        onClick={toggleLanguage}
        className="bg-[#FFFFFF1A] px-4 py-2 text-[12px] rounded-full"
      >
        {selectLanguage === "en" ? (
          <>Ar <span>🇸🇦</span></>
        ) : (
          <>En <span>🇬🇧</span></>
        )}
      </button>
    </div>
  );
};

export default LanguageSwitcher;