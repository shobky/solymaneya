import { useLocale, useTranslations } from "next-intl";

export default function SubHero() {
  const t = useTranslations("home");
  const locale = useLocale();
  return (
    <div className={` ${locale === 'ar' && 'text-right'} w-full  min-h-[60rem]  sm:min-h-[38rem] flex flex-col items-center justify-center gap-6 border-black h-[100vh] rounded-[70px]  p-7 `}>
        <p className="text-white p-4  text-lg bg-[--primary] w-32 text-center cursor-not-allowed box-border">{t('about')}</p>
      <h2 className="font-bold  text-xl md:text-3xl sm:text-center md:mx-[5vw]">
        {t("about1")}
      </h2>
      <h2 className="sm:text-center text-lg  md:text-Xl md:mx-[6vw]">{t("about2")}</h2>
    </div>
  );
}
