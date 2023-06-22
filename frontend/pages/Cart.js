/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Wrapper from '@/components/Wrapper';
import CartItems from '@/components/CartItems';
const Cart = () => {
  return (
    <>
      <div className="W-full md:py-20">
        <Wrapper>
          {/* Heading */}
          <div className="text-[28px] text-center md:text-[34px] mb-5 font-semibold loading-tight">
            Shopping Cart
          </div>
          {/* CART CONTENT */}
          <div className="flex flex-col lg:flex-row gap-12 py-10">
            {/* cart item start */}
            <div className="flex-[2]">
              <div className="text-lg font-bold">Cart Items</div>
              <CartItems />
              <CartItems />
              <CartItems />
            </div>
            {/* SUMMERY item start */}
            <div className="flex-[1]">
              <div className="text-lg font-bold">Summery Items</div>
              <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
                <div className="flex justify-between">
                  <div className="uppercase text-md md:text-lg font-medium text-black">
                    Subtotal
                  </div>
                  <div className="">$20.785.00</div>
                </div>
                <div className="text-sm md:text-md py-5 border-t mt-5">
                  the Subtotal reflects the total price of your order, including
                  duties and taxas, before any applicable discounts. It does not
                  include delivery costs and international transaction fees
                </div>
              </div>
              {/* button  */}
              <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
                Checkout
              </button>
            </div>
            {/* SUMMERY item end */}
          </div>
          {/* CART CONTENT END */}
          {/* EMPTY CARD START */}
          <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
            <Image
              src="/EmptyBagVector.jpg"
              height={300}
              width={300}
              className="w-[300px] md:w-[400px]"
            />
            <span className="text-xl font-bold">Your Cart Is EMPTY</span>
            <span className="text-center mt-4">
              Looks like you have not added anything in your cart.
              <br />
              Go ahead and explore top catogries
            </span>
            <Link
              href="/"
              className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium
            transition-transform active:odd:scale-95 mb-3 hover:opacity-75 mt-8"
            >
              Continue Shopping
            </Link>
          </div>
          {/* EMPTY CARD END*/}
        </Wrapper>
      </div>
    </>
  );
};
export default Cart;
