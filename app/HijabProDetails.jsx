import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function ProductDetails() {
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
          <img src="/assets/HijabSkin-01.webp" />
          <img src="/assets/HijabSkin-02.webp" />
          <img src="/assets/HijabSkin-03.webp" />
          <img src="/assets/HijabSkin-04.webp" />
        </Carousel>
      </div>
    </>
  );
}

export default ProductDetails;
