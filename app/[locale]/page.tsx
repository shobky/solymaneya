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
      slogan: t("carouselSlides.0.slogan"),
    },
    {
      src: heroimg2,
      slogan: t("carouselSlides.1.slogan"),
    },
    {
      src: heroimg3,
      slogan: t("carouselSlides.2.slogan"),
    },
    {
      src: heroimg4,
      slogan: t("carouselSlides.3.slogan"),
    },
  ];

  return (
    <div>
      <div className="sm:max-h-[850px] sm:h-[calc(100vh-80px)] sm:min-h-[30rem]  ">
        {/* @ts-expect-error Server Component */}
        <Hero caroucelSlides={caroucelSlides} />
      </div>
      <div className="grid gap-32 py-32 ">
        <SubHero />
        <Catalog />
      </div>
    </div>
  );
}
