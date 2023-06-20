/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
const Products = () => {
  return (
    <>
      <section>
        <div className="max-w-screen-xl px-2 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          <h2 class="text-center text-3xl text-black font-semibold tracking-wide uppercase">
            Products
          </h2>
          <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
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
              {/* COTTON HIJABS */}
              <Link
                href="/Cotton/CottonHijabs"
                className="block overflow-hidden group"
              >
                <img
                  src="/HijabsImages/CottonHijab-01.webp"
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="relative pt-3 bg-white">
                  <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    COTTON CRINKLE HIJAB- WORTHY
                  </h3>

                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>

                    <span className="tracking-wider text-gray-900">
                      {' '}
                      $17.95{' '}
                    </span>
                  </p>
                </div>
              </Link>
            </li>
            <li>
              {/* scrunchies */}
              <Link
                href="/Scrunchies/Volumize"
                className="block overflow-hidden group"
              >
                <img
                  src="/AccessoriesImages/Scrunchies-01.webp"
                  class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="relative pt-3 bg-white">
                  <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    SCRUNCHIE TAUPES
                  </h3>

                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>

                    <span className="tracking-wider text-gray-900">
                      $ 10.00
                    </span>
                  </p>
                </div>
              </Link>
            </li>
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
          </ul>
        </div>
      </section>
    </>
  );
};

export default Products;
