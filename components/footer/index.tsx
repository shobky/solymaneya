import { useLocale, useTranslations } from "next-intl";
import React from "react";
import Nav from "../nav";
import Contact from "../contact";

export default function Footer() {
  const t = useTranslations("home");
  const locale = useLocale();
  return (
    <div
      id="contact"
      className={`min-h-[28rem] ${
        locale === "ar" && " text-right"
      }  relative flex flex-col bg-neutral-950  w-full  text-white pb-24 xl:pb-0 `}
    >
      <p className="text-3xl px-5 py-10 md:p-12  font-medium">{t("logo")}</p>
      <Nav isHeader={false} />
      <Contact />
      <p className=" absolute bottom-5 left-0 w-full  text-center text-md font-light text-white mt-12">
        {" "}
        © Al-Solimania 2012-2023, All rights reserved.
      </p>
    </div>
  );
}
