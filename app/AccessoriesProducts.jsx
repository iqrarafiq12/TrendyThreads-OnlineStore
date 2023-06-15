/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

const AccessoriesProducts = () => {
  return (
    <>
      {/* First Section Of Products */}
      <section>
        <div className="max-w-screen-xl px-2 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center py-4">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-6xl">
              Accessories
            </h2>

            <p className="mb-8 text-lg font-normal text-black lg:text-xl sm:px-16 lg:px-48">
              No hijab is complete without the perfect accessory. Whether it is
              a soft under scarf, or a no-snag magnet pin, our Accessory
              collection will help complete your perfect look.
            </p>
          </header>

          <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
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
              {/* Hijab Pins */}
              <Link
                href="/Magnets/HijabPins"
                className="block overflow-hidden group"
              >
                <img
                  src="/AccessoriesImages/HijabMagnets-01.webp"
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="relative pt-3 bg-white">
                  <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    MAGNET HIJABPINS
                  </h3>

                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>

                    <span className="tracking-wider text-gray-900">$5.00</span>
                  </p>
                </div>
              </Link>
            </li>

            <li>
              {/* UNDERCAPS */}
              <Link
                href="/UnderCaps/UndercapsForHijabis"
                className="block overflow-hidden group"
              >
                <img
                  src="/AccessoriesImages/UnderCap-01.webp"
                  alt=""
                  class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="relative pt-3 bg-white">
                  <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    UNDERCAPS
                  </h3>

                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>

                    <span className="tracking-wider text-gray-900">$18.95</span>
                  </p>
                </div>
              </Link>
            </li>

            <li>
              {/* NECK COVERS */}
              <Link
                href="/NeckCovers/Hijabis-NeckCovers"
                className="block overflow-hidden group"
              >
                <img
                  src="/AccessoriesImages/NeckCover-01.webp"
                  alt=""
                  class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="relative pt-3 bg-white">
                  <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    NECK COVERS
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
      </section>
      {/* FIRST/END Section Of Products */}
    </>
  );
};

export default AccessoriesProducts;
