import React from 'react';
import Link from 'next/link';
import { BsChevronDown } from 'react-icons/bs';

// dummy data // server at the end
const data = [
  { id: 1, name: 'Home', url: '/' },
  { id: 2, name: 'About', url: '/About', href: '/pages/About' },
  { id: 3, name: 'Categories', subMenu: true },
  { id: 4, name: 'Contact', url: '/contact' },
];

const subMenuData = [
  {
    id: 1,
    name: 'Hijabs',
    doc_count: 200,
  },
  { id: 2, name: 'Accessories', doc_count: 15 },
  { id: 3, name: 'Clothings', doc_count: 64 },
];

const Menu = ({ showCatMenu, setShowCatMenu }) => {
  return (
    <ul className="hidden md:flex items-center gap-8 font-medium text-black">
      {/* LOOP WITH RETURN PENTHASES */}
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {/* Create If Condition */}
            {!!item?.subMenu ? (
              <li
                className="cursor-pointer flex items-center gap-2 relative"
                onMouseEnter={() => setShowCatMenu(true)}
                onMouseLeave={() => setShowCatMenu(false)}
              >
                {item.name}
                <BsChevronDown size={14} />

                {showCatMenu && (
                  <ul className="bg-white top-6 absolute left-0 min-w-[250px] px-1 py-1 text-black shadow-lg">
                    {subMenuData.map((submenu) => {
                      return (
                        // eslint-disable-next-line react/jsx-key
                        <Link
                          key={submenu.id}
                          href="/"
                          onClick={() => setShowCatMenu(false)}
                        >
                          <li className="h-12 flex justify-between items-center px-3 hover:bg-indigo-300/75 rounded-md">
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
              <li className="cursor-pointer">
                <Link href={item?.url}>{item.name}</Link>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default Menu;
