"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import MenuIco from '/public/menu.svg';
import styles from './nav.module.css'
import Nav from '../nav';

export default function Menu({ locale, children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <button onClick={handleMenu} className={` px-9 border-y-0     h-20 
       ${locale === "ar" ? " border-l-0 border-r-black" : " border-r-0 border-l-black"}
       hover:bg-white hover:invert hover:border-0 `
      }>
        {isMenuOpen ? (
          <p className=''>X</p>
        ) : (
          <Image
            className=" min-w-[15px] w-[15px] "
            src={MenuIco}
            width="35"
            height="35"
            alt="menu"
          />
        )}
      </button>
      <nav className={isMenuOpen ? styles.container : styles.container__hiidden}>
        {children}
      </nav>

    </>
  );
}
