import React from "react";
import Image, { StaticImageData } from "next/image";
import { useTranslations } from "next-intl";
import logo1 from "@../../../public/assets/package/parteners/Artboard 10@3x.png";
import logo2 from "@../../../public/assets/package/parteners/Artboard 11@3x.png";
import logo3 from "@../../../public/assets/package/parteners/Artboard 12@3x.png";
import logo4 from "@../../../public/assets/package/parteners/Artboard 13@3x.png";
import logo5 from "@../../../public/assets/package/parteners/Artboard 14@3x.png";
import logo6 from "@../../../public/assets/package/parteners/Artboard 1@3x.png";
import logo7 from "@../../../public/assets/package/parteners/Artboard 2@3x.png";
import logo8 from "@../../../public/assets/package/parteners/Artboard 3@3x.png";
import logo9 from "@../../../public/assets/package/parteners/Artboard 4@3x.png";
import logo10 from "@../../../public/assets/package/parteners/Artboard 5@3x.png";
import logo11 from "@../../../public/assets/package/parteners/Artboard 6@3x.png";
import logo12 from "@../../../public/assets/package/parteners/Artboard 7@3x.png";
import logo13 from "@../../../public/assets/package/parteners/Artboard 8@3x.png";
import logo14 from "@../../../public/assets/package/parteners/Artboard 9@3x.png";
import { CarouselPlugin } from "../helper/SliderComp";
// import SliderComp from "../helper/SliderComp";

export interface Item {
  id: number;
  image: string;
  description: string;
  name: string;
}

const partner: Item[] = [
  {
    id: 1,
    image: (logo1 as StaticImageData).src,
    description: "Partner 1",
    name: "Partner 1"
  },
  {
    id: 2,
    image: (logo2 as StaticImageData).src,
    description: "Partner 2",
    name: "Partner 2"
  },
  {
    id: 3,
    image: (logo3 as StaticImageData).src,
    description: "Partner 3",
    name: "Partner 3"
  },
  {
    id: 4,
    image: (logo4 as StaticImageData).src,
    description: "Partner 4",
    name: "Partner 4"
  },
  {
    id: 5,
    image: (logo5 as StaticImageData).src,
    description: "Partner 5",
    name: "Partner 5"
  },
  {
    id: 6,
    image: (logo6 as StaticImageData).src,
    description: "Partner 6",
    name: "Partner 6"
  }
  ,
  {
    id: 7,
    image: (logo7 as StaticImageData).src,
    description: "Partner 7",
    name: "Partner 7"
  },
  {
    id: 8,
    image: (logo8 as StaticImageData).src,
    description: "Partner 8",
    name: "Partner 8"
  },
  {
    id: 9,
    image: (logo9 as StaticImageData).src,
    description: "Partner 9",
    name: "Partner 9"
  },
  {
    id: 10,
    image: (logo10 as StaticImageData).src,
    description: "Partner 10",
    name: "Partner 10"
  },
  {
    id: 11,
    image: (logo11 as StaticImageData).src,
    description: "Partner 11",
    name: "Partner 11"
  },
  {
    id: 12,
    image: (logo12 as StaticImageData).src,
    description: "Partner 12",
    name: "Partner 12"
  },
  {
    id: 13,
    image: (logo13 as StaticImageData).src,
    description: "Partner 13",
    name: "Partner 13"
  },
  {
    id: 14,
    image: (logo14 as StaticImageData).src,
    description: "Partner 14",
    name: "Partner 14"
  }
]
const Partners: React.FC = () => {
  const t = useTranslations("ourpartener");
  return (
    <div className="text-center w-full p-10 mx-auto ">
      <p className="text-3xl font-black my-6">{t("ourparteners")}</p>
      <div dir={"ltr"} className="flex md:justify-between  justify-center  items-center  ">
        <CarouselPlugin partners={partner} />
      </div>
    </div>
  );
};

export default Partners;
