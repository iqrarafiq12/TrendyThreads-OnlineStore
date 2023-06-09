import React from 'react';
import Wrapper from '@/components/Wrapper';
import ProductItems from '@/components/ProductItems';
const productItems = () => {
  return (
    <>
      <div className="w-full md:py-20">
        <Wrapper>
          <ProductItems />
        </Wrapper>
      </div>
    </>
  );
};

export default productItems;
