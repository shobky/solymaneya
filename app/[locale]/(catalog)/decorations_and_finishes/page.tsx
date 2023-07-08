import { useLocale, useTranslations } from "next-intl";
import React, { Suspense, lazy } from "react";
const Finishs = lazy(() => import("@/components/catalogImages/Finishs"));
export default function FinishsPage() {
  const t = useTranslations("contracts");
  const locale = useLocale();

  return (
    <div
      className={`flex flex-col lg:flex-row justify-between align-top lg:py-12 lg:px-6 gap-2 min-h-screen
      ${locale === "ar" && "lg:flex lg:flex-row-reverse text-right"}
      `}
    >
      <div className=" w-full lg:w-[35%] h-fit px-5 ">
        <h1 className=" text-7xl font-medium">{t("finishs")}</h1>
      </div>
      <Suspense>
        <Finishs />
      </Suspense>
    </div>
  );
}
