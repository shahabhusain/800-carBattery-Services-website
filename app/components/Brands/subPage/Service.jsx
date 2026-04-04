"use client"

import Image from "next/image"
import React from "react"
const Service = ({ serviceContent, serviceImg }) => {
  return (
    <div className="md:w-[85%] w-[90%] mx-auto flex flex-col md:flex-row items-center md:py-20 pt-20 gap-12 justify-between">

      {/* Left Section */}
      <div className="md:w-1/2 flex flex-col gap-y-3">
        <p className="uppercase md:text-[16px] text-[12px] font-semibold">
          {serviceContent.subtitle}
        </p>

        <h1 className="lg:text-[40px] md:text-[35px] sm:text-[30px] text-[26px] font-semibold">
          {serviceContent.title}
        </h1>

        <Image
          className="rounded-2xl"
          src={serviceImg}
          alt="service"
        />
      </div>

      {/* Right Section */}
      <div className="flex flex-col h-[450px] overflow-y-auto gap-y-8 md:w-1/2">
        {serviceContent.services.map((item) => (
          <p
            key={item.id}
            className="text-[#00000099] md:text-[16px] text-[12px] font-normal"
          >
            {item.description}
          </p>
        ))}
      </div>

    </div>
  )
}

export default Service