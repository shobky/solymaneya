import { useLocale, useTranslations } from "next-intl";
import React, { Suspense, lazy } from "react";
import Link from "next/link";
const Lathing = lazy(() => import("@/components/catalogImages/Lathing"));
export default function LathingPage() {
  const t = useTranslations("lathing");
  const locale = useLocale();

  return (
    <div
      className={`flex flex-col lg:flex-row justify-between align-top  lg:p-12 gap-2 min-h-screen
      ${locale === "ar" && "lg:flex lg:flex-row-reverse text-right"}
      `}
    >
      <div className=" w-full lg:w-[35%] h-fit p-5 ">
        <h1 className=" text-7xl font-medium">{t("title")}</h1>
        <br />
        <br />

        <Link
          className="float-right lg:float-none"
          href={`/${locale}/steam_boilers_and_heating_networks`}
        >
          Next:{" "}
          <span className="underline text-[--primary] cursor-pointer">
            Steam boilers and heating networks{" "}
          </span>
        </Link>
      </div>
      <Suspense>
        <Lathing />
      </Suspense>
    </div>
  );
}
