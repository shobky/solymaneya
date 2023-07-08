import { useLocale, useTranslations } from "next-intl";
import React, { Suspense, lazy } from "react";
import Link from "next/link";
const Mecsup = lazy(() => import("@/components/catalogImages/Mecsup"));

export default function MecsupPage() {
  const t = useTranslations("mecsup");
  const locale = useLocale();

  return (
    <div
      className={`flex flex-col lg:flex-row justify-between align-top  lg:py-12 lg:px-6 gap-2 min-h-screen
      ${locale === "ar" && "lg:flex lg:flex-row-reverse text-right"}
      `}
    >
      <div className=" w-full lg:w-[35%] h-fit  px-5 ">
        <h1 className=" text-7xl font-medium">{t("title")}</h1>
        <ul
          className={` text-zinc-800 list-decimal ml-6 mt-5 h-fit   mb-3 
          ${locale === "ar" && "list-none"}
          `}
        >
          <li>{t("1")} </li>
          <li>{t("2")} </li>
          <li>{t("3")} </li>
          <li>{t("4")} </li>
          <li>{t("5")} </li>
          <li>{t("6")} </li>
          <li>{t("7")} </li>
          <li>{t("8")} </li>
          <li>{t("9")} </li>
          <li>{t("10")} </li>
          <li>{t("11")} </li>
          <li>{t("12")} </li>
        </ul>
        <div className="lg:mb-10 mt-5 grid gap-2">
          <p>- {t("p1")}</p>
          <p>- {t("p2")}</p>
        </div>

        <Link
          className="float-right lg:float-none"
          href={`/${locale}/electric_supplies`}
        >
          Next:{" "}
          <span className="underline text-[--primary] cursor-pointer">
            Electric supplies
          </span>
        </Link>
      </div>
      <Suspense>
        <Mecsup />
      </Suspense>
    </div>
  );
}
