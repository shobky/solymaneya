import SwitchLink from "./SwitchLink";
import Menu from "./Menu";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import Nav from "../nav";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Header = () => {
  const t = useTranslations("home");
  const locale = useLocale();
  return (
    <header
      className={` flex justify-center items-center z-10 relative ${
        locale === "ar" && " flex-row-reverse text-right"
      } `}
    >
      <h1
        className={` p-5 w-[90%] border-y-0 h-20 flex items-center  ${
          locale === "ar"
            ? "  justify-end border border-l-black border-r-0 "
            : " h-20  border-r-black  border-l-0"
        }    `}
      >
        <Link className="mx-8 font-semibold text-2xl " href="/" locale={locale}>
          {t("logo")}
        </Link>
      </h1>
      <div className={`flex gap   ${locale === "ar" && " flex-row-reverse"} `}>
        <SwitchLink inter={inter} locale={locale} />

        <Menu locale={locale}>
          <Nav />
        </Menu>
      </div>
    </header>
  );
};
export default Header;
