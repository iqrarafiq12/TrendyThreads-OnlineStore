import Wrapper from '@/components/Wrapper';
import React from 'react';
import DressesCollection from '@/app/page/Dresses';

import { IoMdHeartEmpty } from 'react-icons/io';

const Dresses = () => {
  return (
    <>
      <div className="w-full md:py-20">
        <Wrapper>
          <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
            {/*  div left one */}
            <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
              {/* Left Column Start */}
              <DressesCollection />
              {/* Left Column end */}
            </div>
            {/* right Column Start */}
            <div className="flex-[1] py-3">
              {/* PRODUCT TITLE */}
              <div className="text-[34px] font-semibold mb-2">
                EVERLY DRESS - LUNA
              </div>
              {/* PRODUCT SUBTITLES */}
              <div className="text-sm cursor-pointer mb-5">
                Indulge in the feminine beauty of the Everly dress. With its
                neutral beige and cream palette adorned with subtle florals,
                this dress exudes grace and charm. The ruched sleeves and side
                tie wrap design create a figure-flattering silhouette, perfect
                for any occasion. Experience luxurious comfort with its
                high-quality materials, allowing you to feel confident and
                stunning. Elevate your wardrobe with the Everly dress - a
                perfect blend of timeless elegance and feminine allure.
              </div>

              {/* PRODUCT PRICE */}
              <div className="text-lg font-semibold">Price: $53.3.00</div>
              <div className="text-md font-medium text-black/[0.5]">
                incl. of taxas
              </div>
              <div className="text-md font-medium text-black/[0.5] mb-20">
                {`(Also includes all applicable duties)`}
              </div>
              {/* PRODUCT COLORS + SIZES DETAILS */}
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
                    S
                  </div>
                  {/* SOME CLASSES CHANGES */}
                  <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-slate-100  opacity-50">
                    2XL
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

export default Dresses;
