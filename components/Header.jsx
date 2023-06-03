import React, { useState, useEffect } from 'react';
import Wrapper from './Wrapper';
import Link from 'next/link';
import Menu from './Menu';

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState('translate-y-0');
  const [lastScrolly, setLastScrolly] = useState(0);

  // HEADER SYMENTIC TAG // in curly bracketbeacuse we use extra classes in that
  // cutom value added in square bracket
  return (
    <header
      className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-6 transition-transform duration-300 ${show}`}
    >
      <Wrapper>
        <Link href="/">
          <img
            src="https://thumbs.dreamstime.com/t/green-thread-needle-eye-sewing-tailoring-tools-kit-single-icon-black-style-vector-symbol-stock-illustration-web-90351967.jpg"
            className="w-[40px] md:w-[60px]"
          />
        </Link>
        <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} />
      </Wrapper>
    </header>
  );
};

export default Header;
