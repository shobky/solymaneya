import { useLocale, useTranslations } from "next-intl";
import React from "react";
export default function Nav({ isHeader }: { isHeader: boolean }) {
  const t = useTranslations("nav");
  const locale = useLocale();
  return (
    <div
      className={`${
        locale === "ar" && "flex-row-reverse text-right  justify-end"
      } ${isHeader && 'overflow-y-scroll sm:overflow-none'}  h-[100%] md:h-full  grid xl:flex flex-nowrap  lg:text-lg p-5 md:p-12 gap-6 md:justify-between `}
    >
      <ul className="font-medium text-2xl md:text-3xl  ">
        <li className="hover:text-[--primary] cursor-pointer">{t("home")}</li>
        <li className="hover:text-[--primary] cursor-pointer">{t("about")}</li>
        <li className="hover:text-[--primary] cursor-pointer">
          {t("services")}
        </li>
        <li className="hover:text-[--primary] cursor-pointer">
          {t("products")}
        </li>
        <li className="hover:text-[--primary] cursor-pointer">
          {t("contact")}
        </li>
      </ul>
      <div className=" flex  flex-col md:flex-row flex-nowrap  text-lg md:text-md lg:text-lg  gap-6 justify-between w-[calc(100vw-7rem)] xl:w-3/4">
        <ul>
          <li className="hover:text-[--primary] cursor-pointer">
            {t("electricalWorks")}
          </li>
          <li className="hover:text-[--primary] cursor-pointer">
            {t("export")}
          </li>
          <li className="hover:text-[--primary] cursor-pointer">
            {t("ourProduct")}
          </li>
          <li className="hover:text-[--primary] cursor-pointer">
            {t("maintenanceContracts")}
          </li>
          <li className="hover:text-[--primary] cursor-pointer">
            {t("previousWorks")}
          </li>
        </ul>
        <ul className="lg:flex  justify-between gap-6 xl:flex-col xl:gap-0 lg:w-[calc(50%-6rem)] md:h-0  xl:w-1/4">
          <div>
            <label className=" font-semibold opacity-60 ">
              {t("supplyWorks")}
            </label>
            <ul className=" mb-3">
              <li className="hover:text-[--primary] cursor-pointer">
                {t("mechanicSupplies")}
              </li>
              <li className="hover:text-[--primary] cursor-pointer">
                {t("electricSupplies")}
              </li>
            </ul>
          </div>
          <div>
            <label className=" font-semibold opacity-60 ">
              {t("contractingWorks")}
            </label>
            <ul>
              <li className="hover:text-[--primary] cursor-pointer">
                {t("mechanicContracts")}
              </li>
              <li className="hover:text-[--primary] cursor-pointer">
                {t("decorationsAndFinishes")}
              </li>
            </ul>
          </div>
        </ul>
        <ul>
          <label className=" font-semibold opacity-60 ">
            {t("mechanicalWorks")}
          </label>
          <ul>
            <li className="hover:text-[--primary] cursor-pointer">
              {t("turningWorks")}
            </li>
            <li className="hover:text-[--primary] cursor-pointer">
              {t("steamBoilersAndHeatingNetworks")}
            </li>
            <li className="hover:text-[--primary] cursor-pointer">
              {t("machineryManufacturing")}
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
}
