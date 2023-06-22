/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

export const FeatureSection = () => {
  return (
    <>
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <div className="text-center p-2 py-3 mb-8">
          <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
            Modest Fashion Industry
          </h1>

          <p className="max-w-md mx-auto mt-4 text-gray-500">
            Highlight the emergence of the modest fashion industry, which
            includes hijab-friendly clothing lines and brands. Discuss the
            efforts made by modest fashion brands to offer stylish and diverse
            options for hijabi women, showcasing the fusion of fashion and
            cultural values.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
          <li>
            <Link href="/Hijabs/Collection" className="relative block group">
              <img
                src="/FS-01.png"
                alt=""
                className="object-cover w-full transition py-1 px-2  duration-500 aspect-square group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <p className="text-xl font-medium text-white">
                  Hijabs Collection
                </p>

                <button className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                  Shop Now
                </button>
              </div>
            </Link>
          </li>

          <li>
            <Link
              href="/accessories/collection"
              className="relative block group"
            >
              <img
                src="/FS-02.png"
                alt=""
                className="object-cover w-full py-1 px-2  transition duration-500 aspect-square group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white">
                  Hijab Inner Caps
                </h3>

                <button className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                  Shop Now
                </button>
              </div>
            </Link>
          </li>

          <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <Link href="/attire/Collection" className="relative block group">
              <img
                src="/FS-03.png"
                alt=""
                className="object-cover w-full transition py-1 px-2 duration-500 aspect-square group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <p className="text-xl font-medium text-white">
                  ATTIRE COLECTION
                </p>

                <button className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                  Shop Now
                </button>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default FeatureSection;
