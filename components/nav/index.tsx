import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

export default function Nav({ isHeader }: { isHeader: boolean }) {
  const t = useTranslations("nav");
  const locale = useLocale();

  return (
    <div
      className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 p-5 sm:p-12 text-md lg:text-lg ${
        locale === "ar" && "justify-end float-right  w-full"
      }`}
      style={locale === "ar" ? { direction: "rtl" } : {}}
    >
      <ul className="w-fit font-semibold">
        <li className=" active:text-[--primary] sm:hover:text-[--primary] ">
          <Link href={`${locale}/`}>{t("home")}</Link>
        </li>
        <li className=" active:text-[--primary] sm:hover:text-[--primary] ">
          <Link href={`${locale}/#about`}>{t("about")}</Link>
        </li>
        <li className=" active:text-[--primary] sm:hover:text-[--primary] ">
          <Link href={`${locale}/#services`}>{t("services")}</Link>
        </li>
        {/* <li className=" active:text-[--primary] sm:hover:text-[--primary] ">{t("products")}</li> */}
        <li className=" active:text-[--primary] sm:hover:text-[--primary] ">
          <Link href={`${locale}/#contact`}>{t("contact")}</Link>
        </li>
      </ul>
      <ul className="w-fit">
        <li className=" active:text-[--primary] sm:hover:text-[--primary] ">
          <Link locale={locale} href={`/${locale}/electrical_work`}>
            {t("electricalWorks")}
          </Link>
        </li>
        <li className=" active:text-[--primary] sm:hover:text-[--primary] ">
          <Link locale={locale} href={`/${locale}/export`}>
            {t("export")}
          </Link>
        </li>
        <li className=" active:text-[--primary] sm:hover:text-[--primary] ">
          <Link locale={locale} href={`/${locale}/our_product`}>
            {t("ourProduct")}
          </Link>
        </li>
        <li className=" active:text-[--primary] sm:hover:text-[--primary] ">
          <Link locale={locale} href={`/${locale}/maintenance_contracts`}>
            {t("maintenanceContracts")}
          </Link>
        </li>
        {/* <li className=" active:text-[--primary] sm:hover:text-[--primary] ">
          <Link locale={locale} href={`/${locale}/previous_work`}>
            {t("previousWorks")}
          </Link>
        </li> */}
      </ul>

      <ul className="w-fit">
        <label className="text-medium opacity-50">{t("mechanicalWorks")}</label>
        <li className=" active:text-[--primary] sm:hover:text-[--primary] ">
          <Link locale={locale} href={`/${locale}/lathing_work`}>
            {t("turningWorks")}
          </Link>
        </li>
        <li className=" active:text-[--primary] sm:hover:text-[--primary] ">
          <Link
            locale={locale}
            href={`/${locale}/steam_boilers_and_heating_networks`}
          >
            {t("steamBoilersAndHeatingNetworks")}
          </Link>
        </li>
        <li className=" active:text-[--primary] sm:hover:text-[--primary] ">
          <Link locale={locale} href={`/${locale}/machinery_manufacturing`}>
            {t("machineryManufacturing")}
          </Link>
        </li>
      </ul>
      <ul className="w-fit">
        <label className="text-medium opacity-50">{t("supplyWorks")}</label>
        <li className=" active:text-[--primary] sm:hover:text-[--primary] ">
          <Link locale={locale} href={`/${locale}/mechanic_supplies`}>
            {t("mechanicSupplies")}
          </Link>
        </li>
        <li className=" active:text-[--primary] sm:hover:text-[--primary] ">
          <Link locale={locale} href={`/${locale}/electric_supplies`}>
            {t("electricSupplies")}
          </Link>
        </li>
      </ul>
      <ul className="w-fit">
        <label className="text-medium opacity-50">
          {t("contractingWorks")}
        </label>
        <li className=" active:text-[--primary] sm:hover:text-[--primary] ">
          <Link locale={locale} href={`/${locale}/mechanic_contracts`}>
            {t("mechanicContracts")}
          </Link>
        </li>
        <li className=" active:text-[--primary] sm:hover:text-[--primary] ">
          <Link locale={locale} href={`/${locale}/decorations_and_finishes`}>
            {t("decorationsAndFinishes")}
          </Link>
        </li>
      </ul>
    </div>
  );
}
