import styles from "./hero.module.css";

import Caroucel from "../swiper";
import { useLocale, useTranslations } from "next-intl";
import heroimg3 from "@/public/images/hero2.jpg";
import Image from "next/image";

export default async function Hero({
  caroucelSlides,
}: {
  caroucelSlides: { src: string; title: string }[];
}) {
  const t = useTranslations("home");
  const locale = useLocale();
  return (
    <div
      className={`${
        locale === "ar" && " flex-row-reverse "
      } flex justify-between w-full h-full  overflow-hidden relative `}
    >
      <div className=" bg-neutral-950 w-[60%] text-white p-12 box-border  h-full flex items-center  ">
        <div
          className={`-mt-2 flex flex-col gap-6  ${
            locale === "ar" ? "text-right items-end" : " items-start"
          } `}
        >
          <h1 className=" font-medium text-6xl w-[85%]  ">{t("heroText1")}</h1>
          <h2 className="text-3xl opacity-80 font-light">{t("heroText2")}</h2>
          <button className=" border  border-white px-2 py-4 text-2xl ease-out  duration-200 hover:bg-white hover:text-black">
            {t("btn")}
          </button>
        </div>
      </div>
      <div className="w-[40%] ">
        <Caroucel locale={locale} caroucelSlides={caroucelSlides} />
      </div>
    </div>
  );
}
