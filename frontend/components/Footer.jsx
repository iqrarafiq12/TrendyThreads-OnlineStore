import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <footer className="bg-black shadow h-auto w-full">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center ">
            ©copyright 2023 Iqra Rafiq . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <Link href="/About" className="mr-4 hover:underline md:mr-6 ">
                About
              </Link>
            </li>
            <li>
              <span
                href="/Privacypolicy"
                className="mr-4 hover:underline md:mr-6"
              >
                Privacy Policy
              </span>
            </li>
            <li>
              <span className="mr-4 hover:underline md:mr-6">Facts</span>
            </li>
            <li>
              <span className="hover:underline">Contact</span>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
