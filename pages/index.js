import HeroSection from '@/components/HeroSection';

import Wrapper from '@/components/Wrapper';
import ProductCard from '@/components/ProductCard';

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />

        <Wrapper>
          {/* products grid start */}
          <div className="flex md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
            <ProductCard />
          </div>
        </Wrapper>
      </main>
    </>
  );
}
