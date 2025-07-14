"use client";
import UseSearchParamsHook from "@/hooks/UseSearchParamsHook";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import { PhoneCall } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import logo12 from "@../../../public/assets/2.png";

interface TimelineEntry {
  id: number;
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const { pathname } = UseSearchParamsHook();
  const t = useTranslations("about");
  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 80%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full  bg-white dark:bg-neutral-950 font-sans "
      ref={containerRef}
    >
      <div className="md:flex items-center justify-around space-y-4 max-w-7xl mx-auto py-10 px-4 md:px-8 lg:px-10">

        {/* <div className="flex items-center py-2 gap-4">
          <div>
            <Link
              href="tel:+966575645308"
              className="  flex items-center justify-center gap-2 bg-gray-600 rounded-sm text-light font-bold p-2 "
            >
              {t("contactNumber")}
              <PhoneCall className="animate-ping" size={14} />
            </Link>
          </div>
          <div>
            <Link
              target="_blank"
              href="https://api.whatsapp.com/send/?phone=966575645308&text&type=phone_number&app_absent=0"
              className="flex items-center justify-center gap-2 bg-gray-600 rounded-sm text-light font-bold p-2"
            >
              {t("whatsapp")}
              <FaWhatsapp className="animate-ping" size={14} />
            </Link>{" "}
          </div>
        </div> */}
        <Image
          src={logo12}
          alt="cards template"
          width={300}
          height={250}
          className="rounded-lg md:w-auto w-full  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
        />
        <div className="flex flex-col center space-y-4">
          <h2 className="text-2xl md:text-5xl mb-4 text-black font-black dark:text-white max-w-4xl">
            {t("aboutUs")}
          </h2>
          <p className="text-neutral-900 dark:text-neutral-300 text-md md:text-base font-bold max-w-md">
            {t("aboutElmohandas")}
          </p>
        </div>
      </div>
      <div className="col-span-3 text-center mt-4  dark:text-white dark:bg-neutral-950 p-4 rounded-lg shadow-md">
        <h1 className="text-2xl  md:text-4xl font-black">
          {t("portfolio")}
        </h1>
      </div>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div
                className={`h-10 absolute ${pathname === "/ar"
                  ? "right-3 md:right-3"
                  : "left-3 md:left-3 "
                  }   w-10 rounded-full bg-white dark:bg-black flex items-center justify-center`}
              >
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3
                className={`hidden md:block text-xl ${pathname === "/ar" ? " md:pr-20" : "md:pl-20"
                  } md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 `}
              >
                {item.title}
              </h3>
            </div>

            <div
              className={`relative ${pathname === "/ar" ? "pr-20 pl-4 md:pr-4" : "pl-20 pr-4 md:pl-4"
                } w-full`}
            >
              <h3
                className={`md:hidden block text-2xl mb-4 ${pathname === "/ar" ? " text-right" : "text-left"
                  }  font-bold text-neutral-500 dark:text-neutral-500`}
              >
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className={`absolute ${pathname === "/ar" ? "md:right-8 right-8" : "md:left-8 left-8"
            }  top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] `}
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            dir="rtl"
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
