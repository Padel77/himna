import { Background } from "@/components/background/Background";
import CustomerService from "@/components/socialapp/customerService";
import { TimelineDemo } from "@/components/home/PropertyCard";
import { CardHoverEffectDemo } from "@/components/home/Properties";
import RealAdversting from "@/components/home/RealAdversting";
import { AppleCardsCarouselDemo } from "@/components/home/AppleCardsCarouselDemo";
import ServiceApply from "@/components/home/ServiceApply";
import Partners from "@/components/home/OurPartners";
export default function Home() {
  return (
    <>
      <CustomerService />
      <Background />
      <div className="container mx-auto py-6 z-0 bg-[#262626] text-white">
        <RealAdversting />
        <TimelineDemo />
        <CardHoverEffectDemo />
        <AppleCardsCarouselDemo />
        <ServiceApply />
        {/* <BeAmbassador /> */}
        <Partners />
        {/*<BeAmbassador />
         */}
      </div>
    </>
  );
}
