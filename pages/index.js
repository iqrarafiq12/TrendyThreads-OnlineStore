import Link from 'next/link';
import HeroSection from '@/components/HeroSection';

import Wrapper from '@/components/Wrapper';
import ProductCard from '@/components/ProductCard';

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />

        <Wrapper>
          {/* heading and paragaph start */}
          <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
            <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
              All the essentials
            </div>
            <div className="text-md md:text-xl">
              And some guilty pleasures. You'll find a modern color palette in
              premium materials like cotton, jersey, satin, chiffon, viscose,
              modal, silk, and
              <Link href="/"> more.</Link>
            </div>
          </div>
          {/* end */}
          {/* products grid start */}
          <div className="flex md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
            <ProductCard />
          </div>
        </Wrapper>
      </main>
    </>
  );
}
