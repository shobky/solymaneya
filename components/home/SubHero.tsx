import { useLocale, useTranslations } from "next-intl";

export default function SubHero() {
  const t = useTranslations("home");
  const locale = useLocale();
  return (
    <div
      className={` ${
        locale === "ar" && "text-right"
      } w-full  flex flex-col items-center justify-center gap-6 border-black p-5  rounded-[70px]    `}
    >
      <p className="text-white p-4  text-lg bg-[--primary] w-32 text-center cursor-not-allowed box-border">
        {t("about")}
      </p>
      <h2 className="font-bold w-full  text-xl md:text-3xl sm:text-center md:mx-[5vw]">
        {t("about1")}
      </h2>
      <h2 className="sm:text-center w-full text-lg  md:text-Xl md:mx-[6vw]">
        {t("about2")}
      </h2>
    </div>
  );
}
