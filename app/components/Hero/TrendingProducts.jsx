"use client"

import React from "react";
import { GoArrowRight } from "react-icons/go";
import bat1 from "@/public/b1.png";
import bat2 from "@/public/b2.png";
import bat3 from "@/public/b3.png";
import Image from "next/image";
import { useLocale } from "next-intl";

const TrendingProducts = () => {

  const englishProduct = [
    {
      img: bat1,
      desc: "Dakota Lithium Batteries",
      price: "$89",
    },
    {
      img: bat2,
      desc: "TR TR-B1700 Performance Lightweight Battery",
      price: "$89",
    },
    {
      img: bat3,
      desc: "TR TR-B1700 Performance Lightweight Battery",
      price: "$89",
    },
  ];

  const arabicProduct = [
    {
      img: bat1,
      desc: "بطاريات داكوتا ليثيوم",
      price: "$89",
    },
    {
      img: bat2,
      desc: "بطارية TR TR-B1700 خفيفة الوزن عالية الأداء",
      price: "$89",
    },
    {
      img: bat3,
      desc: "بطارية TR TR-B1700 خفيفة الوزن عالية الأداء",
      price: "$89",
    },
  ];

  const locale = useLocale();

  const product =
    locale === "ar" ? arabicProduct : englishProduct;

  const text =
    locale === "ar"
      ? {
          shop: "تسوّق",
          title1: "منتجاتنا",
          title2: "الرائجة",
          viewAll: "عرض الكل",
        }
      : {
          shop: "Shop",
          title1: "Our Trending",
          title2: "Products",
          viewAll: "View All",
        };

  return (
    <div
      className={`w-[80%] mx-auto mt-20 ${
        locale === "ar" ? "text-right" : "text-left"
      }`}
    >
      {/* Header */}
      <div>
        <h1 className="text-[14px] md:text-[16px] font-bold text-gray-600 uppercase tracking-wider">
          {text.shop}
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-between mt-4 md:mt-6 gap-6 md:gap-0">
          <h1 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-semibold max-w-full md:max-w-[544px] leading-tight">
            <span>{text.title1}</span>{" "}
            <span className="text-[#C1121F]">{text.title2}</span>
          </h1>

          <button className="w-full sm:w-fit bg-red-600 py-2.5 sm:py-3 px-4 sm:px-5 uppercase rounded-full text-white flex items-center justify-center gap-x-2 hover:bg-red-700 transition-colors text-sm sm:text-base">
            {text.viewAll}

            <span
              className={`${
                locale === "ar" ? "rotate-180" : ""
              }`}
            >
              <GoArrowRight
                size={24}
                className="sm:w-[30px] sm:h-[30px]"
              />
            </span>
          </button>
        </div>
      </div>

      {/* Products */}
      <div className="flex flex-col md:flex-row items-center gap-4 mt-6">
        {product.map((item, index) => (
          <div
            key={index}
            className="w-[400px] h-[400px] flex flex-col gap-y-4 items-center justify-center border-[#00000019] p-5 border-[1px]"
          >
            <Image
              className="w-[250px] h-[250px] object-contain"
              src={item.img}
              alt="product"
            />

            <p className="text-center">{item.desc}</p>

            <h2 className="font-semibold">{item.price}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;