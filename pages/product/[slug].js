import Wrapper from '@/components/Wrapper';
import React from 'react';
import ProductDetails from '@/components/ProductDetails';

import { IoMdHeartEmpty } from 'react-icons/io';

const Product = () => {
  return (
    <>
      <div className="w-full md:py-20">
        <Wrapper>
          <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
            {/*  div left one */}
            <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
              {/* Left Column Start */}
              left <ProductDetails />
              {/* Left Column end */}
            </div>
            {/*  div Right one */}
            <div className="flex-[1] py-3">
              {/* right Column Start */}
              right
              {/* right Column end */}
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default Product;
