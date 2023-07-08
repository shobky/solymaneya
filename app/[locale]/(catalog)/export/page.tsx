import { useLocale, useTranslations } from "next-intl";
import React, { Suspense, lazy } from "react";
import Link from "next/link";
const Export = lazy(() => import("@/components/catalogImages/Export"));

export default function ExportPage() {
  const t = useTranslations("exportPage");
  const locale = useLocale();

  return (
    <div
      className={`flex flex-col lg:flex-row justify-between align-top  lg:py-12 lg:px-6 gap-2 min-h-screen
      ${locale === "ar" && "lg:flex lg:flex-row-reverse text-right"}
      `}
    >
      <div className=" w-full lg:w-[35%] h-fit px-5 ">
        <h1 className=" text-7xl font-medium">{t("title")}</h1>
        <ul
          className={` text-zinc-800 list-decimal leading-loose ml-6 mt-5 h-fit  mb-3 lg:mb-10
          ${locale === "ar" && "list-none"}
          `}
        >
          <li>{t("1")} </li>
          <li>{t("2")} </li>
          <li>{t("3")} </li>
        </ul>
        <Link className="float-right lg:float-none" href={`/${locale}/our_product`}>
          Next:{" "}
          <span className="underline text-[--primary] cursor-pointer">
            Our Product
          </span>
        </Link>
      </div>
      <Suspense>
        <Export />
      </Suspense>
    </div>
  );
}
