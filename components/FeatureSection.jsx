/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

const FeatureSection = () => {
  return (
    <>
      <section>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center p-2 py-3 mb-8">
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Modest Fashion Industry
            </h2>

            <p className="max-w-md mx-auto mt-4 text-gray-500">
              Highlight the emergence of the modest fashion industry, which
              includes hijab-friendly clothing lines and brands. Discuss the
              efforts made by modest fashion brands to offer stylish and diverse
              options for hijabi women, showcasing the fusion of fashion and
              cultural values.
            </p>
          </header>

          <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
            <li>
              <Link href="/Hijabs/slug" className="relative block group">
                <img
                  src="/FS-01.png"
                  alt=""
                  className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">
                    Hijabs Collection
                  </h3>

                  <Link
                    href="/Hijabs/slug"
                    className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                  >
                    Shop Now
                  </Link>
                </div>
              </Link>
            </li>

            <li>
              <Link href="/accessories/slug" className="relative block group">
                <img
                  src="/FS-02.png"
                  alt=""
                  class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">
                    Hijab Inner Caps
                  </h3>

                  <Link
                    href="/accessories/slug"
                    className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                  >
                    Shop Now
                  </Link>
                </div>
              </Link>
            </li>

            <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <Link href="/attire/slug" className="relative block group">
                <img
                  src="/FS-03.png"
                  alt=""
                  className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">
                    New Abaya Arrival
                  </h3>

                  <Link
                    href="/attire/slug"
                    className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                  >
                    Shop Now
                  </Link>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default FeatureSection;
