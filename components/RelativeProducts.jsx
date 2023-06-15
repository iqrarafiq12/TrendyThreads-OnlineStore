/* eslint-disable @next/next/no-img-element */
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
            {/* SLIDE 01 */}
            <Link href="/Chiffon/ChiffonHijab">
              <img
                src="/RelativeImages/Slide-01.webp"
                alt=""
                className="py-4 px-2"
              />
            </Link>
            {/* SLIDE 02 */}
            <Link href="/Cotton/CottonHijabs">
              <img src="/RelativeImages/Slide-02.webp" />
            </Link>
            {/* SLIDE 03 */}
            <Link href="/Jersey/Hijab">
              <img
                src="/RelativeImages/Slide-03.webp"
                alt=""
                className="py-4 px-2"
              />
            </Link>
            {/* AccessoriesImages */}
            {/* SLIDE 01 */}
            <Link href="/NeckCovers/Hijabis-NeckCovers">
              <img
                src="/RelativeImages/Slide-04.webp"
                alt=""
                className="py-4 px-2"
              />
            </Link>
            {/* SLIDE 02 */}
            <Link href="/UnderCaps/UndercapsForHijabis">
              <img
                src="/RelativeImages/Slide-05.webp"
                alt=""
                className="py-2 px-4"
              />
            </Link>
            {/* SLIDE 03 */}
            <Link href="/Scrunchies/Volumize">
              <img
                src="/RelativeImages/Slide-06.webp"
                alt=""
                className="py-4 px-2"
              />
            </Link>

            {/* ClothingImages */}
            {/* SLIDE 01 */}
            <Link href="/Dresses/Eid2k23">
              <img
                src="/RelativeImages/Slide-07.webp"
                alt=""
                className="py-6 px-4"
              />
            </Link>
            {/* SLIDE 02 */}
            <Link href="/product/slug">
              <img
                src="/RelativeImages/Slide-08.webp"
                alt=""
                className="py-4 px-2"
              />
            </Link>
            {/* SLIDE 03 */}
            <Link href="/product/slug">
              <img
                src="/RelativeImages/Slide-09.webp"
                alt=""
                className="py-6 px-4"
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
