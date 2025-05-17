"use client";
import Image from "next/image";
import React from "react";
import residential from "@../../../public/assets/background.png";
import { ArrowUpRight, PhoneCall } from "lucide-react";
import { useTranslations } from "next-intl";
import { FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";

const RealAdversting: React.FC = () => {
  const t = useTranslations("adversting");
  
  const handleWhatsappClick = (content: string) => {
    const message = encodeURIComponent(content);
    if (navigator.userAgent.includes("WhatsApp")) {
      // WhatsApp is installed
      window.open(`whatsapp://send?phone=966570591088&text=${message}`);
    } else {
      // WhatsApp is not installed, open WhatsApp Web
      window.open(
        `https://api.whatsapp.com/send/?phone=966570591088&text=${message}&type=phone_number&app_absent=0`,
        "_blank",
        "noopener noreferrer",
      );
    }
  };

  return (
    <div id="hoverEffect" className="relative  max-w-6xl mx-auto my-12 ">
      <div className="flex  flex-col md:flex-row items-center justify-between bg-[#F8F8F7] px-10 py-20 rounded-lg  ">
        <div className="">
          <h2 className="text-3xl max-w-md text-wrap font-black ">
            {t("adverstingContent")}
          </h2>
          <div className="flex gap-4">
            <Link
              href="tel:+9660570591088"
              className="flex button items-center mt-4 px-2 py-2 gap-2 font-bold bg-[#1C1241] text-white rounded hover:bg-blue-600"
            >
              {t("conectWithUs")}
              <PhoneCall className="animate-ping" size={16} />
            </Link>
            <button
              onClick={() => handleWhatsappClick(t("adverstingContent"))}
              type="button"
              className="flex items-center mt-4 px-2 text-center bg-[#1C1241] text-white rounded hover:bg-blue-600"
            >
              <FaWhatsapp size={18} />
            </button>
          </div>
        </div>
        <Image
          className="md:w-[50%] md:h-[100%]  rounded-lg md:absolute hidden md:block   end-0 "
          width={10}
          height={5}
          src={residential}
          alt="marketing"
          sizes="100%"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default RealAdversting;
