import image from "@/public/catalog/maintain.jpg";
import { useLocale, useTranslations } from "next-intl";
import React, { Suspense, lazy } from "react";
import Link from "next/link";
import Image from "next/image";
export default function MaintancePage() {
  const t = useTranslations("maintain");
  const locale = useLocale();

  return (
    <div
      className={`flex flex-col lg:flex-row justify-between align-top  lg:p-12 gap-2 min-h-screen
      ${locale === "ar" && "lg:flex lg:flex-row-reverse text-right"}
      `}
    >
      <div className=" w-full lg:w-[35%] h-fit p-5 ">
        <h1 className=" text-7xl font-medium">{t("title")}</h1>
        <ul
          className={` text-zinc-800 list-decimal leading-loose ml-6 mt-5 h-fit  mb-3 lg:mb-10
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
        </ul>
        <Link className="float-right lg:float-none" href={`/${locale}/turning_work`}>
          Next:{" "}
          <span className="underline text-[--primary] cursor-pointer">
            Turning work
          </span>
        </Link>
      </div>
      <div className="w-full lg:w-[60%] flex flex-wrap bg-black mt-12 lg:mt-0  ">
        <Image
          className="w-full aspect-square  object-cover  ease-in-out duration-150 "
          alt=""
          src={image}
          width="1000"
          height="1000"
        />
      </div>
    </div>
  );
}
