import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Image from 'next/image';
const CartItems = () => {
  return (
    <>
      <div className="flex py-5 gap-3 md:gap-5 border-b">
        {/* IMAGE START */}
        <div className="shrink-0 aspect-square w-[50px] md:w[120px]">
          <img src="/HijabsImages/CottonHijab-02.webp" />
        </div>
        {/* IMAGE END */}
        {/* DIV FOR PRODUCT TITLE */}
        <div className="w-full flex flex-col">
          <div className="flex flex-col md:flex-row justify-between">
            {/* PRODUCT TITLE */}
            <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
              cotton
            </div>

            {/* PRODUCT SUBTITLE */}
            <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
              Hijabisss
            </div>

            {/* PRODUCT PRICE */}
            <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
              MRP : $346
            </div>
            {/* PRODUCT SUBTITLE */}
          </div>
          {/* SELECTORS */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
              <div className="flex items-center gap-1">
                <div className="font-semibold">COLORS:</div>
                <select className="hover:text-black">
                  <option value="1">Black</option>
                  <option value="2">Blue</option>
                  <option value="3">Red</option>
                </select>
              </div>
              {/* QUANTNITY */}
              <div className="flex items-center gap-1">
                <div className="font-semibold">COLORS:</div>
                <select className="hover:text-black">
                  <option value="1">Black</option>
                  <option value="2">Blue</option>
                  <option value="3">Red</option>
                </select>
              </div>
            </div>
            <RiDeleteBin6Line className="cursor-pointer text-black/[0.5] hover:text-black text-[16px]md:text-[20px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItems;
