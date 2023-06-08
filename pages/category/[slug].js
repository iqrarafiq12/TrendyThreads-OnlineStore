import React from 'react';

import Wrapper from '@/components/Wrapper';
import ProductItems from '@/components/ProductItems';

const Cetegory = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="text-centermax-w-[800px] mt-8 md:mt-0">
          <div className="text-[28px[ md:text-[34px] mb-5 font-semibold loading-tight">
            New Hijab Arrives
          </div>
        </div>
        {/* products grid start */}
        <div className="flex items-center justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          <ProductItems />
        </div>
      </Wrapper>
    </div>
  );
};

export default Cetegory;
