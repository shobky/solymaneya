import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("contact");
  return (
    <div  className="px-5  md:px-12 text-md lg:text-lg">
      <p>
        <span className="font-medium">{t("adressTitle")}: </span>
        <span className="font-light text-gray-100">{t("adress")}</span>
        
      </p>
      <p>
        <span className="font-medium">{t("fax")}: </span>
        <span className="font-light text-gray-100">0663337021</span>, {" "}
        <span className="font-light text-gray-100">01272199901</span>
      </p>
      <p>
        <span className="font-medium">{t("office")}: </span>
        <span className="font-light text-gray-100">01272199901</span>
      </p>
      <p>
        <span className="font-medium">{t("mobile")}: </span>
        <span className="font-light text-gray-100">0122890958</span>, {" "}
        <span className="font-light text-gray-100">01148088430</span>
      </p>
      <p>
        <span className="font-medium">{t("email")}: </span>
        <span className="font-light text-gray-100">contact@solymaneya.com</span>
      </p>
    </div>
  );
}
