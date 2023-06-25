import { useLocale, useTranslations } from "next-intl";
import React from "react";
import fs from "fs";
import Image from "next/image";
import Link from "next/link";

export default function ElectricalWorks() {
  const imagePaths: string[] = fs
    .readdirSync("./public/catalog")
    .map(fileName => `/catalog/${fileName}`);

  const t = useTranslations("electricalWorkPage");
  const locale = useLocale();
  console.log(t("items"));
  return (
    <div className="min-h-screen ">
      <div className={`flex flex-col lg:flex-row justify-between align-top p-5 lg:p-12 gap-2
      ${locale === 'ar' && "flex-row-reverse text-right"}
      `}>
        <div className=" w-full lg:w-[35%] h-fit ">
          <h1 className=" text-7xl font-medium">{t("title")}</h1>
          <ul className={` text-zinc-800 list-decimal leading-loose ml-6 mt-5 h-fit  mb-3 lg:mb-10
          ${locale === "ar" && "list-none"}
          `}>
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
          </ul>
          <Link className="float-right lg:float-none" href={`/${locale}/export`}>
            Next:{" "}
            <span className="underline text-[--primary] cursor-pointer">
              Export
            </span>
          </Link>
        </div>
        <div className="w-full lg:w-[60%] flex flex-wrap bg-black mt-12 lg:mt-0 ">
          {imagePaths.map((src: string, i: number) => (
            <Image
              className="w-1/2 lg:w-1/4 aspect-square  object-cover  ease-in-out duration-150 opacity-70 hover:opacity-100 "
              key={i}
              alt=""
              src={src}
              width="350"
              height="350"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
