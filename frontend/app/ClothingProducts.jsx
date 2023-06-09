/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

const ClothingProducts = () => {
  return (
    <>
      {/* First Section Of Products */}

      <div className="max-w-screen-xl px-2 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <div className="text-center py-4">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-6xl">
            DRESSES EID 2k23 COLLECTION
          </h2>

          <p className="mb-8 text-lg font-normal text-black lg:text-xl sm:px-16 lg:px-48">
            Introducing our exclusive Bohemian Eid Collection! With a beautiful
            array of earthy tones and a versatile 3 piece set, this collection
            is perfect for the modern woman who wants to add a touch of elegance
            and femininity to her wardrobe. Each piece has been carefully
            crafted with intricate details and high-quality fabrics to ensure
            that you look and feel your best.
          </p>
        </div>

        <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
          <li>
            {/* DRESSES */}
            <Link
              href="/Dresses/Eid2k23"
              className="block overflow-hidden group"
            >
              <img
                src="/ClothingImages/DressImage-01.webp"
                class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div className="relative pt-3 bg-white">
                <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  DRESS - MOSS
                </h3>

                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>

                  <span className="tracking-wider text-gray-900">$15.95</span>
                </p>
              </div>
            </Link>
          </li>

          <li>
            {/* PANTS */}
            <Link
              href="/Pants/cOLLECTION"
              className="block overflow-hidden group"
            >
              <img
                src="/ClothingImages/Pants-01.webp"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div className="relative pt-3 bg-white">
                <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  LANA EVERYDAY PANT - POWDER
                </h3>

                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>

                  <span className="tracking-wider text-gray-900">$27.00</span>
                </p>
              </div>
            </Link>
          </li>

          <li>
            {/* BlazerCollection */}
            <Link
              href="/Waist/Blazer-Collection"
              className="block overflow-hidden group"
            >
              <img
                src="/ClothingImages/Blazers-01.webp"
                alt=""
                class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div className="relative pt-3 bg-white">
                <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  TIE WAIST BLAZER
                </h3>

                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>

                  <span className="tracking-wider text-gray-900">$18.95</span>
                </p>
              </div>
            </Link>
          </li>

          <li>
            {/* JILBAB */}
            <Link
              href="/Abaya/Jilbab-Collection"
              className="block overflow-hidden group"
            >
              <img
                src="/ClothingImages/Jilbab-01.webp"
                alt=""
                class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div className="relative pt-3 bg-white">
                <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  Jilbab
                </h3>

                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>

                  <span className="tracking-wider text-gray-900">$17.95</span>
                </p>
              </div>
            </Link>
          </li>
        </ul>
      </div>

      {/* FIRST/END Section Of Products */}
    </>
  );
};

export default ClothingProducts;
