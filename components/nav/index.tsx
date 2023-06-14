import { useLocale, useTranslations } from "next-intl";
import React from "react";
export default function Nav() {
  const t = useTranslations("nav");
  const locale = useLocale();
  return (
    <div
      className={`${
        locale === "ar" && "flex-row-reverse"
      } flex flex-nowrap text-lg p-12 gap-6 justify-between`}
    >
      <ul className="font-medium text-3xl  ">
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
      <ul>
        <label className=" font-semibold opacity-60 ">{t("supplyWorks")}</label>
        <ul className=" mb-3">
          <li className="hover:text-[--primary] cursor-pointer">
            {t("mechanicSupplies")}
          </li>
          <li className="hover:text-[--primary] cursor-pointer">
            {t("electricSupplies")}
          </li>
        </ul>
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
      <ul>
        <li className="hover:text-[--primary] cursor-pointer">
          {t("electricalWorks")}
        </li>
        <li className="hover:text-[--primary] cursor-pointer">{t("export")}</li>
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
    </div>
  );
}
