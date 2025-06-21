"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Timeline } from "@/components/ui/timeline";
import { useTranslations } from "next-intl";
import logo from "@../../../public/assets/package/content management/1.jpeg";
import logo2 from "@../../../public/assets/package/content management/2.jpeg";
import logo3 from "@../../../public/assets/package/content management/3.jpeg";
import logo4 from "@../../../public/assets/package/content management/7.jpeg";
import logo56 from "@../../../public/assets/package/content management/5.jpeg";
import logo65 from "@../../../public/assets/package/content management/6.jpeg";
import logo5 from "@../../../public/assets/package/social media/1.jpeg";
import logo6 from "@../../../public/assets/package/social media/2.jpeg";
import logo7 from "@../../../public/assets/package/social media/3.jpeg";
import logo71 from "@../../../public/assets/package/social media/4.jpeg";
import logo72 from "@../../../public/assets/package/social media/5.jpeg";
import logo73 from "@../../../public/assets/package/social media/6.jpeg";
import logo8 from "@../../../public/assets/Used equipment.png";
import logo9 from "@../../../public/assets/package/program/1.jpeg";
import logo10 from "@../../../public/assets/package/program/2.jpeg";
import logo11 from "@../../../public/assets/package/program/7.jpeg";
import logo12 from "@../../../public/assets/package/program/8.jpeg";
import logo13 from "@../../../public/assets/package/program/5.jpeg";
import logo14 from "@../../../public/assets/package/program/6.jpeg";
import logo15 from "@../../../public/assets/package/photograph/1.jpeg";
import logo16 from "@../../../public/assets/package/photograph/2.jpeg";
import logo17 from "@../../../public/assets/package/photograph/3.jpeg";
import logo18 from "@../../../public/assets/package/photograph/4.jpeg";
import logo19 from "@../../../public/assets/package/photograph/5.jpeg";
import logo20 from "@../../../public/assets/package/photograph/6.jpeg";

export function TimelineDemo() {
  const t = useTranslations("about");
  const [previewImage, setPreviewImage] = useState(null as string | null);

  const data = [
    {
      id: 1 ,
      title: t("yearTitle"),
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-bold  mb-8">
            {t("yearContent")}{" "}
          </p>

            <div className="grid grid-cols-2 gap-4">
            {[logo, logo2, logo3, logo4,logo56,logo65].map((imageSrc, index) => (
              <div key={index} className="relative">
              <Image
                src={imageSrc}
                alt={`startup template ${index + 1}`}
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                onClick={() => setPreviewImage(imageSrc?.src)}
              />
              </div>
            ))}
            {previewImage && (
              <div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              >
              <div className="relative">
                <Image
                onClick={() => setPreviewImage(null)}
                src={previewImage}
                alt="Preview"
                width={600}
                height={600}
                className="rounded-lg object-cover"
                />
                <button
                className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md"
                onClick={(e) => {
                  e.stopPropagation();
                  setPreviewImage(null);
                }}
                >
                ✕
                </button>
              </div>
              </div>
            )}
            </div>
        </div>
      ),
    },
    {
      id: 2 ,
      title: t("photographic"),
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-bold  mb-8">
            {t("photographicContent")}{" "}
          </p>
            <div className="grid grid-cols-2 gap-4">
            {[logo15, logo16, logo17, logo18,logo19,logo20].map((imageSrc, index) => (
              <div key={index} className="relative">
              <Image
                src={imageSrc}
                alt={`startup template ${index + 1}`}
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                onClick={() => setPreviewImage(imageSrc?.src)}
              />
              </div>
            ))}
            {previewImage && (
              <div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              >
              <div className="relative">
                <Image
                onClick={() => setPreviewImage(null)}
                src={previewImage}
                alt="Preview"
                width={600}
                height={600}
                className="rounded-lg object-cover"
                />
                <button
                className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md"
                onClick={(e) => {
                  e.stopPropagation();
                  setPreviewImage(null);
                }}
                >
                ✕
                </button>
              </div>
              </div>
            )}
            </div>
        </div>
      ),
    },
    {
      id : 3,
      title: t("earlyYearTitle"),
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-bold mb-6">
            {t("earlyYearsContent")}
          </p>

          <div className="grid grid-cols-2 gap-4">
          {[logo5, logo6, logo7, logo71,logo72,logo73].map((imageSrc, index) => (
              <div key={index} className="relative">
              <Image
                src={imageSrc}
                alt={`startup template ${index + 1}`}
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                onClick={() => setPreviewImage(imageSrc?.src)}
              />
              </div>
            ))}
          {previewImage && (
              <div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              >
              <div className="relative">
                <Image
                onClick={() => setPreviewImage(null)}
                src={previewImage}
                alt="Preview"
                width={600}
                height={600}
                className="rounded-lg object-cover"
                />
                <button
                className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md"
                onClick={(e) => {
                  e.stopPropagation();
                  setPreviewImage(null);
                }}
                >
                ✕
                </button>
              </div>
              </div>
            )}
          </div>
        </div>
      ),
    },
    {
      id : 4,
      title: t("Changelog"),
      content: (
        <div>
          {/* <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-sm font-bold mb-4">
            {t("morelastWork")}
          </p> */}
          <div className="mb-8">
            <div className="flex gap-2 font-bold items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ {t("morelastWorkcontent")}
            </div>
            <div className="flex gap-2 font-bold items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ {t("morelastWorkcontent2")}
            </div>
            <div className="flex gap-2 font-bold items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ {t("morelastWorkcontent3")}
            </div>
            <div className="flex gap-2 font-bold items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ {t("morelastWorkcontent4")}
            </div>
            <div className="flex gap-2 font-bold items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ {t("morelastWorkcontent5")}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
          {[logo9, logo10, logo11, logo12,logo13,logo14].map((imageSrc, index) => (
              <div key={index} className="relative">
              <Image
                src={imageSrc}
                alt={`startup template ${index + 1}`}
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                onClick={() => setPreviewImage(imageSrc?.src)}
              />
              </div>
            ))}
          {previewImage && (
              <div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              >
              <div className="relative">
                <Image
                onClick={() => setPreviewImage(null)}
                src={previewImage}
                alt="Preview"
                width={600}
                height={600}
                className="rounded-lg object-cover"
                />
                <button
                className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md"
                onClick={(e) => {
                  e.stopPropagation();
                  setPreviewImage(null);
                }}
                >
                ✕
                </button>
              </div>
              </div>
            )}
          </div>
        </div>
      ),
    },
    
  ];
  return (
    <div id="about" className="w-full">
      <Timeline data={data} />
    </div>
  );
}
