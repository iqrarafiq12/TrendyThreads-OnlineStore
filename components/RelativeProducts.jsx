import React from 'react';
import Link from 'next/link';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function RelativeProducts() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <>
      <div className="w-full md:py-20">
        <div className="mt-[50px] text-center p-3 md:mt-[50px] mb-[50px] md:mb-0">
          <div className="text-2xl font-bold mb-5">You Might Also Like</div>
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={['tablet', 'mobile']}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {/* FOR HIJAB */}
            <Link href="/product/slug">
              <img
                src="/assets/HijabSkin-01.webp"
                alt=""
                className="p-3 py-4"
              />
            </Link>
            <Link href="/product/slug">
              <img
                src="/assets/HijabSkin-01.webp"
                alt=""
                className="p-3 py-4"
              />
            </Link>
            <Link href="/product/slug">
              <img
                src="/assets/HijabSkin-01.webp"
                alt=""
                className="p-3 py-4"
              />
            </Link>
            {/* FOR ATTIRE */}
            <Link href="/product/slug">
              <img
                src="/assets/HijabGray-01.webp"
                alt=""
                className="p-3 py-4"
              />
            </Link>
            <Link href="/product/slug">
              <img
                src="/assets/HijabGray-01.webp"
                alt=""
                className="p-3 py-4"
              />
            </Link>
            <Link href="/product/slug">
              <img
                src="/assets/HijabGray-01.webp"
                alt=""
                className="p-3 py-4"
              />
            </Link>
            {/* FOR ACCESSORIES */}
            <Link href="/product/slug">
              <img
                src="/assets/HijabPeach-02.webp"
                alt=""
                className="p-3 py-4"
              />
            </Link>
            <Link href="/product/slug">
              <img
                src="/assets/HijabPruple-01.webp"
                alt=""
                className="p-3 py-4"
              />
            </Link>
            <Link href="/product/slug">
              <img
                src="/assets/HijabPruple-01.webp"
                alt=""
                className="p-3 py-4"
              />
            </Link>
          </Carousel>
          ;
        </div>
      </div>
    </>
  );
}

export default RelativeProducts;
