import React from "react";
import Image from "next/image";
import Link from "next/link";
import step3 from "@../../../public/assets/خدمات تسويقية.jpg";


const partners = [
  {
    id: 1,
    logo: step3,
    link: "https://partner1.com",
  },
  {
    id: 2,
    logo: step3,
    link: "https://partner2.com",
  },
  {
    id: 3,
    logo: step3,
    link: "https://partner3.com",
  },
  {
    id: 4,
    logo: step3,
    link: "https://partner4.com",
  },
]
const Partners: React.FC = () => {
  return (
    <div className="text-center w-full p-10 ">
      <p className="text-3xl font-black my-1">Our Partners</p>
      <div className="flex md:justify-between  justify-center flex-wrap md:flex-nowrap  items-center  ">
        {partners?.map((Item) => (
          <>
            <Link key={Item.id} href={Item.link}>
              <Image
                width={200}
                height={200}
                key={Item.id}
                src={Item.logo}
                alt={"logo"}
                className="partner-logo md:mb-2 mb-2"
              />
            </Link>
          </>
        ))}
      </div>
    </div>
  );
};

export default Partners;
