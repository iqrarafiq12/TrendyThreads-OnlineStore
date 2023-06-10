import React from 'react';
import Wrapper from '@/components/Wrapper';
import ClothingProducts from '@/app/ClothingProducts';
const attire = () => {
  return (
    <>
      <div className="w-full md:py-20">
        <Wrapper>
          <ClothingProducts />
        </Wrapper>
      </div>
    </>
  );
};

export default attire;
