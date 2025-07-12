import { HoverEffect } from "../ui/card-hover-effect";
import logo3 from "@../../../public/assets/إدارة المحتوى.jpg";
import logo4 from "@../../../public/assets/تصاميم الويب.jpg";
import logo5 from "@../../../public/assets/تصميم الهوية البصرية-1.jpg";
import logo6 from "@../../../public/assets/التسويق الرقمي.jpg";
import logo8 from "@../../../public/assets/إدارة الحملات الاعلانية.jpg";
import logo9 from "@../../../public/assets/تسويق عبر السوشيال.jpg";
import { getTranslations } from "next-intl/server";

export async function CardHoverEffectDemo() {
  const t = await getTranslations("services");
  const projects = [
    {
      id: 1,
      title: t("programming"),
      description: t("programmingContent"),
      link: t("programming"),
      image: logo4,
    },
    {
      id: 2,
      title: t("FashionModel"),
      description: t("FashionModelContent"),
      link: t("FashionModel"),
      image: logo3,
    },
    {
      id: 3,
      title: t("design"),
      description: t("designContent"),
      link: t("design"),
      image: logo5,
    },
    {
      id: 4,
      title: t("marketing"),
      description: t("marketingContent"),
      link: t("marketing"),
      image: logo6,
    },
    {
      id: 5,
      title: t("content"),
      description: t("contentContent"),
      link: t("content"),
      image: logo8,
    },
    {
      id: 6,
      title: t("socialMedia"),
      description: t("socialMediaContent"),
      link: t("socialMedia"),
      image: logo9,
    },
  ];

  return (
    <div id="services" className="max-w-5xl mx-auto px-4 z-0">
      <HoverEffect items={projects} />
    </div>
  );
}
