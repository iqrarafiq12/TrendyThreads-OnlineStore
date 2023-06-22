import Wrapper from '@/components/Wrapper';
import React from 'react';
import JilbabCollection from '@/app/page/Jilbab';

import { IoMdHeartEmpty } from 'react-icons/io';

const Abaya = () => {
  return (
    <>
      <div className="w-full md:py-20">
        <Wrapper>
          <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
            {/*  div left one */}
            <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
              {/* Left Column Start */}
              <JilbabCollection />
              {/* Left Column end */}
            </div>
            {/* right Column Start */}
            <div className="flex-[1] py-3">
              {/* PRODUCT TITLE */}
              <div className="text-[34px] font-semibold mb-2">
                ABAYA 2023 COLLECTION
              </div>
              {/* PRODUCT SUBTITLES */}
              <div className="text-sm cursor-pointer mb-5">
                Introducing our exclusive Bohemian Abaya Collection! With a
                beautiful array of earthy tones and a versatile 3 piece set,
                this collection is perfect for the modern woman who wants to add
                a touch of elegance and femininity to her wardrobe. Each piece
                has been carefully crafted with intricate details and
                high-quality fabrics to ensure that you look and feel your best.
              </div>

              {/* PRODUCT PRICE */}
              <div className="text-lg font-semibold">Price: $55.952.20</div>
              <div className="text-md font-medium text-black/[0.5]">
                incl. of taxas
              </div>
              <div className="text-md font-medium text-black/[0.5] mb-20">
                {`(Also includes all applicable duties)`}
              </div>
              {/* PRODUCT COLORS + SIZES DETAILS */}

              {/* HEADING START */}
              <div className="mb-10">
                {/* HEADING START */}
                <div className="flex justify-between mb-2">
                  <div className="text-md font-semibold">Select </div>
                  <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                    Size&apos;s
                  </div>
                </div>

                {/* HEADING END */}
                {/* SIZE START */}
                <div className="grid grid-cols-3 gap-2">
                  {/* PRODUCT FABRICS */}
                  <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                    SM
                  </div>
                  <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                    M
                  </div>
                  <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                    2XL
                  </div>
                  {/* SOME CLASSES CHANGES */}
                  <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-slate-100  opacity-50">
                    S
                  </div>
                  <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                    XS
                  </div>
                  <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                    L
                  </div>
                </div>
                {/* SIZE END */}
                <div className="text-red-600 mt-1 text-sm">
                  Fabric & Colors required
                </div>
              </div>

              {/* PRODUC COLORS + SIZES DETAILS END */}
              {/* PRODUCTS CART BUTTON START */}
              <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
                Add To Cart
              </button>
              {/* WHISHLIST BUTTON START */}
              <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
                Whishlist
                <IoMdHeartEmpty size={20} />
              </button>
            </div>
            {/* WHISHLIST BUTTON End */}
            {/* PRODUCTS CART BUTTON END*/}
            {/* right Column end */}
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default Abaya;
