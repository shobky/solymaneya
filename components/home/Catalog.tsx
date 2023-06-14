import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import electric from "@/public/products/electric.jpg";
import mechanical from "@/public/products/supplyMech.jpg";
import steemer from "@/public/products/steemer.jpg";
import staticPowder from "@/public/products/staticPowder.jpg";
import Image from "next/image";

export default function Catalog() {
  const t = useTranslations("catalog");
  const locale = useLocale();
  return (
    <div className=" mb-[35vh] min-h-[65rem] md:min-h-[38rem]  md:mx-8 flex flex-col items-center gap-6  ">
        <p className="text-white p-4  text-lg bg-[--primary] w-32 text-center cursor-not-allowed box-border">
        {t("services")}
      </p>
      <div className="flex  justify-center gap-3  flex-wrap">
        <div className=" w-[90%] md:w-[23%]  shadow-lg ">
          <Image
            width="600"
            height="900"
            src={mechanical}
            alt=""
            className=" object-cover w-full h-48 "
          />
          <div
            className={` border border-zinc-200   border-t-0 p-3 h-72 grid
          ${locale === "ar" && "text-right"}
          `}
          >
            <p className="font-semibold text-2xl mb-4">
              {t("supplyWorks.title")}
            </p>
            <p>{t("supplyWorks.description")}</p>
            <ul>
              <li className="text-[--primary]">{t("supplyWorks.items.0")}</li>
              <li className="text-[--primary]">{t("supplyWorks.items.1")}</li>
              <li className="text-[--primary]">{t("supplyWorks.items.2")}</li>
            </ul>
            <Link href="/">{t("link")}</Link>
          </div>
        </div>
        <div className=" w-[90%] md:w-[23%] shadow-lg ">
          <Image
            width="250"
            height="250"
            src={staticPowder}
            alt=""
            className=" object-cover w-full h-48 "
          />
          <div
            className={` border border-zinc-200   border-t-0 p-3 h-72 grid
          ${locale === "ar" && "text-right"}
          `}
          >
            <p className="font-semibold text-2xl mb-4">{t("export.title")}</p>
            <p>{t("export.description")}</p>
            <ul>
              <li className="text-[--primary]">{t("export.items.0")}</li>
              <li className="text-[--primary]">{t("export.items.1")}</li>
            </ul>
            <Link href="/">{t("link")}</Link>
          </div>
        </div>
        <div className=" w-[90%] md:w-[23%] shadow-lg ">
          <Image
            width="250"
            height="250"
            src={steemer}
            alt=""
            className=" object-cover w-full h-48 "
          />
          <div
            className={` border border-zinc-200   border-t-0 p-3 h-72 grid
          ${locale === "ar" && "text-right"}
          `}
          >
            <p className="font-semibold text-2xl mb-4">
              {t("mechanicalWork.title")}
            </p>
            <p>{t("mechanicalWork.description")}</p>
            <ul>
              <li className="text-[--primary]">
                {t("mechanicalWork.items.0")}
              </li>
              <li className="text-[--primary]">
                {t("mechanicalWork.items.1")}
              </li>
              <li className="text-[--primary]">
                {t("mechanicalWork.items.2")}
              </li>
            </ul>
            <Link href="/">{t("link")}</Link>
          </div>
        </div>
        <div className=" w-[90%] md:w-[23%] shadow-lg ">
          <Image
            width="250"
            height="250"
            src={electric}
            alt=""
            className=" object-cover w-full h-48 "
          />
          <div
            className={` border border-zinc-200   border-t-0 p-3 h-72 grid
          ${locale === "ar" && "text-right"}
          `}
          >
            <p className="font-semibold text-2xl mb-4">
              {t("electricalWork.title")}
            </p>
            <p>{t("electricalWork.description")}</p>
            <ul>
              <li className="text-[--primary]">
                {t("electricalWork.items.0")}
              </li>
              <li className="text-[--primary]">
                {t("electricalWork.items.1")}
              </li>
              <li className="text-[--primary]">
                {t("electricalWork.items.2")}
              </li>
            </ul>
            <Link href="/">{t("link")}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
