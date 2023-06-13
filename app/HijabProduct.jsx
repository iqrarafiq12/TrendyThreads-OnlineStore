/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

const ProductItems = () => {
  return (
    <>
      {/* First Section Of Products */}
      <section>
        <div className="max-w-screen-xl px-2 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center py-4">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-6xl">
              Discover the Perfect Hijab Collection for Modest Fashionistas
            </h2>

            <p className="mb-8 text-lg font-normal text-black lg:text-xl sm:px-16 lg:px-48">
              Step into a world of fashion and modesty with our exclusive hijab
              collection. Designed for the modern Muslim woman, our collection
              showcases a wide range of stylish and elegant hijabs that blend
              seamlessly with your personal style. From vibrant prints to
              sophisticated solids, each hijab is meticulously crafted to
              provide comfort, versatility, and a touch of glamour to your
              everyday look. Explore our collection now and elevate your modest
              wardrobe with confidence and grace.
            </p>
          </header>

          <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
            <li>
              <Link
                href="/product/slug"
                className="block overflow-hidden group"
              >
                <img
                  src="/HijabsImages/JerseyHijab-01.webp"
                  class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="relative pt-3 bg-white">
                  <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    JERSEY HIJAB- FAYROUZ
                  </h3>

                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>

                    <span className="tracking-wider text-gray-900">$15.95</span>
                  </p>
                </div>
              </Link>
            </li>

            <li>
              <Link
                href="/product/slug"
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
              <Link
                href="/HijabCollection/Details"
                className="block overflow-hidden group"
              >
                <img
                  src="/HijabsImages/HijabChiffon-01.webp"
                  alt=""
                  class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="relative pt-3 bg-white">
                  <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    CHIFFON HIJAB - TAUPE
                  </h3>

                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>

                    <span className="tracking-wider text-gray-900">
                      {' '}
                      $18.95{' '}
                    </span>
                  </p>
                </div>
              </Link>
            </li>

            <li>
              <Link
                href="/product/slug"
                className="block overflow-hidden group"
              >
                <img
                  src="/HijabsImages/RoyanHijab-01.webp"
                  alt=""
                  class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="relative pt-3 bg-white">
                  <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    ANEMONE Chiffon
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
          </ul>
        </div>
      </section>
      {/* FIRST/END Section Of Products */}
    </>
  );
};

export default ProductItems;
