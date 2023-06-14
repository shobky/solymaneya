import { useTranslations } from "next-intl";
import heroimg1 from "@/public/images/hero1.jpg";
import heroimg2 from "@/public/images/hero2.jpg";
import heroimg3 from "@/public/images/hero3.jpg";
import heroimg4 from "@/public/images/hero5.jpg";

import { Suspense } from "react";
import Hero from "@/components/home/Hero";
import SubHero from "@/components/home/SubHero";
import Catalog from "@/components/home/Catalog";

export default function Home() {
  const t = useTranslations("home");

  const caroucelSlides = [
    {
      src: heroimg1,
      title: t("catLinkServices"),
      slogan: "Unmatched Quality, Exceptional Craftsmanship, Reliable Results",
    },
    {
      src: heroimg2,
      title: t("catLinkAbout"),
      slogan: "Precision Engineering, Innovative Design, Unparalleled Service",
    },
    {
      src: heroimg3,
      title: t("catLinkProducts"),
      slogan: "Exceeding Expectations, Building Dreams, Delivering Excellence",
    },
    {
      src: heroimg4,
      title: t("catLinkServices"),
      slogan: "Unleashing Creativity, Transforming Spaces, Inspiring Vision",
    },
  ];

  return (
    <div>
      <Suspense fallback={<div className="fixed">Loading...</div>}>
        <div className="h-[calc(100vh-80px)] min-h-[38rem] ">
          {/* @ts-expect-error Server Component */}
          <Hero caroucelSlides={caroucelSlides} />
        </div>
        <SubHero />
        <Catalog />
      </Suspense>
    </div>
  );
}
