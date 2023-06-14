
'use client';
import Image from 'next/image';
import Link from 'next/link';
import langBtnIco from "/public/planet.svg";
import { usePathname, useSearchParams } from 'next/navigation';

const SwitchLink = ({ locale, inter }) => {
  const pathname = usePathname();
  const pathWithoutLocale = pathname.startsWith('/en') || pathname.startsWith('/ar')
    ? pathname.substring(3) // Remove the first three characters (/en or /ar)
    : pathname;


  const switchLocale = () => {
    let newLocale = '';

    if (!pathname.startsWith('/ar') && !pathname.startsWith('/en')) {
      newLocale = '/ar';
    } else if (pathname.startsWith('/ar')) {
      newLocale = '/en';
    } else if (pathname.startsWith('/en')) {
      newLocale = '/ar';
    }
    const newPathname = `${newLocale}${pathWithoutLocale}`;
    return newPathname;
  };

  return (
    <Link
      className={`border border-black border-y-0 px-7 flex flex-col justify-center border-opacity-75 h-20
      ${locale === "ar" ? " border-r-0 " : ""}
      hover:bg-white hover:invert hover:border-0 `
      }
      href={switchLocale()}>
      {pathname.startsWith('/ar') ? <span className={` ${inter.className} font-medium`}>English</span> : <span className='font-medium'>عربي</span>}
      <Image
        className="w-[15px] "
        src={langBtnIco}
        width="35"
        height="35"
        alt="language"
      />

    </Link>
  );
};

export default SwitchLink;