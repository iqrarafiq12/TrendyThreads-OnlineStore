/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import React, { useState, useEffect } from 'react';
import Wrapper from './Wrapper';
import Link from 'next/link';
import Menu from './Menu';
import MobileMenu from './MobileMenu';

import { IoMdHeartEmpty } from 'react-icons/io';
import { BsCart } from 'react-icons/bs';
import { BiMenuAltRight } from 'react-icons/bi';
import { VscChromeClose } from 'react-icons/vsc';

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState('translate-y-0');
  const [lastScrolly, setLastScrolly] = useState(0);

  // window scroll event listner + method
  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrolly && !mobileMenu) {
        setShow('-translate-y-[80px]');
      } else {
        setShow('shadow-sm');
      }
    } else {
      setShow('translate-y-0');
    }
    setLastScrolly(window.scrollY);
  };

  // window scroll event listner
  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [controlNavbar, lastScrolly]);

  // HEADER SYMENTIC TAG // in curly bracketbeacuse we use extra classes in that
  // cutom value added in square bracket
  return (
    <header
      className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-6 transition-transform duration-300 ${show}`}
    >
      <Wrapper className="h-[60px] flex justify-between items-center">
        <Link href="/">
          <img
            src="https://thumbs.dreamstime.com/t/green-thread-needle-eye-sewing-tailoring-tools-kit-single-icon-black-style-vector-symbol-stock-illustration-web-90351967.jpg"
            className="w-[40px] md:w-[60px]"
          />
        </Link>
        <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} />
        {mobileMenu && (
          <MobileMenu
            showCatMenu={showCatMenu}
            setShowCatMenu={setShowCatMenu}
            setMobileMenu={setMobileMenu}
          />
        )}
        <div className=" flex items-center gap-2 text-black">
          {/* Icon start */}

          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex  cursor-pointer relative justify-center items-center hover:bg-black/[0.05]">
            <IoMdHeartEmpty className="text-[22px] md:text-[26px]" />
            <div
              className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 top-1 left-5 md:left-7 text-white text-[10px]
            md:text-[12px] flex justify-center items-center px-[2px] md:[5px]"
            >
              5
            </div>
          </div>
          {/* Icon end */}

          {/* Icon start */}
          <Link href="/Cart">
            <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex  cursor-pointer relative justify-center items-center hover:bg-black/[0.05]">
              <BsCart className="text-[20px] md:text-[26px]" />
              <div
                className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 top-1 left-1 md:left-7 text-white text-[10px]
            md:text-[12px] flex justify-center items-center px-[2px] md:[5px]"
              >
                5
              </div>
            </div>
          </Link>
          {/* Icon end */}

          {/* mobile menu start */}
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden cursor-pointer relative justify-center items-center hover:bg-black/[0.05] -mr-2">
            {mobileMenu ? (
              <VscChromeClose
                className="text-[16px]"
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <BiMenuAltRight
                className="text-[20px]"
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>

          {/* mobile menu end */}
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
