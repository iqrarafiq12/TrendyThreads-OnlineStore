/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Pants() {
  return (
    <>
      <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
        <Carousel
          infiniteLoop={true}
          showIndicators={false}
          showStatus={false}
          thumbWidth={60}
          className="productCarousel"
        >
          <img src="/ClothingImages/Pants-02.webp" />
          <img src="/ClothingImages/Pants-03.webp" />
          <img src="/ClothingImages/Pants-04.webp" />
          <img src="/ClothingImages/Pants-05.webp" />
        </Carousel>
      </div>
    </>
  );
}

export default Pants;
