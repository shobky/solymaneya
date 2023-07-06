import "./globals.css";
import { Baloo_Bhaijaan_2, Roboto, Alexandria } from "next/font/google";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import Header from "@/components/header/Header";
import Footer from "@/components/footer";

const bloo = Baloo_Bhaijaan_2({
  weight: ["600", "400", "800", "700"],
  style: ["normal"],
  subsets: ["arabic"],
  display: "swap",
});
const roboto = Roboto({
  weight: ["100", "300", "400", "500", "900", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Solymaneya",
  description:
    "Al-Solymaneya Company for Contracting and Electrical Supplies is an Egyptian company that provides the highest levels of quality in the field of contracting and electrical supplies.",
  name: "google-site-verification",
  content: "k7ryO8XhvHl2PPvk3z3Z9OE5Z0XyM1CLrBNp5Gjvwqo",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string | undefined };
}) {
  const locale = useLocale();

  console.log(locale);
  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body
        className={` ${
          locale === "ar" ? `${bloo.className}` : roboto.className
        } max-w-[2000px] m-auto `}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
