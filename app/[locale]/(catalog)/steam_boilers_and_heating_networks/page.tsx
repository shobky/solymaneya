import { useLocale, useTranslations } from "next-intl";
import React, { Suspense, lazy } from "react";
import Link from "next/link";
const Boilers = lazy(() => import("@/components/catalogImages/Boilers"));
export default function BoilersPage() {
  const t = useTranslations("boilers");
  const locale = useLocale();

  return (
    <div
      className={`flex flex-col lg:flex-row justify-between align-top lg:py-12 lg:px-6 gap-2 min-h-screen
      ${locale === "ar" && "lg:flex lg:flex-row-reverse text-right"}
      `}
    >
      <div className=" w-full lg:w-[35%] h-fit px-5">
        <h1 className=" text-7xl font-medium">{t("title")}</h1>
        <div className="py-5 grid gap-2">
          <p>{t("1")}</p>
          <p>{t("1r")}</p>
        </div>

        <ul
          className={` text-zinc-800 list-decimal  ml-4 mt-5 h-fit  mb-3 lg:mb-10
          ${locale === "ar" && "list-none"}
          `}
        >
          <label className="relative -left-4 font-medium  mb-2">{t("2")} </label>
          <li>{t("3")} </li>
          <li>{t("4")} </li>
          <li>{t("5")} </li>
          <li>{t("6")} </li>
          <li>{t("7")} </li>
          <li>{t("8")} </li>
        </ul>

        <Link
          className="float-right lg:float-none"
          href={`/${locale}/machinery_manufacturing`}
        >
          Next:{" "}
          <span className="underline text-[--primary] cursor-pointer">
            Machinery manufacturing
          </span>
        </Link>
      </div>
      <Suspense>
        <Boilers />
      </Suspense>
    </div>
  );
}
