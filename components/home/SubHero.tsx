import { useTranslations } from "next-intl";

export default function SubHero() {
  const t = useTranslations("home");
  return (
    <div className="w-full min-h-[38rem] flex flex-col items-center justify-center gap-6 border-black h-[100vh] rounded-[70px]  p-7 ">
        <p className="text-white p-4 rounded-full text-lg bg-[--primary] w-32 text-center cursor-not-allowed box-border">{t('catLinkAbout')}</p>
      <h2 className="font-bold text-3xl text-center   mx-[5vw]">
        {t("about1")}
      </h2>
      <h2 className="text-center  text-Xl mx-[6vw]">{t("about2")}</h2>
    </div>
  );
}
