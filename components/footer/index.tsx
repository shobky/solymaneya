import { useLocale, useTranslations } from "next-intl";
import React from "react";
import Nav from "../nav";

export default function Footer() {
  const t = useTranslations("home");
  const locale = useLocale();
  return (
    <div
      className={`min-h-[34rem] ${
        locale === "ar" && " text-right"
      }  relative flex flex-col bg-zinc-900  w-full  text-white rounded-[60px] h-[60vh]`}
    >
      <p className="text-3xl p-12 font-medium">{t("logo")}</p>
      <Nav />
      <p className=" absolute bottom-5 left-0 w-full  text-center text-md font-light text-white">
        {" "}
        © Al-Solimania 2012-2023, All rights reserved.
      </p>
    </div>
  );
}
