import Wrapper from '@/components/Wrapper';
import React from 'react';
import JerseyHijab from '@/app/page/JerseyHijab';

import { IoMdHeartEmpty } from 'react-icons/io';

const Jersey = () => {
  return (
    <>
      <div className="w-full md:py-20">
        <Wrapper>
          <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
            {/*  div left one */}
            <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
              {/* Left Column Start */}
              <JerseyHijab />
              {/* Left Column end */}
            </div>
            {/* right Column Start */}
            <div className="flex-[1] py-3">
              {/* PRODUCT TITLE */}
              <div className="text-[34px] font-semibold mb-2">
                PREMIUM JERSEY
              </div>
              {/* PRODUCT SUBTITLES */}
              <div className="text-sm cursor-pointer mb-5">
                Our Premium Jersey wraps feature an incredibly high-quality,
                medium-weight cotton jersey fabric. This luxurious maxi sized
                wrap flows and drapes perfectly, making it the perfect hijab for
                every iconic style from a trendy turban up-style to a
                effortlessly chic over the shoulder drape. Completely opaque
                with a clean smooth stitch, this jersey wrap will change your
                world.
              </div>
              {/* PRODUCT DETAILS */}
              <div className="text-lg font-semibold mb-5 ">
                JerseyHijab Lycr&apos;a 70" x 35"
              </div>
              {/* PRODUCT PRICE */}
              <div className="text-lg font-semibold">Price: $18.95.00</div>
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
                    Color&apos;s
                  </div>
                </div>

                {/* HEADING END */}
                {/* SIZE START */}
                <div className="grid grid-cols-3 gap-2">
                  {/* PRODUCT FABRICS */}
                  <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                    WHITE
                  </div>
                  <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                    BLACK
                  </div>
                  {/* SOME CLASSES CHANGES */}
                  <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-slate-100  opacity-50">
                    PURPLE
                  </div>
                  {/* SOME CLASSES CHANGES */}
                  <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-slate-100  opacity-50">
                    BROWN
                  </div>
                  <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                    SKIN COLOR
                  </div>
                  <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                    GREEN
                  </div>
                  <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                    RED
                  </div>
                  <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                    PINK
                  </div>
                  <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                    BLUE
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

export default Jersey;
