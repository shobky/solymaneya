import { useLocale, useTranslations } from "next-intl";
import React, { Suspense, lazy } from "react";
import Link from "next/link";
const Meccon = lazy(() => import("@/components/catalogImages/Meccon"));
export default function MecconPage() {
  const t = useTranslations("contracts");
  const locale = useLocale();

  return (
    <div
      className={`flex flex-col lg:flex-row justify-between align-top lg:py-12 lg:px-6 gap-2 min-h-screen
      ${locale === "ar" && "lg:flex lg:flex-row-reverse text-right"}
      `}
    >
      <div className=" w-full lg:w-[35%] h-fit px-5 ">
        <h1 className=" text-7xl font-medium">{t("meccon")}</h1>
        <br />
        <br />

        <Link
          className="float-right lg:float-none"
          href={`/${locale}/decorations_and_finishes`}
        >
          Next:{" "}
          <span className="underline text-[--primary] cursor-pointer">
            Decorations and Finishes{" "}
          </span>
        </Link>
      </div>
      <Suspense>
        <Meccon />
      </Suspense>
    </div>
  );
}
