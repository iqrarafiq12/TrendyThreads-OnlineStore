import React from 'react';
import Link from 'next/link';
import { BsChevronDown } from 'react-icons/bs';

// dummy data // server at the end
const data = [
  { id: 1, name: 'Home', url: '/', href: '/pages/About' },
  { id: 2, name: 'About', url: '/about' },
  { id: 3, name: 'Categories', subMenu: true },
  { id: 4, name: 'Contact', url: '/contact' },
];

const subMenuData = [
  { id: 1, name: 'Hijabs', doc_count: 200 },
  { id: 2, name: 'Accessories', doc_count: 15 },
  { id: 3, name: 'Clothings', doc_count: 64 },
];

const MobileMenu = ({ showCatMenu, setShowCatMenu, setMobileMenu }) => {
  return (
    <ul className="flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[cal(100vh-50px)] bg-white border-t text-black">
      {/* LOOP WITH RETURN PENTHASES */}
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {/* Create If Condition */}
            {!!item?.subMenu ? (
              // work inn a toggled way
              <li
                className="cursor-pointer py-4 px-5 border-b flex-col relative"
                onClick={() => setShowCatMenu(!showCatMenu)}
              >
                <div className="flex justify-between items-center">
                  {item.name}
                  <BsChevronDown size={14} />
                </div>

                {showCatMenu && (
                  <ul className="bg-black/[0.05] -mx-5 mt-4 -mb-4">
                    {subMenuData.map((submenu) => {
                      return (
                        // eslint-disable-next-line react/jsx-key
                        <Link
                          key={submenu.id}
                          href="/"
                          onClick={() => {
                            setShowCatMenu(false);
                            setMobileMenu(false);
                          }}
                        >
                          <li className="py-4 px-8 border-t justify-between flex">
                            {submenu.name}
                            <span className="opacity-50 text-sm">78</span>
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                )}
              </li>
            ) : (
              <li className="py-4 px-5 border-b">
                <Link href={item?.url} onClick={() => setMobileMenu(false)}>
                  {item.name}
                </Link>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default MobileMenu;
